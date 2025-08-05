"use client"
import {useEffect, useState} from "react"
import {useRouter} from "next/navigation"
import { useAuthContext } from "@/context/AuthContext"
import loading from "@/app/components/common/loading"
import Loading from "@/app/components/common/loading"
import { useSetAtom } from "jotai"
import { notificationAtom } from "@/utils/notification/notificationAtom"

const Logout = () => {
  const {setLoginUserId, setLoginUserName, setLoginUserEmail, setLoginUserIcon} = useAuthContext()
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  // jotai
  const setNotifications = useSetAtom(notificationAtom)

  useEffect(() => {

    const logout = () => {
      // context削除
      setLoading(true)
      setLoginUserId(null)
      setLoginUserEmail(null)
      setLoginUserName(null)
      setLoginUserIcon(null)

      // jotai削除
      setNotifications([])

      // token削除
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
    }

    logout()
  }, [])

  if(loading) {
    return(
      <Loading/>
    )
  }

  return null

}

export default Logout
