"use client"

import Link from "next/link"
import { Suspense } from "react"
import LikeCount from "@/app/components/like/likeCount"
import Comment from "../../../components/comment/comment"
import { AllItemTypes } from "@/utils/types/post"
import GoogleMap from "@/app/components/map/googleMap"
import SinglePostLayout from "@/app/components/format/singlePostLayout"
import { useAuthContext } from "@/context/AuthContext"
import BottomMenu from "@/app/components/common/bottomMenu"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShareButtons from "@/app/components/share/shareButton"
import { GetSingleItem } from "@/utils/getSingleItem"
import { Metadata } from "next"


// 型定義
type PostWidthDistance = AllItemTypes & {distance: number}

type Props = {
  postId: number;
  singleItem: AllItemTypes;
  nearPosts: PostWidthDistance[];
}


// 動的にOPGを生成
export async function generateMetadata({params}: any): Promise<Metadata> {
  const singleItem = await GetSingleItem(params.id);

  if(!singleItem) {
    return {
      title: "投稿が見つかりませんでした",
      description: "指定された投稿は存在しません"
    };
  }

  return {
    title: singleItem.title,
    description: "あの瞬間をもう一度。ハワイで出会ったとっておきの景色を集めよう",
    openGraph: {
      title: singleItem.title ?? "タイトル",
      description: singleItem.description1 ?? "あの瞬間をもう一度。ハワイで出会ったとっておきの景色を集めよう",
      url: `https://hawaii-magazine.vercel.app/post/readsingle/${singleItem.id}`,
      type: "article",
      images: [
        {
          url: singleItem.image1 ?? "画像",
          width: 1200,
          height: 600,
          alt: singleItem.title ?? "タイトル",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: singleItem.title ?? "タイトル",
      description: singleItem.description1 ?? "あの瞬間をもう一度。ハワイで出会ったとっておきの景色を集めよう",
      images: [singleItem.image1 ?? ""],
    }
  }
}


// 投稿表示部分
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

            {/* セカンドヘッダーリンクボックス */}
            <div className="secondHeaderLinkContainer">
              <Link href={`/post/readAll`} className="secondHeaderLink secondHeaderLink1">
                <ArrowBackIcon/>記事一覧へ
              </Link>

              {String(loginUserId) === String(singleItem.authorId) && (
                <div className="secondHeaderEditDelete">
                  <Link href={`/post/update/${singleItem.id}`} className="secondHeaderLink secondHeaderLink2">
                    <EditIcon/>編集
                  </Link>
                  <span></span>
                  <Link href={`/post/delete/${singleItem.id}`} className="secondHeaderLink secondHeaderLink2">
                    <DeleteIcon/>削除
                  </Link>
                </div>
              )}
            </div>



            {/* likeボタン */}
            {loginUserId && (
              <div className="likePosition">
                <LikeCount likeCount={singleItem.likeCount} id={postId} authorId={Number(singleItem.author.id)}/>
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
            <section className="commentContainer">
              <div>
                <h2 className="commentLabel en">Comments</h2>
                <div className="horizontalLineMedium"><span></span></div>
              </div>
              <Suspense fallback={<div>コメントを読み込み中...</div>}>
                <Comment postId={singleItem.id} authorId={singleItem.author.id}/>
              </Suspense>
            </section>

            {/* シェア */}
            <section className="shareContainer">
              <div>
                <h2 className="commentLabel en">Share</h2>
                <div className="horizontalLineMedium"><span></span></div>
              </div>
              {singleItem.title && singleItem.author.name && (
                <ShareButtons
                  url={`https://hawaii-magazine.vercel.app/post/readsingle/${singleItem.id}`}
                  title={singleItem.title}
                  author={singleItem.author.name}
                />
              )}
            </section>
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
      {/* リンクボタン */}
      <div className="linkContainer">
        <Link href={`/post/readAll`} className="singlePageLink back">記事一覧へ</Link>
      </div>
    </>
  )
}

export default ReadSingleItem
