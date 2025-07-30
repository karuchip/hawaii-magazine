import { NextResponse, NextRequest } from "next/server"
import { jwtVerify } from "jose"

export async function middleware(request:NextRequest) {

  const token = await request.headers.get("Authorization")?.split(" ")[1]

  if(!token) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  try {
    const secretKey = new TextEncoder().encode("my-aloha-app-book")
    const decodedJwt = await jwtVerify(token, secretKey)

    return NextResponse.next()

  } catch(error) {
    console.error("認証エラー:", error)
    return NextResponse.json({message: "トークンが正しくないのでログインしてください"})
  }

}

export const config = {
  matcher: [
    "/api/post/create",
    "/api/post/update/:path",
    "/api/post/delete/:path",
    "/api/mypage/updateUserProfile/:path",
    "/api/comment/createComment/:path",
    "/api/like/addLikedUser/:path",
    "/api/user/deleteAccount/:path",
    "/api/user/userInf/:path",
    "/api/notification/update/:path",
  ],
}
