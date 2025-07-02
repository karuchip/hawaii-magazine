"use client"
import { useRouter } from "next/navigation"
import { useAuthContext } from "../../context/AuthContext"


const UserIcon = () => {
  const router = useRouter()
  const {loginUserId, loginUserIcon} = useAuthContext()

  const handleClick = () => {
    if(loginUserId) {
      router.push(`/readmypage/${loginUserId}`)

    } else {
      alert("ログイン情報が取得できませんでした")
    }
  }

  return(
    <img
      src={loginUserIcon || "/images/defaultIcon.JPG"}
      alt="アイコン"
      onClick={handleClick}
      className="userIcon"
    />
  )
}

export default UserIcon
