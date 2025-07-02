"use client"
import {useEffect, useState} from "react"
import {useRouter} from "next/navigation"
import { useAuthContext } from "@/context/AuthContext"
import loading from "@/app/components/loading"
import Loading from "@/app/components/loading"

const Logout = () => {
  const {setLoginUserId, setLoginUserName, setLoginUserEmail, setLoginUserIcon} = useAuthContext()
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setLoginUserId(null)
    setLoginUserEmail(null)
    setLoginUserName(null)
    setLoginUserIcon(null)

    const token = localStorage.getItem("token")
    if (token) {
      try {
        localStorage.removeItem("token")
        alert("ログアウトしました")
        router.replace("/user/login")
      }finally {
        setLoading(false)
      }
    }
  }, [])

  if(loading) {
    return(
      <Loading/>
    )
  }

  return null

}

export default Logout
