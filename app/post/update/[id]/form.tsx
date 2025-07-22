"use client"

import Link from "next/link"
import {useState, useEffect} from "react"
import {useRouter}from "next/navigation"
import { useAuthContext } from "@/context/AuthContext"
import PlaceAutocomplete from "../../../components/map/placeAutocomplete"
import { Button} from "@mui/material"
import { categoryList, Category } from "@/app/components/post/categoryButton"
import PostSectionEditor from "@/app/components/post/postSectionEditor"
import { usePostContext } from "@/context/PostContext"
import { AllItemTypes } from "@/utils/types/post"
import {useForm} from "react-hook-form"

type Section = {
  image: string | null;
  description: string;
}

type Props = {
  singleItem: AllItemTypes
}

type FormValues = {
  category: string;
  title: string;
  location: string;
}

const UpdateItem = ({singleItem} : Props) => {

  //useState
  const [sections, setSections] = useState<Section[]>([{image:null, description: ''}])
  const [googlePlace, setGooglePlace] = useState("")
  const [lat, setLat] = useState<number | null>(null)
  const [lng, setLng] = useState<number | null>(null)

  //context
  const router = useRouter()
  const {loginUserId} = useAuthContext()
  const {postData, setPostData, resetPostData} = usePostContext()

  //文字数カウント
  const [titleCount, setTitleCount] = useState(0)
  const [locationCount, setLocationCount] = useState(0)

  //rfh
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    reset,
    formState: {errors},
  } = useForm<FormValues>({})


  // 画面が開いた時にsingleItemのデータを分割してセーブ
  useEffect(() => {

    const getSectionData = (itemType: AllItemTypes | any) => {
      if (!itemType) return

      // sectionsのセット
      const imageDescriptions = [];
      for (let i=1; i<=5; i++) {
        const image = itemType[`image${i}` as keyof AllItemTypes] as string | null;
        const rawDescription = itemType[`description${i}` as keyof AllItemTypes] as string;
        const description = rawDescription ?? ""
        if(image || description) {
          imageDescriptions.push({image, description})
        }
      }
      if (imageDescriptions.length === 0) {
        imageDescriptions.push({ image: null, description: "" });
      }
      setSections(imageDescriptions)

      //そのほかのセット
      if (itemType) {
        reset({
          title: itemType.title || "",
          category: itemType.category || "",
          location: itemType.location || ""
        })

        setGooglePlace(itemType.googlePlace || "")
        setLat(itemType.lat)
        setLng(itemType.lon)
      }
    }

    const fromPreview = sessionStorage.getItem("fromPreview")

    //画面開いた時はDBからデータを取得
    if (fromPreview !== "true") {
      getSectionData(singleItem)
    //previewから遷移した場合のみ、contextからデータを取得
    }else {
      getSectionData(postData)
    }

    sessionStorage.removeItem("fromPreview")

  }, [singleItem, postData])


  //場所autocomplete機能
  const handleSelectPlace = (lat: number, lng: number, name:string) => {
    setLat(isNaN(lat) ? null : lat)
    setLng(isNaN(lng) ? null : lng)
    setGooglePlace(name)
  }

  // プレビューボタン押下時
  const onSubmit = (data:FormValues) => {

    if(sections[0].image === null){
      alert("セクション1の画像は入力必須項目です")
      return;
    }
    if(sections[0].description === "" || null){
      alert("セクション1の記事説明は入力必須項目です")
      return;
    }

    setPostData({
      title: data.title,
      image1: sections[0]?.image ?? null,
      image2: sections[1]?.image ?? null,
      image3: sections[2]?.image ?? null,
      image4: sections[3]?.image ?? null,
      image5: sections[4]?.image ?? null,
      description1: sections[0]?.description ?? "",
      description2: sections[1]?.description ?? "",
      description3: sections[2]?.description ?? "",
      description4: sections[3]?.description ?? "",
      description5: sections[4]?.description ?? "",
      category: data.category,
      location: data.location,
      googlePlace,
      lat,
      lon:lng,
    })

    router.push(`/post/updatePreview/${singleItem.id}`)
  }

  useEffect(()=> {
    register("category", {required: "カテゴリを選択してください"})
  },[register])


  if (String(loginUserId) === String(singleItem.authorId)) {
    return(
      <>
          {/* タイトル部分 */}
      <div className="createContainer">
        <div className="createTitle">
          <h1>記事を編集する</h1>
        </div>
        <div className="horizontalLineLight create"><span></span></div>

        <div className="createContent">

          {/* 入力部分 */}
          <div className="createForm">

            {/* カテゴリー入力 */}
            <div>
              <p className="postElement"># カテゴリー選択</p>
              {categoryList.slice(1).map((cat:Category) => (
                <Button
                  key={cat.value}
                  variant={getValues("category") === cat.value ? "contained" : "outlined"}
                  onClick={() => setValue("category", cat.value, {shouldValidate: true})}
                  sx={{
                    backgroundColor: getValues("category") === cat.value ? cat.color : "transparent",
                    color: getValues("category") === cat.value ? "white" : "black",
                    borderRadius: "20px",
                    textTransform: "none",
                    margin: "4px"
                  }}
                >
                  {cat.label}
                </Button>
              ))}
              {errors.category && <p className="inputErrorMsg">カテゴリを選択してください</p>}
            </div>

            {/* タイトル入力 */}
            <div className="title">
              <p className="postElement"># タイトル</p>

              <textarea
                placeholder="| ここにタイトルを入力してください"
                {...register("title", {
                  required: "タイトルは必須です",
                  maxLength: {
                    value: 40,
                    message: "タイトルは40文字以内で入力してください"
                  },
                  onChange: (e)=>{setTitleCount(e.target.value.length)}
                })}
              />
              {errors.title && <p className="inputErrorMsg">{errors.title.message}</p>}

              <div className="dataCount">
                <p
                style={{
                  color: titleCount > 40 ? "#FF0000" : "#A1A1A1"
                }}
                >
                  {titleCount}/40
                </p>
              </div>
            </div>

            {/* 記事セクション作成 */}
            <div className="section">
              <p className="postElement"># 記事内容</p>
              <PostSectionEditor sections={sections} setSections={setSections}/>
            </div>

            {/* Location */}
            <div>
              <div className="locationContent">
                <p className="postElement"># 場所</p>
                <input
                  placeholder="| ここに場所名を入力してください"
                  {...register("location", {
                    required: "場所は必須です",
                    maxLength: {
                      value: 100,
                      message: "場所は100文字以内で入力してください"
                    },
                    onChange: (e)=>{setLocationCount(e.target.value.length)}
                  })}
                  style={{fontSize: "16px"}}
                />
                {errors.location && <p className="inputErrorMsg">{errors.location.message}</p>}

                <div className="dataCount">
                  <p
                  style={{
                    color: locationCount > 100 ? "#FF0000" : "#A1A1A1"
                  }}
                  >
                    {locationCount}/100
                  </p>
                </div>
              </div>

              <details open  className="addGoogleMap">
                <summary>
                  記事に地図を追加する
                </summary>
                <PlaceAutocomplete onSelectPlace={handleSelectPlace} defaultPlace={singleItem.googlePlace || null} />
              </details>
            </div>
          </div>
        </div>

        <div className="horizontalLineLight create"><span></span></div>

        {/* 送信ボタン */}
        <div>
          <div className="toPreviewBtn">
            <button type="button" onClick={handleSubmit(onSubmit)}>プレビューを確認する</button>
          </div>
        </div>
      </div>
    </>
    )
  }else {
    return (
      <>
        <h1>編集権限がありません</h1>
        <Link href="/user/login">ログインする</Link>
        <Link href="/user/register">新規登録する</Link>
      </>
    )
  }
}

export default UpdateItem
