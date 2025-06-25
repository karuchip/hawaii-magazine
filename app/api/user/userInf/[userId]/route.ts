import { NextResponse, NextRequest } from "next/server";
import prisma from "@/utils/prisma";
import { SignJWT } from "jose";


export async function PUT(request:NextRequest) {

  console.log("apiが呼び出されました")

  const url = new URL(request.url)
  const segments = url.pathname.split("/")
  const userId = segments[segments.length - 1]

  if(!userId || isNaN(Number(userId))){
    return NextResponse.json({message: "idが不正です"})
  }

  const id = Number(userId)
  const body = await request.json()
  console.log(`idは&{id}`)
  console.log(`bodyは&{body}`)

  try {
    const user = await prisma.user.findUnique({
      where:{id}
    })

    console.log(user)

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
