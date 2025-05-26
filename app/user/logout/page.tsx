"use client"
import {useEffect} from "react"
import {useRouter} from "next/navigation"
import { useAuthContext } from "@/app/AuthContext"

const Logout = () => {
  const {setLoginUserId, setLoginUserName, setLoginUserEmail, setLoginUserIcon} = useAuthContext()
  const router = useRouter()

  useEffect(() => {
    setLoginUserId(null)
    setLoginUserEmail(null)
    setLoginUserName(null)
    setLoginUserIcon(null)

    const token = localStorage.getItem("token")
    if (token) {
      localStorage.removeItem("token")
      alert("ログアウトしました")
      router.replace("/user/login")
    }
  }, [])
  return null
}

export default Logout
