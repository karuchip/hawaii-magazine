import { NextResponse, NextRequest } from "next/server";
import prisma from "@/utils/prisma";


export async function DELETE(request:NextRequest) {
  const url = new URL(request.url)
  const segments = url.pathname.split("/")
  const userId = segments[segments.length - 1]

  if(!userId || isNaN(Number(userId))){
    return NextResponse.json({message: "idが不正です"})
  }

  const id = Number(userId)
  const body = await request.json()

  try {
    const user = await prisma.user.findUnique({
      where:{id}
    })

    if(user) {

      if(user.email === body.email) {

        //関連テーブルからの削除
        await prisma.post.deleteMany({where: {authorId: user.id}})
        await prisma.postLikes.deleteMany({where: {userId: user.id}})
        await prisma.postComments.deleteMany({where: {userId: user.id}})

        //userテーブルからのuser削除
        await prisma.user.delete({
          where: {id}
        })
        return NextResponse.json({message:"ユーザー退会処理が完了しました。本サービスをご利用いただきありがとうございました。"})
      }
    } else {
      return NextResponse.json({message:"該当のユーザーがデータベースに存在しません"})
    }

  }catch (error) {
    console.error("Prismaエラー：", error)
    return NextResponse.json({message:"削除に失敗しました。"})
  }
}
