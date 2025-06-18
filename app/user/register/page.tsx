"use client"
import {useForm} from "react-hook-form"
import {Card, TextField, Button} from "@mui/material"
import {useRouter} from "next/navigation"
import { useAuthContext } from "@/context/AuthContext"
import { useState } from "react"
import Link from "next/link"


type FormInput = {
  name: string;
  email: string;
  password: string;
}



const Register = () => {
  const {setLoginUserId, setLoginUserName, setLoginUserEmail, setLoginUserIcon} = useAuthContext()
  const router = useRouter()
  const {register, handleSubmit, formState:{errors, isValid}} = useForm<FormInput>({
    mode: "onChange"
  })
  const [nameCount, setNameCount] = useState(0)
  const [emailCount, setEmailCount] = useState(0)
  const [passwordCount, setPasswordCount] = useState(0)

  function getRandomInt(max:number) {
    return Math.floor(Math.random()*max) + 1
  }

  const onSubmit = async(data: FormInput) => {
    const iconNum = getRandomInt(6)
    const randomIconPath = `/images/profile${iconNum}.JPG`

    const body = {
      name: data.name,
      email: data.email,
      userIcon: randomIconPath,
      password: data.password
    }

    try {

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
          body: JSON.stringify({email: data.email, password: data.email}),
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

        <form onSubmit={handleSubmit(onSubmit)}>

            <div className="userFormItem">
              <TextField
                label="ニックネーム"
                variant="standard"
                className="userFormInput"
                {...register("name", {
                  required: "必須項目です",
                  maxLength: {
                    value: 50,
                    message: "50文字以内で設定してください"
                  },
                  onChange: (e) => {
                    setNameCount(e.target.value.length)
                  }
                })}
                error={!!errors.name}
                helperText={errors.name?.message && (
                  <span style={{ marginTop: "50px", display: "block"}}>
                    {errors.name.message}
                  </span>
                )}
              />
              <p>{nameCount}/50</p>
            </div>

            <div className="userFormItem">
              <TextField
                label="メールアドレス"
                variant="standard"
                className="userFormInput"
                {...register("email", {
                  required: "必須項目です",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "正しい形式で入力してください"
                  },
                  maxLength: {
                    value: 255,
                    message: "255文字以内で設定してください"
                  },
                  onChange:(e)=> {
                    setEmailCount(e.target.value.length)
                  }
                })}
                error={!!errors.email}
                helperText={
                  errors.email?.message && (
                    <span style={{ marginTop: "50px", display: "block"}}>
                      {errors.email.message}
                    </span>
                  )
                }
              />
              <p>{emailCount}/255</p>
            </div>

            <div className="userFormItem">
              <TextField
                label="パスワード"
                type="password"
                variant="standard"
                className="userFormInput"
                {...register("password", {
                  required: "必須項目です",
                  minLength: {
                    value: 8,
                    message: "8文字以上で設定してください"
                  },
                  maxLength: {
                    value: 100,
                    message: "100文字以内で設定してください"
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9]+$/,
                    message: "半角英数字のみ使用できます"
                  },
                  onChange: (e) => {
                    setPasswordCount(e.target.value.length)
                  }
                })}
                error={!!errors.password}
                helperText={
                  errors.password?.message && (
                    <span style={{ marginTop: "50px", display: "block"}}>
                      {errors.password.message}
                    </span>
                  )
                }
              />
              <p>{passwordCount}/100</p>
            </div>

          <div className="userAuthBtn">
            <Button type="submit" variant="contained" disabled={!isValid}>
              登録
            </Button>
          </div>
        </form>
        <div className="userAuthLink">
          <Link href={'/user/login'}>
            ユーザー登録済みの方はこちら
          </Link>
        </div>
      </Card>
    </div>
  )
}

export default Register
