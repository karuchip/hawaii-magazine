import { NextResponse, NextRequest } from "next/server"
import { SignJWT } from "jose"
import prisma from "../../../../utils/prisma"

type Body = {
  email: string,
  password: string
}

export async function POST (request:NextRequest){
  const body = await request.json() as Body;

  try {

    const isSavedUserData = await prisma.user.findUnique({
      where: {email: body.email}
    })

    //メールアドレスが登録されているかどうか
    if (isSavedUserData) {

      //パスワードが正しいかどうか
      if (isSavedUserData.password === body.password) {
        const secretKey = new TextEncoder().encode("my-aloha-app-book")
        const payload = {
          email: body.email,
          name: isSavedUserData.name,
          id: isSavedUserData.id,
          userIcon: isSavedUserData.userIcon
        }

        const token = await new SignJWT(payload)
                                .setProtectedHeader({alg: "HS256"})
                                .setExpirationTime("1d")
                                .sign(secretKey)

        return NextResponse.json({message:"ログイン成功", token:token, payload})

      } else {
        return NextResponse.json({message: "パスワードが違います"})
      }

    }else {
      return NextResponse.json({message:"メールアドレスが登録されていません"})
    }

  }catch (error) {
    console.error("Prismaエラー:", error)
    return NextResponse.json({message:"リクエスト失敗"})
  }
}
