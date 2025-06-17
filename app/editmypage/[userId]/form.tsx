"use client"
import { useAuthContext } from "@/context/AuthContext"
import { useState, useEffect } from "react"
import { useRouter }from "next/navigation"
import { useForm} from "react-hook-form"
import Image from "next/image"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useMediaQuery } from "@mui/material"


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

  //アイコン画像のパス名
  const userIconPath = [
    "/images/profile1.JPG",
    "/images/profile2.JPG",
    "/images/profile3.JPG",
    "/images/profile4.JPG",
    "/images/profile5.JPG",
    "/images/profile6.JPG",
  ]

  const {loginUserId, loginUserEmail, setLoginUserIcon} =  useAuthContext()
  const isMobile = useMediaQuery('(max-width:640px')
  const router = useRouter()
  const {register, watch, setValue, handleSubmit, reset, formState:{errors}} = useForm<FormInputs>({
    defaultValues: {
      userIcon: userIconPath[0],
    }
  })
  const watchUserIcon = watch("userIcon")
  const currentIndex = userIconPath.indexOf(watchUserIcon)
  const [nameCount, setNameCount] = useState(0)
  const [profileCount, setProfileCount] = useState(0)

  useEffect(() => {
    reset({
      name: myInf?.name,
      userProfile: myInf?.userProfile || "",
      userIcon: myInf?.userIcon
    })
    if (myInf?.name) {
      setNameCount(myInf?.name.length)
    }
    if (myInf?.userProfile) {
      setProfileCount(myInf.userProfile.length)
    }

  }, [myInf])

  //アイコンスライド
  const handleClick = (direction: "back" | "forward") => {
    let nextIndex = direction === "back"
      ? (currentIndex - 1 + userIconPath.length) % userIconPath.length
      : (currentIndex + 1) % userIconPath.length

    const nextIcon = userIconPath[nextIndex]
    setValue("userIcon", nextIcon)
  }
  //アイコン前後の画像
  const leftIndex = (currentIndex - 1 + userIconPath.length) % userIconPath.length
  const rightIndex = (currentIndex + 1) % userIconPath.length


  const onSubmit = async(data: FormInputs) => {
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

      //ヘッダーのアイコン画像にも反映
      setLoginUserIcon(updateUser.userIcon)
      router.push(`/readmypage/${loginUserId}`)

    }catch(error) {
      console.error(error)
      alert("プロファイルの更新が失敗しました。")
    }
  }

  if (loginUserEmail !== myInf?.email) return <h1>編集権限がありません</h1>

  return (
    <div className="profileEditContainer">
      <div className="profileEditContent">
        <h2>プロフィール編集</h2>
        <div className="horizontalLineLight"><span></span></div>

        <div className="profileFormItem">
          <form onSubmit={handleSubmit(onSubmit)}>

            <p className="profileDataLabel"># アイコンを選択</p>
            <div className="selectIcon">
              <div><ArrowBackIosIcon onClick={() => handleClick("back")}/></div>
              {userIconPath.map((icon, index) => (
                <label key={index} style={{display:currentIndex === index ? "block" : "none"}}>
                  <input
                    type="radio"
                    value={icon}
                    {...register("userIcon")}
                    style={{
                      display: "none",
                    }}
                    onClick={() => handleClick("back")}
                    />

                  {!isMobile &&
                    <Image
                      alt="前の画像"
                      src={userIconPath[leftIndex]}
                      width={130}
                      height={130}
                      style={{
                        opacity: 0.3,
                        borderRadius: "50%",
                        boxSizing: "content-box",
                        transition: "all 0.3s",
                      }}
                    />
                  }

                  <Image
                    alt="アイコン画像"
                    src={icon}
                    width={180}
                    height={180}
                    style={{
                      borderRadius: "50%",
                      boxSizing: "content-box",
                      transition: "all 0.3s",
                      margin: "0 10px",
                    }}
                  />
                  {!isMobile &&
                    <Image
                      alt="アイコン画像"
                      src={userIconPath[rightIndex]}
                      width={130}
                      height={130}
                      style={{
                        opacity: 0.3,
                        borderRadius: "50%",
                        boxSizing: "content-box",
                        transition: "all 0.3s"
                      }}
                      onClick={() => handleClick("forward")}
                    />
                  }
                </label>
              ))}
              <div><ArrowForwardIosIcon onClick={() => handleClick("forward")}/></div>
            </div>

            <label>
              <p className="profileDataLabel"># ニックネーム</p>
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
              <div className="profileDataCount">
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
              <p className="profileDataLabel"># 自己紹介</p>
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

              <div className="profileDataCount">
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
