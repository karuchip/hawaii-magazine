"use client"
import {useState} from "react"
import {Card, TextField, Button} from "@mui/material"
import {useRouter} from "next/navigation"
import { useAuthContext } from "@/app/AuthContext"


type SendBodyType = {
  name: string,
  email: string,
  userIcon: string,
  password: string
}

const Register = () => {
  const {setLoginUserId, setLoginUserName, setLoginUserEmail, setLoginUserIcon} = useAuthContext()
  const router = useRouter()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function getRandomInt(max:number) {
    return Math.floor(Math.random()*max) + 1
  }

  const handleSubmit = async(e:React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()



    const iconNum = getRandomInt(6)
    const randomIconPath = `/images/profile${iconNum}.JPG`

    try {
      const body: SendBodyType ={
        name: name,
        email: email,
        userIcon: randomIconPath,
        password: password
      }

      const registerRes = await fetch('/api/user/register', {
        method: "POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      })

      if (registerRes.ok) {
        const loginRes = await fetch('/api/user/login', {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({email, password}),
        })

        if(loginRes.ok) {
          const jsonData = await loginRes.json()
          localStorage.setItem("token", jsonData.token)

          setLoginUserId(jsonData.payload.id)
          setLoginUserName(jsonData.payload.name)
          setLoginUserEmail(jsonData.payload.email)
          setLoginUserIcon(jsonData.payload.userIcon)

          alert("ユーザー登録が完了し、自動ログインしました。")
          router.push("/")
        } else {
          console.error("自動ログインに失敗しました")
        }
      }
    }catch(err){
      alert("ユーザー登録失敗")
    }
  }

  return(
    <div className="authContainer">
      <Card variant="outlined" className="authContent">
        <h2>ユーザー登録</h2>

        <form onSubmit={handleSubmit}>
          <div className="userFormItem">
            {/* <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" name="email" placeholder="email"/> */}

            <TextField
              type="text"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              name="name"
              id="standard-basic"
              label="ニックネーム"
              variant="standard"
              className="userFormInput"
            />
            <TextField
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              name="email"
              id="standard-basic"
              label="メールアドレス"
              variant="standard"
              className="userFormInput"
            />
          </div>
          <div className="userFormItem">
            <TextField
              type="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              name="password"
              id="standard-basic"
              label="パスワード"
              variant="standard"
              className="userFormInput"
            />
          </div>
          <div className="userAuthBtn">
            <Button type="submit" variant="contained">登録</Button>
          </div>

        </form>
      </Card>
    </div>
  )
}

export default Register
