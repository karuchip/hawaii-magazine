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

type PostWidthDistance = AllItemTypes & {distance: number}

type Props = {
  postId: number;
  singleItem: AllItemTypes;
  nearPosts: PostWidthDistance[];
}

const ReadSingleItem = ({singleItem, postId, nearPosts}:Props) => {
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
        <div className="singleNearPostContent">
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
                    {singleItem.lat && singleItem.lon && (
                      <div className="googleMapContainer">
                        <GoogleMap lat={singleItem.lat} lng={singleItem.lon}/>
                      </div>
                    )}
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


          {/* 近くの投稿 */}
          {nearPosts.length > 0 && (
            <div className="nearPost">
              <h2>近くの投稿</h2>
              <div className="nearPostContainer">
                {nearPosts.map(nearPost => (
                  nearPost.id !== singleItem.id && (
                    <div key={nearPost.id} className='nearPostContent'>
                      <Link href={`/post/readsingle/${nearPost.id}`}>
                        {nearPost.image1 && (
                          <div className='nearPostImg'>
                            <img src={nearPost.image1} />
                          </div>
                        )}
                        {nearPost.title && nearPost.title.length > 20
                          ? <p className="nearPostTitle">{`${nearPost.title?.slice(0, 20)}...`}</p>
                          : <p className="nearPostTitle">{nearPost.title}</p>
                        }
                        <p className="nearPostKm">{`この投稿から${Math.round(nearPost.distance / 100) / 10} km`}</p>
                      </Link>
                    </div>
                  )
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ReadSingleItem
