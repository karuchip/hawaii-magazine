import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/prisma"


export async function GET(request:NextRequest) {
  const url = new URL(request.url)
  const segments = url.pathname.split("/")
  const id = segments[segments.length - 1]
  if (!id || isNaN(Number(id))) {
    return NextResponse.json({message: "userIdが正しくありません"})
  }
  const userId = Number(id)

  try{
    const myInf = await prisma.user.findUnique({
      where: {id:userId},
      select: {
        id: true,
        name: true,
        email: true,
        userIcon: true,
        userProfile: true,
      }
    })

    if(!myInf) {
      return NextResponse.json({error: "ユーザーが見つかりません"})
    }
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || ''
    const userAgent = request.headers.get('user-agent') || ''

    await prisma.userViews.create({
      data: {
        userId: Number(userId),
        ip,
        userAgent
      }
    })

    return NextResponse.json({message:" ユーザー情報読み取り成功", myInf:myInf})

  }catch(error) {
    console.error('Prismaエラー:', error)
    return NextResponse.json({message:"ユーザー情報読み取り失敗"})
  }
}
