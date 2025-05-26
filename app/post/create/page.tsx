"use client"
import {useState} from "react"
// アイテム作成成功後、画面遷移する
import {useRouter} from "next/navigation"
//ログイン状態の取得
import { useAuthContext } from "@/app/AuthContext"
//画像ダウンロードapi
import ImgInput from "../../components/imgInput"
//google map auto complete機能
import PlaceAutocomplete from "../../components/placeAutocomplete"
//MUI
import {Button, TextField} from "@mui/material"
//カテゴリー配列
import {categoryList, Category} from "../../components/categoryButton"
//Image
import Image from "next/image"

const CreateItem = () => {

  const [title, setTitle] = useState("")
  const [place, setPlace] = useState("")
  const [image, setImage] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState<string | null>(null)
  const [lat, setLat] = useState<number | null>(null)
  const [lng, setLng] = useState<number | null>(null)

  //アイテム作成後、画面遷移する
  const router = useRouter()
  //トークン解析後の情報を取得
  const {loginUserEmail, loginUserId} = useAuthContext()

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {


      const response = await fetch('/api/post/create', {
        method: "POST",
        headers:{
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({
          title: title,
          image: image,
          description: description,
          category: category,
          lat: lat,
          lon: lng,
          place: place,
          published: true,
          authorId: loginUserId
        })
      })

      const jsonData = await response.json()
      alert(jsonData.message)
      router.push("/")

    } catch(error) {
      alert("アイテム作成失敗")
    }
  }

  const handleSelectPlace = (lat: number, lng: number, name:string) => {
    setLat(isNaN(lat) ? null : lat)
    setLng(isNaN(lng) ? null : lng)
    setPlace(name)
  }

  //loginUserId にトークン解析から取得したidがある場合にのみreturn
  if(loginUserId) {

    return (
      <div className="postFormContainer">
        <div className="postFormWrapper">
          <h1>🌺 思い出をシェアしよう！</h1>
          <form onSubmit={handleSubmit} className="createForm">
            <div>
              <TextField
                label="タイトル"
                placeholder="例: モアナサンドイッチが最高だった🍍"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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

            <div className="selectImage">
              <p>📸 画像</p>
              <ImgInput setImage={setImage}/>
              <input className="selectImageBox" value={image} onChange={(e)=>setImage(e.target.value)} type="text" name="image" placeholder="「ファイルを選択」ボタンから画像を選択し、「画像 Upload」ボタンを押してください" id="createImage" required disabled/>
              <div className="imagePreview">
                {image &&
                  <Image
                    src={image}
                    alt="画像"
                    width={500}
                    height={300}
                    priority
                  />
                }
              </div>
            </div>

            <div className="selectPlace">
            <p>📍場所を追加する</p>
            <PlaceAutocomplete onSelectPlace={handleSelectPlace} defaultPlace={null} />
            </div>

            <div style={{display:"flex", justifyContent:"center"}}>
              <Button type="submit" variant="contained" color="primary"
                sx={{
                  borderRadius: "30px", padding: "10px 24px", marginTop: "50px",
                  backgroundColor: "#66c7d9", '&:hover': { backgroundColor: "#5ab6c7" }
                }}>
                📤 投稿する
              </Button>
            </div>

          </form>
        </div>
      </div>
    )
  }
}

export default CreateItem
