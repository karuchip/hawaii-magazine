import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/prisma";
import distanceCalc from "@/utils/distanceCalc";

export async function GET(request: NextRequest){

  console.log("near apiが呼び出されました")

  const {searchParams} = new URL(request.url)
  const lat = parseFloat(searchParams.get("lat") || "")
  const lon = parseFloat(searchParams.get("lon") || "")

  if (isNaN(lat) || isNaN(lon)) {
    return NextResponse.json({message: "Invalid lat/lon"})
  }

  const {minLat, maxLat, minLon, maxLon} = distanceCalc(lat, lon)

  try {
    const nearPosts = await prisma.post.findMany({
      where: {
        lat: {gte: minLat, lte: maxLat},
        lon: {gte: minLon, lte: maxLon},
      },
      include: {author: true},
    })

    return NextResponse.json({message: "アイテム読み取り成功", nearPosts: nearPosts})

  } catch (error) {
    console.error(error);
    console.error('Prismaエラー:', error)
    return NextResponse.json({message: "アイテム読み込み失敗"})
  }
}
