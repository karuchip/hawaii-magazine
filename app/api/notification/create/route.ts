import {NextResponse, NextRequest} from "next/server"
import prisma from "@/utils/prisma"

export async function POST(request: NextRequest) {
  const body = await request.json()
  console.log("api発動")
  console.log("Notification data:", body)

  try {
    const newNotification = await prisma.notification.create({
      data: {
        postId: body.postId,
        senderId: body.senderId,
        receivedId: body.receivedId,
        type: body.type,
      }
    })
    return NextResponse.json({message: '通知が作成されました', notification: newNotification})

  } catch (error) {
    console.error('Prismaエラー:', error)
    return NextResponse.json({message: '通知の作成に失敗しました'})
  }
}
