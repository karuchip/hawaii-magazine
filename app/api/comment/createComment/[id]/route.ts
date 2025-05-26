import { NextRequest, NextResponse} from "next/server";
import prisma from "@/utils/prisma";

export async function POST(request:NextRequest) {

  try {
    const body = await request.json()
    const newComment =  await prisma.postComments.create({
      data: {
        comment: body.comment,
        postId: body.postId,
        userId: body.userId
      }
    })
    return NextResponse.json({message:"コメント投稿が完了しました"})
  } catch(error) {
    console.error("prismaエラー", error)
    return NextResponse.json({message:"コメント投稿が失敗しました"})
  }
}
