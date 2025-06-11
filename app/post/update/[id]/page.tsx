"use client"

import Link from "next/link"
import {useState, useEffect, Suspense} from "react"
import {useRouter}from "next/navigation"
import { useAuthContext } from "@/context/AuthContext"
import PlaceAutocomplete from "../../../components/placeAutocomplete"
import {TextField, Button} from "@mui/material"
import { categoryList, Category } from "@/app/components/categoryButton"
import Loading from "@/app/components/loading"
import PostSectionEditor from "@/app/components/postSectionEditor"
import { usePostContext } from "@/context/PostContext"
import { useParams } from 'next/navigation';


type Section = {
  image: string | null;
  description: string;
}


const UpdateItem = (props:any) => {
  const params = useParams() as { id: string };

  const [postId, setPostId] = useState("")
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [location, setLocation] = useState("")
  const [googlePlace, setGooglePlace] = useState("")
  const [lat, setLat] = useState<number | null>(null)
  const [lng, setLng] = useState<number | null>(null)
  const [authorId, setAuthorId] = useState("")
  const [loaded, setLoaded] = useState(false)

  const router = useRouter()
  const {loginUserId} = useAuthContext()
  const {setPostData} = usePostContext()
  const [sections, setSections] = useState<Section[]>([{image:null, description: ''}])

  //場所autocomplete機能
  const handleSelectPlace = (lat: number, lng: number, name:string) => {
    setLat(isNaN(lat) ? null : lat)
    setLng(isNaN(lng) ? null : lng)
    setGooglePlace(name)
  }

  //ページを開いたときの処理
  useEffect(() => {
    const getSingleItem = async() => {
      try{
        const response = await fetch(`/api/post/readsingle/${params.id}`)
        const jsonData = await response.json()
        const singleItem = jsonData.singleItem

        const imageDescriptions = [];
        for (let i=1; i<=5; i++) {
          const image = singleItem[`image${i}`] as string | null;
          const rawDescription = singleItem[`description${i}`] as string;
          const description = rawDescription ?? ""

          if(image || description) {
            imageDescriptions.push({image, description})
          }
        }
        if (imageDescriptions.length === 0) {
          imageDescriptions.push({ image: null, description: "" });
        }
        setSections(imageDescriptions)

        setPostId(String(singleItem.id))
        setTitle(singleItem.title)
        setLocation(singleItem.location)
        setGooglePlace(singleItem.googlePlace)
        setLat(singleItem.lat)
        setLng(singleItem.lng)
        setCategory(singleItem.category)
        setAuthorId(singleItem.authorId)
        setLoaded(true)

      }catch(error) {
        console.log("フェッチ失敗")
      }
    }
    getSingleItem()

  },[params.id])


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

    router.push(`/post/updatePreview/${params.id}`)
  }

  if(loaded) {

    if (loginUserId === authorId) {
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

                  <details open className="addGoogleMap">
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
            <div  className="backButton">
                <Link href={`/post/readsingle/${postId}`}>投稿へ戻る</Link>
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
  }else{
    return <Loading />
  }
}

export default UpdateItem
