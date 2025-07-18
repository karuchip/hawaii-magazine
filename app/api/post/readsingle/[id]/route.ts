import { NextRequest, NextResponse } from "next/server"
import prisma from "../../../../../utils/prisma"



export async function GET( request: NextRequest) {

  const url = new URL(request.url)
  const segments = url.pathname.split("/")
  const postId = segments[segments.length - 1]

  if (!postId || isNaN(Number(postId))) {
    return NextResponse.json({message: "idが不正です"}, {status:400})
  }
  const id = Number(postId)

  try {
    const singleItem = await prisma.post.findUnique({
      where: {id},
      include:{
        author: true
      }
    })

    if (!singleItem) {
      return NextResponse.json({error: "投稿が見つかりません"})
    }

    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || ''
    const userAgent = request.headers.get('user-agent') || ''

    await prisma.postViews.create({
      data: {
        postId: Number(postId),
        ip,
        userAgent
      }
    })

    return NextResponse.json({message: "シングルアイテム読み取り成功", singleItem:singleItem})

  }catch (error) {
    console.error('Prismaエラー:', error)
    return NextResponse.json({message: "シングルアイテム読み取り失敗"})
  }
}
