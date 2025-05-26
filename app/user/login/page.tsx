"use client"
import {useState} from "react"
import { useRouter } from "next/navigation"
import { useAuthContext } from "@/app/AuthContext"
import {Card, TextField, Button} from "@mui/material"

type SendBodyType = {
  email: string,
  password: string
}

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()
  const {setLoginUserId, setLoginUserName, setLoginUserEmail, setLoginUserIcon} = useAuthContext()

  const handleSubmit = async(e:React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    const body:SendBodyType = {
      email: email,
      password: password
    }

    try{
      const response = await fetch('/api/user/login', {
        method:"POST",
        headers:{
          "Accept": "application/JSON",
          "Content-Type": "application/JSON"
        },
        body:JSON.stringify(body),
      })

      const jsonData = await response.json()
      localStorage.setItem("token", jsonData.token)

      setLoginUserId(jsonData.payload.id)
      setLoginUserName(jsonData.payload.name)
      setLoginUserEmail(jsonData.payload.email)
      setLoginUserIcon(jsonData.payload.userIcon)
      alert(jsonData.message)
      router.replace("/")

    }catch(error){
      alert("ログイン失敗")
      console.error(error)
    }
  }

  return(
    <div className="authContainer">
      <Card variant="outlined" className="authContent">
        <h2>ログイン</h2>
        <form onSubmit={handleSubmit}>
          <div className="userFormItem">

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
            <Button type="submit" variant="contained">ログイン</Button>
          </div>
        </form>
      </Card>
    </div>
  )
}

export default Login
