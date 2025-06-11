import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/prisma";

export async function GET (request: NextRequest) {

  const url = new URL(request.url)
  const segments = url.pathname.split("/")
  const id = segments[segments.length - 1]

  if (!id || isNaN(Number(id))) {
    return NextResponse.json({message: "userIdが正しくありません"})
  }
  const userId = Number(id)

  try{
    const myPost = await prisma.post.findMany({
      where: {authorId: userId},
      select: {
        id: true,
        createdAt: true,
        title: true,
        image1: true,
        author: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      }
    })

    return NextResponse.json({message:" ユーザー投稿読み取り成功", myPost:myPost})

  }catch(error) {
    console.error('Prismaエラー:', error)
    return NextResponse.json({message:"ユーザー投稿読み取り失敗"})
  }
}
