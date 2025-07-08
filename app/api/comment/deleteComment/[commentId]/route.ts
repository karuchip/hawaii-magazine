import { NextResponse, NextRequest } from "next/server";
import prisma from "@/utils/prisma";

type DeleteRequestBody = {
  commentId: number,
  loginUserId: number
}

export async function DELETE(request: NextRequest) {

  const url = new URL(request.url)
  const segments = url.pathname.split("/")
  const commentId = segments[segments.length - 1]

  if (!commentId || isNaN(Number(commentId))) {
    return NextResponse.json({message: "idが不正です"}, {status:400})
  }
  const id = Number(commentId)

  const body:DeleteRequestBody = await request.json()
  const commentUserId = body.loginUserId

  try {
    const singleComment = await prisma.postComments.findUnique({
      where:{commentId: id}
    })

    if(singleComment) {

      if(singleComment.userId === commentUserId) {
        await prisma.postComments.delete({
          where:{commentId: id}
        })
        return NextResponse.json(
          {message:"コメント削除が成功しました"},
          {status: 200}
        )

      } else {
        return NextResponse.json(
          {message:"削除権限がありません"},
          {status: 403}
        )
      }

    } else {
      return NextResponse.json(
        {message:"データベースに該当のコメントが存在しません"},
        {status: 404}
      )
    }

  }catch(error) {
    console.error("Prismaエラー:" , error)
    return NextResponse.json({message:"削除に失敗しました"})
  }
}
