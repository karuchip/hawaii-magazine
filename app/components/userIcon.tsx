"use client"
import { useRouter } from "next/navigation"
import { useAuthContext } from "../../context/AuthContext"

type Props = {
  width: number;
  height: number;
  img: string;
}

const UserIcon = ({width=40, height=40, img}: Props) => {
  const router = useRouter()
  const {loginUserId, loginUserIcon} = useAuthContext()
  if (!img && loginUserIcon){
    img = loginUserIcon
  }

  const handleClick = () => {
    if(loginUserId) {
      router.push(`/readmypage/${loginUserId}`)

    } else {
      alert("ログイン情報が取得できませんでした")
    }
  }

  return(
    <img
      src={img}
      alt="アイコン"
      onClick={handleClick}
      className="userIcon"
      width={width}
      height={height}
    />
  )
}

export default UserIcon
