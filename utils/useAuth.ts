"use client"
import {useState, useEffect} from "react"
import {useRouter} from "next/navigation"
import {jwtVerify} from "jose"
import { useAuthContext } from "@/context/AuthContext"


const useAuth = (shouldRedirect = true) => {
  const router = useRouter()
  const {
    loginUserId,
    loginUserName,
    loginUserEmail,
    loginUserIcon,
    setLoginUserId,
    setLoginUserName,
    setLoginUserEmail,
    setLoginUserIcon
  } = useAuthContext()
  const {loading, setLoading} = useAuthContext()

  useEffect(() => {

    const checkToken = async()=> {

      const token = localStorage.getItem("token")

      if(!token) {
        if(shouldRedirect) router.push("/user/login")
        setLoading(false)
        return
      }

      try {
        const secretKey = new TextEncoder().encode("my-aloha-app-book")
        const decodedJwt = await jwtVerify(token, secretKey)
        const payload = decodedJwt.payload as {email: string, name: string, id:string, userIcon:string}
        setLoginUserEmail(payload.email)
        setLoginUserName(payload.name)
        setLoginUserId(payload.id)
        setLoginUserIcon(payload.userIcon)
      }catch(error:any) {
        if(error.name === "JWTExpired") {
          console.warn("JWTの有効期限が切れています。ログアウト処理へ。");
          router.push("/user/logout")
        }
        console.error("トークン検証失敗:", error)
        if(shouldRedirect) router.push("/user/login")
      }finally {
        setLoading(false)
      }
    }

    checkToken()

  }, [])

  return {
    loginUserEmail,
    loginUserName,
    loginUserId,
    setLoginUserEmail,
    setLoginUserName,
    setLoginUserId,
    loading,
    setLoading
  }
}

export default useAuth
