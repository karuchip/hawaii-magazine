import { NextResponse, NextRequest } from "next/server"
import prisma from '../../../../utils/prisma'

export async function POST(request: NextRequest) {
  const body = await request.json()

  try {
    const newPost = await prisma.post.create({
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
    return NextResponse.json({message: '投稿が完了しました'})

  } catch (error) {
    console.error('Prismaエラー:', error)
    return NextResponse.json({message: '投稿に失敗しました'})
  }
}
