"use client"
import { useAuthContext } from "@/context/AuthContext"
import { useState, useEffect } from "react"
import { useRouter }from "next/navigation"
import { useForm} from "react-hook-form"
import IconInput from "@/app/components/iconInput"
import Loading from "@/app/components/loading"


type myInfProps = {
  id: string
  name: string
  email: string
  userIcon: string
  userProfile?: string
}

type Props = {
  myInf: myInfProps | null
}


type FormInputs = {
  name: string
  userProfile: string
  userIcon: string
}

const EditMyPage: React.FC<Props> = ({myInf}:Props) => {


  const router = useRouter()
  const {register, handleSubmit, reset, formState:{errors}} = useForm<FormInputs>()
  const {loginUserId, loginUserEmail, loginUserIcon, setLoginUserIcon,setLoginUserName} =  useAuthContext()
  const [nameCount, setNameCount] = useState(0)
  const [profileCount, setProfileCount] = useState(0)
  const [icon, setIcon] = useState(loginUserIcon)
  const [loading, setLoading] = useState(false)

  // myInfを初期値として設定
  useEffect(() => {
    reset({
      name: myInf?.name,
      userProfile: myInf?.userProfile || "",
    })
    if (myInf?.name) {
      setNameCount(myInf?.name.length)
    }
    if (myInf?.userProfile) {
      setProfileCount(myInf.userProfile.length)
    }

  }, [myInf])


  const onSubmit = async(data: FormInputs) => {
    setLoading(true)
    try {
      const editRes = await fetch(`/api/mypage/updateUserProfile/${myInf?.id}`, {
        method: "PUT",
        headers: {
          "Accept": "application/json",
          "Content-type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({
          ...data,
          userIcon: icon,
          email: loginUserEmail,
        })
      })
      const result = await editRes.json()
      const updateUser = await result.updateUser
      alert(result.message)

      //apiで再発行したトークンをlocalStrageに保存
      if(result.newToken) {
        localStorage.setItem("token", result.newToken)
      }

      //useAuthContextにも反映
      setLoginUserIcon(updateUser.userIcon)
      setLoginUserName(updateUser.name)

      setLoading(false)
      router.push(`/readmypage/${loginUserId}`)

    }catch(error) {
      console.error(error)
      alert("プロファイルの更新が失敗しました。")
    }
  }

  if (loading) return <Loading/>
  if (loginUserEmail !== myInf?.email) return <h1>編集権限がありません</h1>

  return (
    <div className="profileEditContainer">
      <div className="profileEditContent">
        <h2>プロフィール編集</h2>
        <div className="horizontalLineLight"><span></span></div>

        <div className="profileFormItem">
          <form onSubmit={handleSubmit(onSubmit)}>

            <p className="profileDataLabel">アイコン</p>
            <IconInput icon={icon} setIcon={setIcon} />

            <label>
              <p className="profileDataLabel">ニックネーム</p>
              <input
                type="text"
                {...register("name", {
                  required:"入力必須項目です",
                  maxLength: {
                    value: 50,
                    message: "50文字以内で入力してください"
                  },
                  onChange:(e)=>{setNameCount(e.target.value.length)}
                })}
                placeholder="ニックネームを入力してください"
              />
              {errors.name &&
                <p className="inputErrorMsg">{errors.name.message}</p>
              }
              <div className="dataCount">
                <p
                  style={{
                  color: nameCount > 50 ? "#FF0000" : "#A1A1A1"
                }}
                >
                  {nameCount}/50
                </p>
              </div>
            </label>

            <label>
              <p className="profileDataLabel">自己紹介</p>
              <textarea
                {...register("userProfile", {
                  required: "入力必須項目です" ,
                  maxLength: {
                    value: 300,
                    message: "300文字以内で入力してください"
                  },
                  onChange: (e)=>{setProfileCount(e.target.value.length)}
                })}
                placeholder="自己紹介を入力してください"
              />
              {errors.userProfile &&
                <p className="inputErrorMsg">{errors.userProfile.message}</p>
              }

              <div className="dataCount">
                <p
                style={{
                  color: profileCount > 300 ? "#FF0000" : "#A1A1A1"
                }}
                >
                  {profileCount}/300
                </p>
              </div>
            </label>

            <div className="profileEditBtn">
              <button type="submit">
                ✨ 更新する
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditMyPage
