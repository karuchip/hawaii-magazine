import { NextResponse, NextRequest } from "next/server";
import prisma from "../../../../../utils/prisma"

export async function PUT(request: NextRequest) {
  const body = await request.json()

  const url = new URL(request.url)
  const segments = url.pathname.split("/")
  const postId = segments[segments.length - 1]
  console.log(postId)

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
            image1: body.image1,
            image2: body.image2,
            image3: body.image3,
            image4: body.image4,
            image5: body.image5,
            description1: body.description1,
            description2: body.description2,
            description3: body.description3,
            description4: body.description4,
            description5: body.description5,
            category: body.category,
            location: body.location,
            googlePlace: body.googlePlace,
            lat: body.lat,
            lon: body.lon,
            published: body.published,
            authorId: body.authorId,
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
