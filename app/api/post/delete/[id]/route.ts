import { NextResponse, NextRequest } from "next/server"
import prisma from "../../../../../utils/prisma"

type DeleteRequestBody = {
  authorId: number
}

export async function DELETE(request: NextRequest) {
  const url = new URL(request.url)
  const segments = url.pathname.split("/")
  const postId = segments[segments.length - 1]

  if (!postId || isNaN(Number(postId))) {
    return NextResponse.json({message: "idが不正です"}, {status:400})
  }
  const id = Number(postId)
  const body:DeleteRequestBody = await request.json()

  try {
    const singleItem = await prisma.post.findUnique({
      where:{id}
    })

    if (singleItem){
      if (singleItem.authorId === body.authorId) {

        // 関連レコードの削除
        await prisma.postLikes.deleteMany({where: {postId:id}});
        await prisma.postComments.deleteMany({where:{postId: id}});

        //postテーブルから該当投稿を削除
        await prisma.post.delete({
          where: {id}
        })
        return NextResponse.json({message:"削除が成功しました"})
      }
    }else {
      return NextResponse.json({message:"該当の投稿がDBに存在しません"})
    }

  } catch(error) {
    console.error("Prismaエラー:" , error)
    return NextResponse.json({message:"削除に失敗しました"})
  }
}
