"use client"
import {useForm} from "react-hook-form"
import {Card, TextField, Button} from "@mui/material"
import {useRouter} from "next/navigation"
import { useAuthContext } from "@/context/AuthContext"
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
                required: "ニックネームは必須です",
                maxLength: {
                  value: 50,
                  message: "ニックネームは50文字以内で設定してください"
                }
              })}
              error={!!errors.name}
              helperText={errors.name?.message}
              sx={{mb:"30px"}}
            />
            <TextField
              label="メールアドレス"
              variant="standard"
              className="userFormInput"
              {...register("email", {
                required: "メールアドレスは必須です",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "正しい形式で入力してください"
                },
                maxLength: {
                  value: 255,
                  message: "メールアドレスは255文字以内で設定してください"
                }
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
              sx={{mb:"30px"}}
            />
            <TextField
              label="パスワード"
              type="password"
              variant="standard"
              className="userFormInput"
              {...register("password", {
                required: "パスワードは必須です",
                minLength: {
                  value: 8,
                  message: "パスワードは8文字以上で設定してください"
                },
                maxLength: {
                  value: 100,
                  message: "パスワードは100文字以内で設定してください"
                },
                pattern: {
                  value: /^[a-zA-Z0-9]+$/,
                  message: "半角英数字のみ使用できます"
                }
              })}
              error={!!errors.password}
              helperText={errors.password?.message}

              sx={{mb:"30px"}}
            />
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
