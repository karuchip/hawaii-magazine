import { NextResponse } from "next/server";
import prisma from "@/utils/prisma";

export async function GET() {

  const now = new Date()
  const oneWeekAgo = new Date(now.getTime() - ( 7 * 24 * 60 * 60 * 1000 ))

  try {
    // 閲覧数上位3のpostIdと、閲覧数を取得
    const topPostId = await prisma.postViews.groupBy({
      by: ['postId'],
      where: {
        viewedAt: {
          gte: oneWeekAgo,
          lt:  now,
        },
      },
      _count: {
        postId: true,
      },
      orderBy: {
        _count: {
          postId: 'desc'
        },
      },
      take: 3,
    })
    if (!topPostId) {
      return NextResponse.json({message: "上位の投稿が見つかりません"})
    }


    // 取得したpostIdから投稿データを取得
    const topPost = await prisma.post.findMany({
      where: {
        id: {
          in: topPostId.map((t) => t.postId)
        },
      },
      include: {
        author: true
      }
    })
    if (!topPost) {
      return NextResponse.json({message: "投稿が見つかりません"})
    }

    // topPostIdから、postIdと閲覧数のみをMapに保管, Map(ここは初期値)
    const viewCountMap = new Map(
      topPostId.map((t) => [t.postId, t._count.postId])
    )

    // 閲覧数と投稿データをマージ
    const mergedPostData = topPost.map((post) => ({
      ...post,
      viewCount: viewCountMap.get(post.id)
    }))

    return NextResponse.json({message:"上位投稿の取得が完了", mergedPostData: mergedPostData});


  } catch (error) {
    console.error('Prismaエラー:', error)
    return NextResponse.json({message:"上位投稿の取得が失敗"})
  }
}
