import {getDistance} from 'geolib';
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/utils/prisma';

export async function GET(request: NextRequest){

  const {searchParams} = new URL(request.url)
  const currentPostId = Number(searchParams.get("postId") || "")
  const currentLat = parseFloat(searchParams.get("lat") || "")
  const currentLon = parseFloat(searchParams.get("lon") || "")

  if (isNaN(currentPostId) || isNaN(currentLat) || isNaN(currentLon)) {
    return NextResponse.json({message: "Invalid lat/lon"})
  }

  try {
    const allPosts = await prisma.post.findMany({
      where: {
        NOT: {
          id: currentPostId,
        },
      },
      include: {author: true},
    })

    const postsWithDistance = allPosts.map(post => {
      if (post.lat == null || post.lon == null) return null;

        const distance = getDistance(
          {latitude: currentLat, longitude:currentLon},
          {latitude: post.lat, longitude: post.lon}
          )
      return {...post, distance}
    })
    .filter((p) => p!== null)

    const nearPosts = postsWithDistance
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 10);

    return NextResponse.json({message: "アイテム読み取り成功", nearPosts: nearPosts})

  } catch (error) {
    console.error(error);
    console.error('Prismaエラー:', error)
    return NextResponse.json({message: "アイテム読み込み失敗"})
  }
}
