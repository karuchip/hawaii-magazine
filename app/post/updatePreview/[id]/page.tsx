"use client"
import { useAuthContext } from "@/context/AuthContext"
import { usePostContext } from "@/context/PostContext"
import {useRouter} from "next/navigation"
import SinglePostLayout from "@/app/components/singlePostLayout"
import { Suspense, useEffect } from "react"
import GoogleMapComponent from "@/app/components/googleMap"
import Link from "next/link"
import { useParams } from "next/navigation"


const PostPreview = (Props: any) => {
  const params = useParams() as { id: string };

  const {postData} = usePostContext()
  const {loginUserId, loginUserName, loginUserIcon} = useAuthContext()
  const {resetPostData} = usePostContext()
  const router = useRouter()

  const dummyPostData = {
    title: null,
    image1: null,
    image2: null,
    image3: null,
    image4: null,
    image5: null,
    description1: "",
    description2: "",
    description3: "",
    description4: "",
    description5: "",
    category: null,
    location: null,
    googlePlace: null,
    lat: null,
    lon: null,
    id: 1,
    likeCount: 100,
    createdAt: new Date(),
    updatedAt: new Date(),
    published: false,
    authorId: 1,
    author: {
      id: Number(loginUserId),
      name: loginUserName,
      userIcon: loginUserIcon
    }
  }


  useEffect(() => {
    sessionStorage.setItem("fromPreview", "true")
  }, [])


  //編集formボタンが押下された時の処理
  const handleClick = async(e: React.MouseEvent<HTMLButtonElement>, params:any) => {
    e.preventDefault()

    try{
      console.log(`/api/post/update/${params.id}`)
      const response = await fetch(`/api/post/update/${params.id}`, {
        method: "PUT",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({
          title: postData.title,
          image1: postData.image1,
          image2: postData.image2,
          image3: postData.image3,
          image4: postData.image4,
          image5: postData.image5,
          description1: postData.description1,
          description2: postData.description2,
          description3: postData.description3,
          description4: postData.description4,
          description5: postData.description5,
          category: postData.category,
          location: postData.location,
          googlePlace: postData.googlePlace,
          published: true,
          lat: postData.lat,
          lon: postData.lon,
          authorId: loginUserId
        })
      })
      const jsonData = await response.json()

      //コンテクストを削除
      resetPostData();

      alert(jsonData.message)
      router.push(`/post/readsingle/${params.id}`)

    } catch(error) {
      alert("更新失敗")
    }
  }



  return(
    <>
      <div className="singlePostContainer">
        <div className="singlePostContent">

          {/* 記事描写 */}
          <SinglePostLayout singleItem={{...dummyPostData, ...postData}} />

          {/* ロケーション */}
          <section className="locationContainer">
            <div className="locationLabel">
              <h2 className="en">Location</h2>
              <div className="horizontalLineMedium"><span></span></div>
            </div>
            <div className="locationContent">
              <p className="locationName">{postData.location}</p>
                {postData.lat && postData.lon && (
                  <Suspense fallback={<div>地図を読み込み中...</div>}>
                    <div className="googleMapContainer">
                      <GoogleMapComponent lat={Number(postData.lat)} lng={Number(postData.lon)}/>
                    </div>
                  </Suspense>
                )}
              <p className="googleMapName en">{postData.googlePlace}</p>
            </div>
          </section>

          <div className="toPreviewBtn">
            <button onClick={(e) => handleClick(e, params)}>
              この内容で記事を編集する
            </button>
          </div>
          <div  className="backButton">
            <Link href={`/post/update/${params.id}`}>編集画面へ戻る</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default PostPreview
