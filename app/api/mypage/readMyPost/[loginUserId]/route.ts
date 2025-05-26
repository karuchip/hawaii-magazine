import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/prisma";

export async function GET (request: NextRequest) {
  const url = new URL(request.url)
  const segments = url.pathname.split("/")
  const loginUserId = segments[segments.length - 1]

  if (!loginUserId || isNaN(Number(loginUserId))) {
    return NextResponse.json({message: "userIdが正しくありません"})
  }
  const userId = Number(loginUserId)

  try{
    const myPost = await prisma.post.findMany({
      where: {authorId: userId},
      include: {
        author: true,
      }
    })
    return NextResponse.json({message:" ユーザー投稿読み取り成功", myPost:myPost})

  }catch(error) {
    console.error('Prismaエラー:', error)
    return NextResponse.json({message:"ユーザー投稿読み取り失敗"})
  }
}
