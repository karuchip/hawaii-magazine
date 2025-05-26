import {NextResponse, NextRequest} from "next/server"
import prisma from "@/utils/prisma"
import { SignJWT } from "jose"

type Body = {
  name: string,
  email: string,
  userIcon: string,
  userProfile: string
}

export async function PUT(request: NextRequest) {
  const body = await request.json() as Body

  const url = new URL(request.url)
  const segments = url.pathname.split("/")
  const loginUserId = segments[segments.length - 1]

  if (!loginUserId || isNaN(Number(loginUserId))) {
    return NextResponse.json({message: "idが不正です"}, {status:400})
  }
  const id = Number(loginUserId)

  try{

    const user = await prisma.user.findFirst({
      where: {id}
    })

    if(user) {
      if(user.email === body.email) {
        const updateUser = await prisma.user.update({
          where: {id},
          data: {
            name: body.name,
            userIcon: body.userIcon,
            userProfile: body.userProfile
          }
        })

        const secretKey = new TextEncoder().encode("my-aloha-app-book")
        const payload = {
          email: updateUser.email,
          name: updateUser.name,
          id: updateUser.id,
          userIcon: updateUser.userIcon
        }

        const token = await new SignJWT(payload)
                                .setProtectedHeader({alg: "HS256"})
                                .setExpirationTime("1d")
                                .sign(secretKey)

        return NextResponse.json({message:"ユーザー編集成功", newToken: token})

      }else {
        return NextResponse.json({message:"ユーザーが存在しません。"})

    }

    }else {
      return NextResponse.json({message: "ユーザー情報が取得できませんでした"})
    }
  }catch(error) {
    console.error(error)
    return NextResponse.json({message:"ユーザー編集失敗"})
  }
}
