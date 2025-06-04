"use client"
import { useRouter } from "next/navigation"
import { useAuthContext } from "@/context/AuthContext"
import {Card, TextField, Button} from "@mui/material"
import {useForm} from "react-hook-form"

type FormInput = {
  email: string
  password: string
}

const Login = () => {

  const router = useRouter()
  const {setLoginUserId, setLoginUserName, setLoginUserEmail, setLoginUserIcon} = useAuthContext()
  const {register, handleSubmit, formState:{errors, isValid}} = useForm<FormInput>({
    mode: "onChange"
  })

  const onSubmit = async(data: FormInput) => {

    const body = {
      email: data.email,
      password: data.password
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="userFormItem">

            <TextField
              label="メールアドレス"
              variant="standard"
              id="standard-basic"
              className="userFormInput"
              {...register("email", {
                required: "メールアドレスは必須です",
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
              sx={{mb:"30px"}}
            />
          </div>
          <div className="userFormItem">
            <TextField
              label="パスワード"
              variant="standard"
              className="userFormInput"
              {...register("password", {required: "パスワードは必須です"})}
              error={!!errors.password}
              helperText={errors.password?.message}
              sx={{mb:"30px"}}
            />
          </div>
          <div className="userAuthBtn">
            <Button type="submit" variant="contained" disabled={!isValid}>
              ログイン
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
}

export default Login
