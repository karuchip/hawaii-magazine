import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/prisma"


export async function GET(request:NextRequest) {
  const url = new URL(request.url)
  const segments = url.pathname.split("/")
  const loginUserId = segments[segments.length - 1]

  if (!loginUserId || isNaN(Number(loginUserId))) {
    return NextResponse.json({message: "userIdが正しくありません"})
  }
  const userId = Number(loginUserId)

  try{
    const myInf = await prisma.user.findUnique({
      where: {id: userId},
      select: {
        id: true,
        name: true,
        email: true,
        userIcon: true,
        userProfile: true,
      }
    })
    return NextResponse.json({message:" ユーザー情報読み取り成功", myInf:myInf})

  }catch(error) {
    console.error('Prismaエラー:', error)
    return NextResponse.json({message:"ユーザー情報読み取り失敗"})
  }
}
