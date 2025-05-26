"use client"
import { useRouter } from "next/navigation"
import { useAuthContext } from "../AuthContext"


const UserIcon = () => {
  const router = useRouter()
  const {loginUserId, loginUserIcon} = useAuthContext()

  const handleClick = () => {
    if(loginUserId) {
      router.push(`/mypage/readmypage/${loginUserId}`)

    } else {
      alert("ログイン情報が取得できませんでした")
    }
  }

  return(
    <img
      src={loginUserIcon || "/images/defaultIcon.JPG"}
      alt="アイコン"
      onClick={handleClick}
      style={{ cursor: "pointer", borderRadius: "50%", width: "50px", height: "50px" }}
    />
  )
}

export default UserIcon
