import { NextResponse } from "next/server";
import prisma from "@/utils/prisma";

export async function GET() {

  const now = new Date()
  const oneWeekAgo = new Date(now.getTime() - ( 7 * 24 * 60 * 60 * 1000 ))

  try {
    // profile閲覧数上位3のuserIdと、閲覧数を取得
    const topProfileId = await prisma.userViews.groupBy({
      by: ['userId'],
      where: {
        viewedAt: {
          gte: oneWeekAgo,
          lt:  now,
        },
      },
      _count: {
        userId: true,
      },
      orderBy: {
        _count: {
          userId: 'desc'
        },
      },
      take: 3,
    })
    if (!topProfileId) {
      return NextResponse.json({message: "上位のユーザー情報が見つかりません"})
    }


    // 取得したpostIdから投稿データを取得
    const topProfile = await prisma.user.findMany({
      where: {
        id: {
          in: topProfileId.map((t) => t.userId)
        },
      },
      select: {
        id: true,
        name: true,
        userIcon: true
      },
    })
    if (!topProfile) {
      return NextResponse.json({message: "投稿が見つかりません"})
    }

    // topProfileIdから、profileIdと閲覧数のみをMapに保管, Map(ここは初期値)
    const viewCountMap = new Map(
      topProfileId.map((t) => [t.userId, t._count.userId])
    )

    // 閲覧数と投稿データをマージ
    const mergedProfileData = topProfile.map((profile) => ({
      ...profile,
      viewCount: viewCountMap.get(profile.id)
    }))

    return NextResponse.json({message:"上位ユーザーの取得が完了", mergedProfileData: mergedProfileData});


  } catch (error) {
    console.error('Prismaエラー:', error)
    return NextResponse.json({message:"上位ユーザーの取得が失敗"})
  }
}
