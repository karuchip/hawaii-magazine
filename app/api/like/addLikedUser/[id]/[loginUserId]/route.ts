import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/prisma";


export async function POST(request:NextRequest) {
  const url = new URL(request.url)
  const segments = url.pathname.split("/")
  const id = segments[segments.length - 2]
  const loginUserId = segments[segments.length - 1]

  if (!id || isNaN(Number(id))) {
    return NextResponse.json({message: "IDが不正です"}, {status: 400})
  }

  try {
      const addedLike = await prisma.postLikes.create({
        data: {
          postId: Number(id),
          userId: Number(loginUserId)
        }
      })

      return NextResponse.json({message:"mahaloしました", data:addedLike})

    } catch(error:any) {
      if (error.code === "P2002") {
        return NextResponse.json({message: "ログインユーザーはmahaloボタン押下済みです"})
      }
      console.error("prismaエラー", error)
      return NextResponse.json({error: "サーバーエラーが発生しました"}, {status:500})
    }
}
