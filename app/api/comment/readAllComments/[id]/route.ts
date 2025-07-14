import {NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/prisma";


export async function GET(request: NextRequest){
  console.log("apiが呼び出されました")
  const url = new URL(request.url)
  const segments = url.pathname.split("/")
  const id = segments[segments.length - 1]

  if(!id || isNaN(Number(id))) {
    return NextResponse.json({message: "IDが不正です"},{status: 400})
  }

  const postId = Number(id)

  try {
    const readAllComments = await prisma.postComments.findMany({
      where: {postId: postId},
      include: {user: true},
    })

    return NextResponse.json({message:"コメント一覧取得が完了しました", readAllComments:readAllComments})
  }catch(error) {
    console.error({message:"Prismaエラー", error})
    return NextResponse.json({message:"コメント一覧の取得が失敗しました"})
  }
}
