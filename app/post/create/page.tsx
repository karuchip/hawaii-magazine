"use client"
import {useState, useEffect} from "react"
// アイテム作成成功後、画面遷移する
import {useRouter} from "next/navigation"
//ログイン状態の取得
import { useAuthContext } from "@/context/AuthContext"
//google map auto complete機能
import PlaceAutocomplete from "../../components/placeAutocomplete"
//MUI
import {Button, TextField} from "@mui/material"
//カテゴリー配列
import {categoryList, Category} from "../../components/categoryButton"
//Image
import Image from "next/image"
import { usePostContext } from "@/context/PostContext"
import PostSectionEditor from "../../components/postSectionEditor"

type Section = {
  image: string | null;
  description: string;
}

const CreateItem = () => {

  const [sections, setSections] = useState<Section[]>([{image:null, description: ''}])

  const [title, setTitle] = useState("")
  const [location, setLocation] = useState<string|null>(null)
  const [googlePlace, setGooglePlace] = useState<string|null>(null)
  const [category, setCategory] = useState("")
  const [lat, setLat] = useState<number | null>(null)
  const [lng, setLng] = useState<number | null>(null)

  const router = useRouter()
  const {postData, setPostData} = usePostContext()
  const {loginUserEmail, loginUserId} = useAuthContext()

  const handleSelectPlace = (lat: number, lng: number, name:string) => {
    setLat(isNaN(lat) ? null : lat)
    setLng(isNaN(lng) ? null : lng)
    setGooglePlace(name)
}

  //preview.tsxからの遷移時(「戻る」ボタン押下時)
  useEffect(()=> {
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

      setTitle(postData.title);
      setCategory(postData.category);
      setLocation(postData.location);
      setGooglePlace(postData.googlePlace);
      setLat(postData.lat);
      setLng(postData.lon);
    }
  }, [postData])

  // プレビューボタン押下時
  const handlePreview = () => {

    setPostData({
      title,
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
      category,
      location,
      googlePlace,
      lat,
      lon:lng,
    })

    router.push('/post/createPreview')
  }


  //loginUserId にトークン解析から取得したidがある場合にのみreturn
  if(loginUserId) {

    return (
      <>
            {/* タイトル部分 */}
        <div className="createContainer">
          <div className="createTitle createContent">
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
                  variant={category === cat.value ? "contained" : "outlined"}
                  onClick={() => setCategory(cat.value)}
                  sx={{
                    backgroundColor: category === cat.value ? cat.color : "transparent",
                    color: category === cat.value ? "white" : "black",
                    borderRadius: "20px",
                    textTransform: "none",
                    margin: "4px"
                  }}
                  >
                      {cat.label}
                  </Button>
                ))}
              </div>

              {/* タイトル入力 */}
              <div className="title">
                <p className="postElement"># タイトル</p>

                <input
                  type="text"
                  placeholder="| ここにタイトルを入力してください"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
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
                  <input type="text" value={location ?? ""} onChange={(e)=>setLocation(e.target.value)} placeholder="| ここに場所名を入力してください" />
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
          <div className="createContent">
            <div className="toPreviewBtn">
              <button type="button" onClick={handlePreview}>プレビューを確認する</button>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default CreateItem
