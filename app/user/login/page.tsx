"use client"
import { useRouter } from "next/navigation"
import { useAuthContext } from "@/context/AuthContext"
import {Card, TextField, Button} from "@mui/material"
import {useForm} from "react-hook-form"
import Link from "next/link"
import { useState } from "react"
import Loading from "@/app/components/common/loading"

type FormInput = {
  email: string
  password: string
}

const Login = () => {

  const router = useRouter()
  const {loginUserId, setLoginUserId, setLoginUserName, setLoginUserEmail, setLoginUserIcon, setIsLoggedIn} = useAuthContext()
  const {register, handleSubmit, formState:{errors, isValid}} = useForm<FormInput>({
    mode: "onChange"
  })
  const [loading, setLoading] = useState(false)

  const onSubmit = async(data: FormInput) => {

    const body = {
      email: data.email,
      password: data.password
    }

    try{
      setLoading(true)
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

      alert(jsonData.message)

      if(!jsonData.payload) {
        alert("ログイン情報の取得に失敗しました")
        setLoading(false)
        return
      }
      setLoginUserId(jsonData.payload.id)
      setLoginUserName(jsonData.payload.name)
      setLoginUserEmail(jsonData.payload.email)
      setLoginUserIcon(jsonData.payload.userIcon)
      setIsLoggedIn(true)

      setLoading(false)
      router.replace(`/readmypage/${jsonData.payload.id}`)

    }catch(error){
      setLoading(false)
      alert("ログイン失敗")
      console.error(error)
    }
  }

  if(loading) {
    return <Loading/>
  }
  return(
    <div className="authContainer">
      <Card variant="outlined" className="authContent">
        <h2>ログイン</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="userFormItem">
            <TextField
              label="メールアドレス"
              variant="standard"
              id="standard-basic"
              className="userFormInput"
              {...register("email", {
                required: "必須項目です",
                maxLength: {
                  value: 255,
                  message: "255文字以内で入力してください"
                },
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </div>
          <div className="userFormItem">
            <TextField
              label="パスワード"
              type="password"
              variant="standard"
              className="userFormInput"
              {...register("password", {
                required: "必須項目です",
                maxLength: {
                  value: 100,
                  message: "100文字以内で入力してください"
                },
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          </div>
          <div className="userAuthBtn">
            <Button type="submit" variant="contained" disabled={!isValid}>
              ログイン
            </Button>
          </div>
        </form>
        <div className="userAuthLink">
          <Link href={'/user/register'}>
            ユーザー登録がお済みでない方はこちら
          </Link>
        </div>
      </Card>
    </div>
  )
}

export default Login
