"use client"
import {useEffect, useState} from "react"
import {useRouter} from "next/navigation"
import { useAuthContext } from "@/context/AuthContext"
import Loading from "@/app/components/common/loading"

const Logout = () => {
  const {setLoginUserId, setLoginUserName, setLoginUserEmail, setLoginUserIcon, setIsLoggedIn} = useAuthContext()
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setLoginUserId(null)
    setLoginUserEmail(null)
    setLoginUserName(null)
    setLoginUserIcon(null)
    setIsLoggedIn(false)

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
