"use client"

import Link from "next/link"
import Image from "next/image"
import {useState, useEffect, Suspense} from "react"
import {useRouter}from "next/navigation"
import { useAuthContext } from "@/app/AuthContext"
import PlaceAutocomplete from "../../../components/placeAutocomplete"
import {TextField, Button} from "@mui/material"
import { categoryList, Category } from "@/app/components/categoryButton"
import Loading from "@/app/components/loading"

type Props = {
  params:{
    id: string
  }
}

const UpdateItem = ({params}:any) => {

  const [postId, setPostId] = useState("")
  const [title, setTitle] = useState("")
  const [place, setPlace] = useState("")
  const [lat, setLat] = useState<number | null>(null)
  const [lng, setLng] = useState<number | null>(null)
  const [image, setImage] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState<string | null>(null)
  const [authorId, setAuthorId] = useState("")
  const [loaded, setLoaded] = useState(false)

  const router = useRouter()
  const {loginUserId} = useAuthContext()

  //場所autocomplete機能
  const handleSelectPlace = (lat: number, lng: number, name:string) => {
    setLat(isNaN(lat) ? null : lat)
    setLng(isNaN(lng) ? null : lng)
    setPlace(name)
  }

  //ページを開いたときの処理
  useEffect(() => {

    const getSingleItem = async() => {
      try{

        console.log("フェッチ中")

        const response = await fetch(`/api/post/readsingle/${params.id}`)
        const jsonData = await response.json()
        const singleItem = jsonData.singleItem

        setPostId(String(singleItem.id))
        setTitle(singleItem.title)
        setPlace(singleItem.place)
        setLat(singleItem.lat)
        setLng(singleItem.lng)
        setImage(singleItem.image)
        setDescription(singleItem.description)
        setCategory(singleItem.category)
        setAuthorId(singleItem.authorId)
        setLoaded(true)

      }catch(error) {
        console.log("フェッチ失敗")
      }
      }

    getSingleItem()
  },[params.id])


  //編集formボタンが押下された時の処理
  const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try{

      const response = await fetch(`/api/post/update/${params.id}`, {
        method: "PUT",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({
          title: title,
          place: place,
          lat: lat,
          lon: lng,
          image: image,
          description: description,
          category: category,
          authorId: loginUserId
        })
      })
      const jsonData = await response.json()
      alert(jsonData.message)
      router.push("/")
    } catch(error) {
      alert("更新失敗")
    }
  }
  if(loaded) {

    if (loginUserId === authorId) {
      return(
        <div>
          <div className="postFormWrapper">
            <h1>🍍 編集中</h1>
            <form onSubmit={handleSubmit}>
              <div>
                <TextField
                  label="タイトル"
                  placeholder="例: モアナサンドイッチが最高だった🍍"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  name="title"
                  id="createTitle"
                  required
                  fullWidth
                  margin="normal"
                />
              </div>

              <div>
                <TextField
                  label="ひとこと"
                  placeholder="例: エビとアボカドのコンビネーションが贅沢🥑🦐🩵"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  type="text"
                  name="description"
                  id="createContent"
                  required
                  fullWidth
                  margin="normal"
                />
              </div>

              <div className="selectCategory" >
              <p>🏷️ 記事カテゴリー</p>
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

              <div className="selectPlace">
                <p>📍 場所を編集する</p>
                <Suspense fallback={<div>場所を読み込み中...</div>}>
                  <PlaceAutocomplete onSelectPlace={handleSelectPlace} defaultPlace={place}/>
                </Suspense>
              </div>

              <div className="viewImage">
                <p>📸 画像プレビュー</p>
                <div className="imagePreview">
                    <Image src={image} alt="画像" width={500} height={300} priority/>
                </div>
              </div>

              <div style={{display:"flex", justifyContent:"center"}}>
                <Button type="submit" variant="contained" color="primary"
                  sx={{
                    borderRadius: "30px", padding: "10px 24px", marginTop: "50px",
                    backgroundColor: "#66c7d9", '&:hover': { backgroundColor: "#5ab6c7" }
                  }}>
                  ✨ 更新する
                </Button>
              </div>

            </form>
          </div>
        </div>
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
