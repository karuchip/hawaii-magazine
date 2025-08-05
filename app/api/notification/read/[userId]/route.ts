import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/prisma";

export async function GET(request: NextRequest) {
  const url = new URL(request.url)
  const segments = url.pathname.split("/")
  const id = segments[segments.length - 1]

  if (!id || isNaN(Number(id))) {
    return NextResponse.json({message: "userIdが正しくありません"})
  }

  const userId = Number(id)

  try{
    const notificationResult = await prisma.notification.findMany({
      where: { receivedId: userId },
      select: {
        id: true,
        type: true,
        hasConfirmed: true,
        createdAt: true,
        post: {
          select: {
          id: true,
          title: true,
          image1: true,
          },
        },
        sender: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    return NextResponse.json({ notificationResult:notificationResult }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ message: "通知の取得に失敗しました", error: error instanceof Error ? error.message : String(error) }, { status: 500 });
  }
}
