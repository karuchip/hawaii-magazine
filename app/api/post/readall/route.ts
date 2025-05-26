import {NextResponse} from "next/server"
import prisma from '../../../../utils/prisma'

export async function GET() {
  try {
    const allItems = await prisma.post.findMany({
      include: {
        author: true,
      }
    })
    return NextResponse.json({message: "アイテム読み取り成功", allItems: allItems})
  }catch(error){
    console.error('Prismaエラー:', error)
    return NextResponse.json({message: "アイテム読み込み失敗"})
  }
}
