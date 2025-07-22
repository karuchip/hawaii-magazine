"use client"
import * as React from "react"
import { Suspense, useState} from "react"
import Link from "next/link"
import useAuth from "@/utils/useAuth"
import Loading from "./components/common/loading"

//MUI
import BottomMenu from "./components/common/bottomMenu"
import { useAuthContext } from "@/context/AuthContext"
import RankingSection from "./components/home/rankingSection"
import PopularUserSection from "./components/home/popularUser"
import FadeInSection from "./components/home/FadeInSection"


export const dynamic = "force-dynamic"

const ReadAllItemsInner = () => {
  const {loading, loginUserId,} = useAuth(false)
  const {loginUserIcon} = useAuthContext()

  return(
    <>
      {/* bottomメニュー */}
      {loginUserId && loginUserIcon && (
        <div className="bottomMenuContainer">
          <BottomMenu loginUserId={loginUserId}/>
        </div>
      )}

      <div className="homeContainer">
        {/* ファーストビュー */}
        <div className="homeFVContent">
          {/* <div className="homeFVImg">
            <img src="/home/homeFV.JPG" alt="FV画像"/>
          </div> */}
          <div className="homeFVTitle">
            <h1>Share your</h1>
            <h1>Aloha memories.</h1>
          </div>
        </div>


        {/* ページ本文 */}
        <div className="homeMainContent">

          {/* Create Articleセクション */}
          <FadeInSection>
            <section className="homeCreateArticle">
              <h2 className="en co-homeH2">Create Article</h2>
              <p className="co-homeP">雑誌風レイアウトでハワイの記事を作成する</p>
              {loginUserId ? (
                <Link href="/post/create" className="co-homeA homeCreateLink">投稿する</Link>
              ):(
                <Link href="/user/login" className="co-homeA homeCreateLink">ログインして投稿する</Link>
              )}
              <div className="homeCreateArticleImg">
                <img src="/home/homeArticles.png"></img>
              </div>
            </section>
          </FadeInSection>


          {/* Rankingセクション */}
          <FadeInSection>
            <section className="homeRanking">
              <h2 className="en co-homeH2">Ranking</h2>
              <p className="co-homeP">今週最も閲覧された記事をチェックする</p>
              <RankingSection/>
              <Link href="/post/readAll" className="homeRankingLink co-homeA">全ての記事を見る</Link>
            </section>
          </FadeInSection>


          {/* Spotlight Usersセクション */}
          <FadeInSection>
            <section className="homeSpotlightUsers">
              <h2 className="en co-homeH2">Spotlight Users</h2>
              <p className="co-homeP">人気ユーザーのプロフィールをチェックする</p>
              <PopularUserSection/>
            </section>
          </FadeInSection>


          {/* From Mapセクション */}
          <FadeInSection>
            <section className="homeFromMap">
              <h2 className="en co-homeH2">From Map</h2>
              <p className="co-homeP">地図から記事を探す</p>
              <Link href="/map">
                <div className="homeFromMapImg">
                  <img src="/home/homeMap.png" alt="マップ画像"/>
                </div>
              </Link>
            </section>
          </FadeInSection>


          {/* View All Articlesセクション */}
          <FadeInSection>
            <section className="homeViewAllArticles">
              <Link href="/post/readAll">
                <div className="homeViewAllBackground">
                  <div className="homeViewAllFront ">
                      <h2 className="en co-homeH2">View All Articles</h2>
                      <p className="co-homeP">投稿された全てのハワイ記事を見る</p>
                      <p className="homeViewAllShow">記事はこちら</p>
                  </div>
                </div>
              </Link>
            </section>
          </FadeInSection>


        </div>
      </div>
    </>
  )
}

export default function ReadAllItems(){
  return (
    <Suspense fallback={<Loading/>}>
      <ReadAllItemsInner/>
    </Suspense>
  );
};
