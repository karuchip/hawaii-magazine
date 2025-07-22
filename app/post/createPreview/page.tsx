"use client"
import { useAuthContext } from "@/context/AuthContext"
import { usePostContext } from "@/context/PostContext"
import {useRouter} from "next/navigation"
import SinglePostLayout from "@/app/components/format/singlePostLayout"
import { Suspense, useEffect, useState} from "react"
import GoogleMapComponent from "@/app/components/map/googleMap"
import Link from "next/link"
import Loading from "@/app/components/common/loading"


const PostPreview = () => {

  const {postData} = usePostContext()
  const {loginUserId, loginUserName, loginUserIcon} = useAuthContext()
  const {setPostData, resetPostData} = usePostContext()
  const [loading, setLoading] = useState(false);
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

  const handleClick = async(e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    setLoading(true);

    try {
      const response = await fetch('/api/post/create', {
        method: "POST",
        headers:{
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
      alert(jsonData.message)

      //コンテクストを削除
      resetPostData()

      router.push("/post/readAll")

    } catch(error) {
      alert("アイテム作成失敗")
    } finally {
      setLoading(false);
    }
  }

  if(loading) {
    return <Loading />
  }

  return(
    <>
      <div className="singlePostContainer">
        <div className="singlePostContent createPreviewLayout">

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
              {postData.lat != null && postData.lon != null && (
                <>
                  <Suspense fallback={<div>地図を読み込み中...</div>}>
                    <div className="googleMapContainer">
                      <GoogleMapComponent lat={Number(postData.lat)} lng={Number(postData.lon)}/>
                    </div>
                  </Suspense>
                  <p className="googleMapName en">{postData.googlePlace}</p>
                </>
              )}
            </div>
          </section>

          <div className="toPreviewBtn">
            <button type="submit" onClick={handleClick}>
              この内容で記事を投稿する
            </button>
          </div>
          <div className="backButton">
            <Link href="/post/create">作成画面へ戻る</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default PostPreview
