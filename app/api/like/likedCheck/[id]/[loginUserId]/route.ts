import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/prisma";

export async function GET(request:NextRequest) {

  const url = new URL(request.url)
  const segments = url.pathname.split("/")
  const id = segments[segments.length - 2]
  const loginUserId = segments[segments.length - 1]

  if (!id || isNaN(Number(id))) {
    return NextResponse.json({message: "IDが不正です"}, {status: 400})
  }

  try {

    const checkLiked = await prisma.postLikes.findFirst({
      where: {
        postId: Number(id),
        userId: Number(loginUserId)
      }
    })

    //初めてのいいねだった場合
    if(checkLiked) {
      return NextResponse.json({hasLiked: true})
    } else {
      return NextResponse.json({hasLiked : false})
    }
  }catch(error) {
    console.error("prismaエラー",  error)
    return NextResponse.json({error: "サーバーエラーが発生しました"}, {status:500})
  }
}
