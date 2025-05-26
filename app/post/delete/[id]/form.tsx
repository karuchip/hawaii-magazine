"use client"

import {useRouter} from "next/navigation"
import Image from "next/image"
import { useAuthContext } from "@/app/AuthContext"
import Link from "next/link"
import { Button } from "@mui/material"


type Props = {
  id:string
  singleItem: {
    title: string
    image: string
    description: string
    place: string
    category: string
    authorId: number
  }
}

const DeleteItem = ({id, singleItem}:Props) => {

  const router = useRouter()
  const {loginUserId} = useAuthContext()


  //削除formボタンが押下された時の処理
  const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try{
      const response = await fetch(`/api/post/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({
          authorId: Number(loginUserId)
        })
      })
      const jsonData = await response.json()
      console.log(jsonData)
      alert(jsonData.message)
      router.push("/")

    }catch(error) {
      console.error("error message: ", error)
      alert("削除が失敗しました")
    }
  }


  if(Number(loginUserId) ===  singleItem.authorId) {

    return(
      <div>
        <form onSubmit={handleSubmit}>
            <div className="deleteImage">
              <Image alt="画像" src={singleItem.image} width={300} height={300} />
            </div>
            <div className="deleteItem">
              <h2>{singleItem.title}</h2>
              <p>{singleItem.description}</p>
            </div>
              <p>📍 {singleItem.place}</p>
              <p>🏷️ カテゴリー: {singleItem.category}</p>

            <div style={{display:"flex", justifyContent:"center"}}>
              <Button type="submit" variant="contained" color="primary"
                sx={{
                  borderRadius: "30px", padding: "10px 24px", marginTop: "30px",
                  backgroundColor: "#f06543", '&:hover': { backgroundColor: "#F05143" }
                }}>
                削除
              </Button>
            </div>
        </form>
        <div className="backToList">
          <Link href={"/readsingle/${postId}"}>戻る</Link>
        </div>
      </div>
    )

  } else {
    return (
      <div>
        <h1>削除権限がありません</h1>
        <Link href="/user/login">ログインする</Link>
        <Link href="/user/register">新規登録する</Link>
      </div>
    )
  }
}

export default DeleteItem
