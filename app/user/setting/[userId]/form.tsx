"use client"

import { useAuthContext } from "@/context/AuthContext"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { useEffect } from "react"

type Props = {
  userInf: {
    id: string,
    name: string,
    email: string,
  }
}

type FormInput = {
  email: string
}

const Form = ({userInf}:Props) => {

  const {loginUserName, loginUserId, loginUserEmail, setLoginUserEmail} = useAuthContext()
  const router = useRouter()
  const {register, handleSubmit, setValue, formState:{errors}} = useForm<FormInput>({})
  const [emailCount, setEmailCount] = useState(0)

  useEffect(() => {
    if (userInf) {
      setValue("email", userInf.email)
      setEmailCount(userInf.email.length)
    }
  }, [userInf, setValue])

  // メールアドレス変更処理
  const onSubmit = async (data:FormInput) => {
    try {

      const emailChangeRes = await fetch(`/api/user/userInf/${loginUserId}`, {
        method: "PUT",
          headers: {
            "Accept": "application/json",
            "Content-type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
          },
          body: JSON.stringify({
            email: loginUserEmail,
            loginUserId: loginUserId,
          })
        })
      const emailChangeData = await emailChangeRes.json()
      setLoginUserEmail(emailChangeData)

      //apiで再発行したトークンをlocalStrageに保存
      if(emailChangeData.newToken) {
        localStorage.setItem("token", emailChangeData.newToken)
      }

      alert(emailChangeData.message)
      router.push("/")
    }catch (error) {
      console.error(error)
    }
  }

  // 退会処理
  const handleDeleteAccount = async() => {
    try {
      const deleteAccountRes = await fetch(`/api/user/deleteAccount/${loginUserId}`, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({
          email: loginUserEmail,
        })
      })

      const deleteAccountData = await deleteAccountRes.json()
      alert(deleteAccountData.message)
      router.push("/")

    } catch(error) {
      console.error(error)
    }
  }

  if(userInf && userInf.email === loginUserEmail) {

    return (
      <div className="settingContainer">
        <div className="settingContent">
          <div style={{marginTop:"150px",}}>
            <h2>設定</h2>
            <p>{loginUserName} さん</p>
          </div>
          <div>
            <h3>メールアドレスの変更</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="userFormInput"
                {...register("email", {
                  required: "メールアドレスは必須です",
                  maxLength: {
                    value: 255,
                    message: "メールアドレスは255文字以内で入力してください"
                  },
                })}
                onChange= {(e)=>setEmailCount(e.target.value.length)}
              />
              {errors.email && <p className="inputErrorMsg">{errors.email.message}</p>}
              <p>{emailCount}/255</p>
              <button>メールアドレスを変更する</button>
            </form>
          </div>
          <div>
            <h3>本サービスから退会する</h3>
            <p>投稿、アカウント情報を含めた全ての情報が削除され、本アカウントには今後一切アクセスできなくなります。</p>
            <button onClick={handleDeleteAccount}>本アカウントを削除し、サービスから退会する</button>
          </div>
        </div>
      </div>
    )

  } else {
    return(
      <>
        <p>編集権限がありません</p>
      </>
    )
  }
}


export default Form
