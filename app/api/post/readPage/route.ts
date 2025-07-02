import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/prisma";
import { Prisma } from "@/app/generated/prisma";



export async function GET(req: NextRequest) {
  const {searchParams} = new URL(req.url);
  const pageSize = 12;
  const page = parseInt(searchParams.get("page") || "1");

  const sort = searchParams.get("sort") || "new";
  const orderBy : Prisma.PostOrderByWithRelationInput =
    sort === "old"
      ? {createdAt: "asc"}
      : sort === "likes"
      ? {likeCount: "desc"}
      : {createdAt: "desc"}

  const category = searchParams.get("category") || "all"
  const keyWordRaw = searchParams.get("keyWord")?.trim()
  const keyWord = keyWordRaw?.trim() ?? ""

  const where : Prisma.PostWhereInput | undefined =
    category === "all" && !keyWord
      ? undefined
      : {
        AND: [
          ...(category === "all" ? [] : [{category}]),
          ...(keyWord
            ? [
                {
                  OR: [
                    {title: {contains: keyWord}},
                    {description1: {contains: keyWord}},
                    {description2: {contains: keyWord}},
                    {description3: {contains: keyWord}},
                    {description4: {contains: keyWord}},
                    {description5: {contains: keyWord}},
                  ],
                },
              ]
          : [])
        ]
      }



  const posts = await prisma.post.findMany({
    where,
    orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize,
    include:{
      author: true
    },
  });

  const totalCount = await prisma.post.count({where});
  return NextResponse.json({posts, totalCount});
}
