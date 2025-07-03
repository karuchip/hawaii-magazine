"use client"

import { useAuthContext } from "@/context/AuthContext"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { useEffect } from "react"
import Link from "next/link"
import {logout} from "@/utils/logout"
import BottomMenu from "@/app/components/bottomMenu"

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

  const {loginUserName, loginUserId, loginUserEmail, setLoginUserId, setLoginUserName, setLoginUserEmail, loginUserIcon, setLoginUserIcon} = useAuthContext()
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
            email: data.email,
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
        method: "DELETE",
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

       logout(router, setLoginUserId, setLoginUserName, setLoginUserEmail, setLoginUserIcon)

    } catch(error) {
      console.error(error)
    }
  }

  if(userInf && userInf.email === loginUserEmail) {

    return (
      <>
        {/* bottomメニュー */}
        {loginUserId && loginUserIcon && (
          <div className="bottomMenuContainer">
            <BottomMenu loginUserId={loginUserId}/>
          </div>
        )}

        {/* 設定本文 */}
        <div className="settingContainer">
          <div className="settingContent">
            <div className="settingTitle">
              <h2>設定</h2>
              <p>{loginUserName} さん</p>
            </div>

            <div className="horizontalLineLight"><span></span></div>

            {/* プロフィール変更 */}
            <div className="settingItems changeProfileLink">
              <h3>プロフィールを変更する</h3>
              <div className="settingButton">
                <Link href={`/editmypage/${loginUserId}`}>プロフィール編集画面へ移動する</Link>
              </div>
            </div>

            <div className="horizontalLineLight"><span></span></div>


            {/* メールアドレス変更 */}
            <div className="settingItems changeEmail">
              <h3>メールアドレスを変更する</h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  className="userFormInput"
                  {...register("email", {
                    required: "メールアドレスは必須です",
                    maxLength: {
                      value: 255,
                      message: "メールアドレスは72文字以内で入力してください",
                    },
                  })}
                  onChange= {(e)=>setEmailCount(e.target.value.length)}
                />
                {errors.email && <p className="inputErrorMsg">{errors.email.message}</p>}
                <div className="dataCount"
                  style ={{
                    color: emailCount>255 ? "red" : "#000"
                  }}
                >
                  <p>{emailCount}/255</p>
                </div>
                <div className="settingButton">
                  <button>メールアドレスを変更する</button>
                </div>
              </form>
            </div>

            <div className="horizontalLineLight"><span></span></div>


            {/* 退会手続き */}
            <div className="settingItems  leave">
              <h3>退会する</h3>
              <p>下記のボタンをクリックすると退会処理が行われます。<br/>投稿、アカウント情報を含めた全ての情報が削除され、本アカウントには今後一切アクセスできなくなります。</p>
              <div className="settingButton">
                <button onClick={handleDeleteAccount}>アカウントを削除して退会する</button>
              </div>
            </div>

            <div className="horizontalLineLight"><span></span></div>

            <div className="back settingBack">
              <Link href="/">戻る</Link>
            </div>
          </div>
        </div>
      </>
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
