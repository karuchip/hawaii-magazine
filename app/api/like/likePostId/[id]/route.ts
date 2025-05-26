import {NextResponse, NextRequest} from "next/server"
import prisma from "@/utils/prisma"

export async function GET(request:NextRequest) {

  const url = new URL(request.url)
  const segments = url.pathname.split("/")
  const id = segments[segments.length - 1]

  if (!id || isNaN(Number(id))) {
    return NextResponse.json({message: "idが不正です"}, {status:400})
  }
  const userId = Number(id)

  try {
    const getLikePostId = await prisma.postLikes.findMany({
      where: {userId},
      select: {postId: true}
    })
    const likePostIds = getLikePostId.map((like => String(like.postId)))

    return NextResponse.json({message:"このユーザーがいいね済みの投稿ID一覧を取得しました", likePostIds:likePostIds})

  }catch(error) {
    console.error('Prismaエラー', error)
    return NextResponse.json({message: "いいね済みの投稿ID取得が失敗しました"})
  }
}
