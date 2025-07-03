"use client"

import {useRouter} from "next/navigation"
import { useAuthContext } from "@/context/AuthContext"
import Link from "next/link"
import SinglePostLayout from "@/app/components/singlePostLayout"
import GoogleMapComponent from "@/app/components/googleMap"
import {Suspense, useState} from 'react'
import { AllItemTypes } from "@/utils/types/post"
import Loading from "@/app/components/loading"

type Props = {
  id:string,
  singleItem: AllItemTypes
}

const DeleteItem = ({id, singleItem}:Props) => {

  const router = useRouter()
  const {loginUserId} = useAuthContext()
  const [loading, setLoading] = useState(false)


  //削除formボタンが押下された時の処理
  const handleClick = async(e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setLoading(true);

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

      alert(jsonData.message)
      router.push("/")

    }catch(error) {
      console.error("error message: ", error)
      alert("削除が失敗しました")

    }finally {
      setLoading(false);
    }
  }

  if(loading) {
    return(
      <Loading/>
    )
  }

  if(Number(loginUserId) ===  singleItem.authorId) {

    return(
      <>
        {/* 記事描写 */}
        <SinglePostLayout singleItem={singleItem} />

        {/* ロケーション */}
        <section className="locationContainer">
          <div className="locationLabel">
            <h2 className="en">Location</h2>
            <div className="horizontalLineMedium"><span></span></div>
          </div>
          <div className="locationContent">
            <p className="locationName">{singleItem.location}</p>
              {singleItem.lat && singleItem.lon && (
                <Suspense fallback={<div>地図を読み込み中...</div>}>
                  <div className="googleMapContainer">
                    <GoogleMapComponent lat={Number(singleItem.lat)} lng={Number(singleItem.lon)}/>
                  </div>
                </Suspense>
              )}
            <p className="googleMapName en">{singleItem.googlePlace}</p>
          </div>
        </section>

        <div className="toPreviewBtn">
          <button onClick={(e)=>handleClick(e)}>
            この記事を削除する
          </button>
        </div>
        <div  className="backButton">
          <Link href={`/post/readsingle/${id}`}>投稿へ戻る</Link>
        </div>
      </>
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
