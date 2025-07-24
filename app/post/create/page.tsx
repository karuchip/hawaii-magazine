"use client"
import {useState, useEffect} from "react"
// アイテム作成成功後、画面遷移する
import {useRouter} from "next/navigation"
//ログイン状態の取得
import { useAuthContext } from "@/context/AuthContext"
//google map auto complete機能
import PlaceAutocomplete from "../../components/map/placeAutocomplete"
//MUI
import {Button} from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
//カテゴリー配列
import {categoryList, Category} from "../../components/post/categoryButton"
import { usePostContext } from "@/context/PostContext"
import PostSectionEditor from "@/app/components/post/postSectionEditor"
import { useForm} from "react-hook-form"
import Loading from "@/app/components/common/loading"
import Link from "next/link"

type Section = {
  image: string | null;
  description: string;
}

type FormValues = {
  category: string;
  title: string;
  location: string;
}

const CreateItem = () => {

  const [sections, setSections] = useState<Section[]>([{image:null, description: ''}])
  const [googlePlace, setGooglePlace] = useState<string|null>(null)
  const [lat, setLat] = useState<number | null>(null)
  const [lng, setLng] = useState<number | null>(null)
  const [loading, setLoading] = useState(false)

  //文字数カウント
  const [titleCount, setTitleCount] = useState(0)
  const [locationCount, setLocationCount] = useState(0)

  const router = useRouter()
  const {postData, setPostData, resetPostData} = usePostContext()
  const {loginUserEmail, loginUserId} = useAuthContext()

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: {errors},
  } = useForm<FormValues>({})

  const handleSelectPlace = (lat: number, lng: number, name:string) => {
    setLat(isNaN(lat) ? null : lat)
    setLng(isNaN(lng) ? null : lng)
    setGooglePlace(name)
  }

  //preview.tsxからの遷移時(プレビュー画面にて「戻る」ボタン押下時)
  useEffect(()=> {
    setLoading(true);
    const fromPreview = sessionStorage.getItem("fromPreview")

    //画面開いた時contextを削除(previewからの遷移を除く)
    if (fromPreview !== "true") {
      resetPostData()

    }else {
      const imageDescriptions = [];
      if(postData) {
        for (let i=1; i<=5; i++) {
          const image = postData[`image${i}` as keyof typeof postData] as string | null;
          const rawDescription = postData[`description${i}` as keyof typeof postData] as string;
          const description = rawDescription ?? ""

          if(image || description) {
            imageDescriptions.push({image, description})
          }
        }

        if (imageDescriptions.length === 0) {
          imageDescriptions.push({ image: null, description: "" });
        }
        setSections(imageDescriptions)
        setValue("title",postData.title);
        setValue("category", postData.category)
        setValue("location", postData.location || "")

        setGooglePlace(postData.googlePlace);
        setLat(postData.lat);
        setLng(postData.lon);
      }
    }
    sessionStorage.removeItem("fromPreview")
    setLoading(false);
  }, [])

  // プレビューボタン押下時
  const onSubmit = (data:FormValues) => {
    setLoading(true);

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
      googlePlace: googlePlace || null,
      lat: lat || null,
      lon:lng || null,
    })
    setLoading(false);
    router.push('/post/createPreview')
  }

  useEffect(()=> {
    register("category", {required: "カテゴリを選択してください"})
  },[register])

  if(loading) {
    return(<Loading/>)
  }

  //loginUserId にトークン解析から取得したidがある場合にのみreturn
  if(loginUserId) {

    return (
      <>
            {/* タイトル部分 */}
        <div className="createContainer">

          <div className="createTitleContent">

            <div className='co-back' style={{marginBottom:"20px"}}>
              <Link href="/"><CloseIcon/>中断</Link>
            </div>

            <h1>記事を作成する</h1>
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
                  <PlaceAutocomplete onSelectPlace={handleSelectPlace} defaultPlace={null} />
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
  }
}

export default CreateItem
