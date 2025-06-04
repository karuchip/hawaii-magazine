"use client"
import { useAuthContext } from "@/context/AuthContext"
import { useState, useEffect } from "react"
import { TextField, Button } from "@mui/material"
import {useRouter}from "next/navigation"
import Image from "next/image"


const EditMyPage = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [userIcon, setUserIcon] = useState("")
  const [userProfile, setUserProfile] = useState("")
  const {loginUserId, loginUserEmail, setLoginUserIcon} =  useAuthContext()
  const router = useRouter()
  //プロフィール情報の読み込みが完了してから画面表示
  const [loaded, setLoaded] = useState(false)

  //アイコン画像のパス名
  const userIconPath = [
    "/images/profile1.JPG",
    "/images/profile2.JPG",
    "/images/profile3.JPG",
    "/images/profile4.JPG",
    "/images/profile5.JPG",
    "/images/profile6.JPG",
  ]

  useEffect(()=> {
    const readProfile = async() => {
      try {
        const readRes = await fetch(`/api/mypage/readProfile/${loginUserId}`)
        const readData = await readRes.json()
        const myInf = readData.myInf

        setName(myInf.name)
        setEmail(myInf.email)
        setUserIcon(myInf.userIcon)

        if(myInf.userProfile) {
          setUserProfile(myInf.userProfile)
        }

        setLoaded(true)
      }catch(error) {
        console.error(error)
      }
    }
    readProfile()
  }, [])

  const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const editRes = await fetch(`/api/mypage/updateUserProfile/${loginUserId}`, {
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

      //ヘッダーのアイコン画像にも反映
      setLoginUserIcon(userIcon)

      //apiで再発行したトークンをlocalStrageに保存
      if(editData.newToken) {
        localStorage.setItem("token", editData.newToken)
      }

      router.push(`/mypage/readmypage/${loginUserId}`)

    }catch(error) {
      console.error(error)
      alert("プロファイルの更新が失敗しました。")
    }
  }

  if(loaded) {
    if(loginUserEmail === email) {
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
    }else{
      return(
        <>
          <h1>編集権限がありません</h1>
        </>
      )
    }
  }else{
    return <p>Lading...</p>
  }
}

export default EditMyPage
