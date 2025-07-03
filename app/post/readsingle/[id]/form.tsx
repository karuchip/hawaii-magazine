"use client"

import Link from "next/link"
import { Suspense } from "react"
import LikeCount from "../../../components/likeCount"
import Comment from "../../../components/comment"
import { AllItemTypes } from "@/utils/types/post"
import GoogleMap from "@/app/components/googleMap"
import SinglePostLayout from "@/app/components/singlePostLayout"
import { useAuthContext } from "@/context/AuthContext"
import BottomMenu from "@/app/components/bottomMenu"

type Props = {
  postId: number;
  singleItem: AllItemTypes;
}

const ReadSingleItem = ({singleItem, postId}:Props) => {
  const {loginUserId, loginUserIcon} = useAuthContext()

  if(!singleItem) {
    return <div>投稿が見つかりませんでした</div>
  }

  return(

    <>
      {/* bottomメニュー */}
      {loginUserId && loginUserIcon && (
        <div className="bottomMenuContainer">
          <BottomMenu loginUserId={loginUserId}/>
        </div>
      )}

      <div className="singlePostContainer">
        <div className="singlePostContent">

        {/* likeボタン */}
        {loginUserId && (
          <div className="likePosition">
            <LikeCount likeCount={singleItem.likeCount} id={postId}/>
          </div>
        )}

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
              <Suspense fallback={<div>地図を読み込み中...</div>}>
                <div className="googleMapContainer">
                  {singleItem.lat && singleItem.lon && (
                    <GoogleMap lat={singleItem.lat} lng={singleItem.lon}/>
                  )}
                </div>
              </Suspense>
            <p className="googleMapName en">{singleItem.googlePlace}</p>
          </div>
        </section>


        {/* 記事コメント読み込み */}
        <div>
          <div className="commentContainer">
            <h2 className="commentLabel en">Comments</h2>
            <div className="horizontalLineMedium"><span></span></div>
          </div>
          <Suspense fallback={<div>コメントを読み込み中...</div>}>
            <Comment postId={singleItem.id}/>
          </Suspense>
        </div>


          {/* リンクボタン */}
          <div className="linkContainer">
            <Link href={`/`} className="singlePageLink back">投稿一覧に戻る</Link>

            {String(loginUserId) === String(singleItem.authorId) && (
              <>
                <div className="horizontalLineLight"><span></span></div>
                <div className="editDeleteContainer">
                  <Link href={`/post/update/${singleItem.id}`} className="singlePageLink">
                    編集
                  </Link>
                  <Link href={`/post/delete/${singleItem.id}`} className="singlePageLink">
                    削除
                  </Link>
                </div>
              </>
            )}

          </div>
        </div>
      </div>
    </>

  )
}

export default ReadSingleItem
