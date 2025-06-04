import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/prisma";
import { Prisma } from "@/app/generated/prisma";

// GET /api/posts?page=2&sort=latest&category=beach

export async function GET(req: NextRequest) {
  const {searchParams} = new URL(req.url);

  const page = parseInt(searchParams.get("page") || "1");
  const pageSize = 10;
  const sort = searchParams.get("sort") || "latest"

  const orderBy : Prisma.PostOrderByWithRelationInput =
    sort === "oldest"
      ? {createdAt: "asc"}
      : sort === "likes"
      ? {likeCount: "desc"}
      : {createdAt: "desc"}

      const posts = await prisma.post.findMany({
        skip: (page - 1) * pageSize,
        take: pageSize,
        orderBy,
      });

      const totalCount = await prisma.post.count();
      return NextResponse.json({posts, totalCount});
}
