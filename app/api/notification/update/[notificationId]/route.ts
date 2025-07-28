import {NextResponse, NextRequest} from "next/server"
import prisma from "@/utils/prisma"

export async function PUT(request:NextRequest) {
  const url = new URL(request.url)
  const segment = url.pathname.split("/")
  const id = segment[segment.length - 1]

  if (!id || isNaN(Number(id))) {
    return NextResponse.json({message: "notificationIdが正しくありません"})
  }

  const notificationId = Number(id)

  try {
    const result = await prisma.notification.update({
      where: {
        id: notificationId
      },
      data: {
        hasConfirmed: true
      }
    })

    return NextResponse.json({message: "notificationテーブルを更新しました", result: result})

  }catch (error){
    return NextResponse.json({message: "notificationテーブルの更新が失敗しました"})
  }
}
