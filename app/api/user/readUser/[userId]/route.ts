import { NextRequest, NextResponse } from "next/server"
import prisma from "@/utils/prisma"


export async function GET( request: NextRequest) {

  const url = new URL(request.url)
  const segments = url.pathname.split("/")
  const userId = segments[segments.length - 1]

  if (!userId || isNaN(Number(userId))) {
    return NextResponse.json({message: "idが不正です"}, {status:400})
  }
  const id = Number(userId)

  try {
    const userInf = await prisma.user.findUnique({
      where: {id},
      select:{
        id: true,
        name: true,
        email: true,
      }
    })
    return NextResponse.json({message: "ユーザー情報の取得成功", userInf:userInf})

  }catch (error) {
    console.error('Prismaエラー:', error)
    return NextResponse.json({message: "ユーザー情報の読み取り失敗"})
  }
}
