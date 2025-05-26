import { NextResponse, NextRequest } from "next/server"
import prisma from '../../../../utils/prisma'

export async function POST(request: NextRequest) {
  const body = await request.json()
  console.log(body);

  try {
    const newPost = await prisma.post.create({
      data: {
        title: body.title,
        image: body.image,
        description: body.description,
        category: body.category,
        place: body.place,
        published: body.published,
        authorId: body.authorId,
        lat: body.lat,
        lon: body.lon
      }
    })
    return NextResponse.json({message: '投稿が完了しました'})

  } catch (error) {
    console.error('Prismaエラー:', error)
    return NextResponse.json({message: '投稿に失敗しました'})
  }
}
