import {NextResponse, NextRequest} from "next/server"
import prisma from "@/utils/prisma"

export async function POST(request:NextRequest) {

  const url = new URL(request.url)
  const segments = url.pathname.split("/")
  const id = segments[segments.length - 1]

  if (!id || isNaN(Number(id))) {
    return NextResponse.json({message: "idが不正です"}, {status:400})
  }
  const postId = Number(id)

  try {

    const updated = await prisma.post.update({
      where: {id: postId},
      data: {likeCount: {increment:1}}
    })

    const updatedLikeCount = updated.likeCount

    return NextResponse.json({
      message:"mahaloしました!!",
      updatedLikeCount:updatedLikeCount
    })

  }catch(error) {
    console.error('Prismaエラー', error)
    return NextResponse.json({message:"like+1が失敗しました"})
  }
}
