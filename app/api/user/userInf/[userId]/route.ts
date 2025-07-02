import { NextResponse, NextRequest } from "next/server";
import prisma from "@/utils/prisma";
import { SignJWT } from "jose";


export async function PUT(request:NextRequest) {

  const url = new URL(request.url)
  const segments = url.pathname.split("/")
  const userId = segments[segments.length - 1]

  if(!userId || isNaN(Number(userId))){
    return NextResponse.json({message: "idが不正です"})
  }

  const id = Number(userId)
  const body = await request.json()

  try {
    const user = await prisma.user.findUnique({
      where:{id}
    })

    if(user) {

      if(user.id === body.loginUserId) {
        const updateUserInf = await prisma.user.update({
          where: {id},
          data: {
            email: body.email
          }
        })

        const secretKey = new TextEncoder().encode("my-aloha-app-book")
                const payload = {
                  email: updateUserInf.email,
                  name: updateUserInf.name,
                  id: updateUserInf.id,
                  userIcon: updateUserInf.userIcon
                }

                const token = await new SignJWT(payload)
                                        .setProtectedHeader({alg: "HS256"})
                                        .setExpirationTime("1d")
                                        .sign(secretKey)


        return NextResponse.json({message:"メールアドレスのアップデートが完了しました", newToken:token})
      } else {
        return NextResponse.json({message:"ユーザー情報が正しくありません"})
      }
    } else {
      return NextResponse.json({message:"該当のユーザーがデータベースに存在しません"})
    }

  }catch (error) {
    console.error("Prismaエラー：", error)
    return NextResponse.json({message:"メールアドレスのアップデートに失敗しました。"})
  }
}
