"use client"
import { useAuthContext } from "@/context/AuthContext"
import { useState, useEffect } from "react"
import { TextField, Button } from "@mui/material"
import {useRouter}from "next/navigation"
import Image from "next/image"

type Props = {
  myInf: {
    id: string
    name: string
    email: string
    userIcon: string
    userProfile?: string
  }
}

const EditMyPage = ({myInf}:Props) => {

  //アイコン画像のパス名
  const userIconPath = [
    "/images/profile1.JPG",
    "/images/profile2.JPG",
    "/images/profile3.JPG",
    "/images/profile4.JPG",
    "/images/profile5.JPG",
    "/images/profile6.JPG",
  ]

  const [name, setName] = useState("")
  const [userIcon, setUserIcon] = useState("")
  const [userProfile, setUserProfile] = useState<string>("")
  const {loginUserId, loginUserEmail, setLoginUserIcon} =  useAuthContext()
  const router = useRouter()

  useEffect(()=> {
    setName(myInf.name)
    setUserIcon(myInf.userIcon)
    if(myInf.userProfile) {
      setUserProfile(myInf.userProfile)
    }
  },[])


  const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const editRes = await fetch(`/api/mypage/updateUserProfile/${myInf.id}`, {
        method: "PUT",
        headers: {
          "Accept": "application/json",
          "Content-type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({
          name: name,
          userIcon: userIcon,
          userProfile: userProfile,
          email: loginUserEmail,
        })
      })
      const editData = await editRes.json()
      alert(editData.message)

      //apiで再発行したトークンをlocalStrageに保存
      if(editData.newToken) {
        localStorage.setItem("token", editData.newToken)
      }

      //ヘッダーのアイコン画像にも反映
      setLoginUserIcon(userIcon)

      router.push(`/readmypage/${loginUserId}`)

    }catch(error) {
      console.error(error)
      alert("プロファイルの更新が失敗しました。")
    }
  }

  if (loginUserEmail !== myInf.email) return <h1>編集権限がありません</h1>

  return (
    <div className="profileContainer">
      <div className="profileContent">
        <h2>プロフィール編集</h2>
        <div className="profileFormItem">
          <form onSubmit={handleSubmit}>
            <div>
              <TextField
                label="名前"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="name"
                id="createTitle"
                required
                fullWidth
                margin="normal"
              />
            </div>
            <div>
              <TextField
                label="自己紹介"
                value={userProfile}
                onChange={(e) => setUserProfile(e.target.value)}
                type="text"
                name="userProfile"
                id="createTitle"
                required
                fullWidth
                margin="normal"
              />
            </div>

            <p className="iconP">アイコン</p>
            <div className="selectIcon">
              {userIconPath.map((icon, index) => (
                <label key={index} style={{ marginRight: "10px", cursor: "pointer" }}>
                  <input
                    type="radio"
                    name="userIcon"
                    value={icon}
                    style={{
                      display: "none",
                    }}
                    onClick = {()=> {setUserIcon(icon)}}

                  />
                  <Image
                    alt="アイコン画像"
                    src={icon}
                    width={130}
                    height={130}
                    style={{
                      borderRadius: "50%",
                      boxSizing: "content-box",
                      opacity: userIcon === icon ? 1 : 0.6,
                      border: userIcon === icon ? "5px solid #f06543" : "none",
                    }}
                  />
                </label>
              ))
              }
            </div>

            <div style={{display:"flex", justifyContent:"center"}}>
              <Button type="submit" variant="contained" color="primary"
                sx={{
                  borderRadius: "30px", padding: "10px 24px", marginTop: "50px",
                  backgroundColor: "#66c7d9", '&:hover': { backgroundColor: "#5ab6c7" }
                }}>
                ✨ 更新する
              </Button>
                </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditMyPage
