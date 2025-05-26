import { NextResponse, NextRequest } from "next/server";
import prisma from "../../../../../utils/prisma"

type Body = {
  title: string,
  place: string,
  lat: number,
  lon: number,
  image: string,
  description: string,
  category: string,
  authorId: number,
}

export async function PUT(request: NextRequest) {
  const body = await request.json() as Body

  const url = new URL(request.url)
  const segments = url.pathname.split("/")
  const postId = segments[segments.length - 1]

  if (!postId || isNaN(Number(postId))) {
    return NextResponse.json({message: "idが不正です"}, {status:400})
  }
  const id = Number(postId)

  try {

    const singleItem = await prisma.post.findUnique({
      where: {id}
    })
    if (singleItem) {

      //リクエストのauthorIdとDBのauthorIdが一致しているか？？
      if (singleItem.authorId === body.authorId) {

        await prisma.post.update({
          where: {id},
          data: {
            title: body.title,
            place: body.place,
            lat: body.lat,
            lon: body.lon,
            image: body.image,
            description: body.description,
            category: body.category,
            authorId: 1,
          }
        })
        return NextResponse.json({message:"編集が完了しました"})

      } else {
        return NextResponse.json({message:"他の人が作成したアイテムです"})
      }
    }else {
      return NextResponse.json({message:"対象のアイテムが存在しません"})
    }


  }catch(error) {
    console.error('Prismaエラー', error)
    return NextResponse.json({message:"編集が失敗しました"})
  }
}
