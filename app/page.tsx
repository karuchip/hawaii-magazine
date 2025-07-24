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
import FadeInSection from "./components/animation/FadeInSection"
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import FromLeftFadeInSection from "./components/animation/fromLeftFadeInSection"


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
          <div className="homeFVTitle">
            <h1>Share your</h1>
            <h1>Aloha memories.</h1>
            <div className="homeFVTitleScroll"><KeyboardDoubleArrowDownIcon sx={{fontSize:"50px", mt:4}}/></div>
          </div>
        </div>


        {/* ページ本文 */}
        <div className="homeMainContent">

          {/* Conceptセクション */}
          <section className="homeConcept">
            <FadeInSection>
              <h2 className="en co-homeH2">About</h2>
              <h3>「誰かの"好き"が、誰かの旅のヒントになる。」</h3>
              <p className="co-homeP homeConceptP">誰かの「好き」が他の誰かの「旅のヒント」になるように、雑誌風のレイアウトで、写真や思い出を自由にシェアできる空間を目指しています。UIやデザイン、使いやすさにもこだわって、ハワイの心地よさをそのまま感じられるアプリに仕上げました。</p>
            </FadeInSection>
          </section>

          {/* Features 帯 */}
          <FromLeftFadeInSection>
            <div className="homeFeaturesBelt text-mask-wrapper">
              <p className="en text-mask">Features</p>
            </div>
          </FromLeftFadeInSection>

          {/* Create Articleセクション */}
          <section className="homeCreateArticle">
            <FadeInSection>
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
            </FadeInSection>
          </section>


          {/* Rankingセクション */}
          <section className="homeRanking">
            <FadeInSection>
              <h2 className="en co-homeH2">Ranking</h2>
              <p className="co-homeP">今週最も閲覧された記事をチェックする</p>
              <RankingSection/>
              <Link href="/post/readAll" className="homeRankingLink co-homeA">全ての記事を見る</Link>
            </FadeInSection>
          </section>


          {/* Spotlight Usersセクション */}
          <section className="homeSpotlightUsers">
            <FadeInSection>
              <h2 className="en co-homeH2">Spotlight Users</h2>
              <p className="co-homeP">人気ユーザーのプロフィールをチェックする</p>
              <PopularUserSection/>
            </FadeInSection>
          </section>


          {/* From Mapセクション */}
          <section className="homeFromMap">
            <FadeInSection>
              <h2 className="en co-homeH2">From Map</h2>
              <p className="co-homeP">地図から記事を探す</p>
              <Link href="/map">
                <div className="homeFromMapImg">
                  <img src="/home/homeMap.png" alt="マップ画像"/>
                </div>
              </Link>
            </FadeInSection>
          </section>


          {/* View All Articlesセクション */}
          <section className="homeViewAllArticles">
            <FadeInSection>
              <Link href="/post/readAll">
                <div className="homeViewAllBackground">
                  <div className="homeViewAllFront ">
                      <h2 className="en co-homeH2">View All Articles</h2>
                      <p className="co-homeP">投稿された全てのハワイ記事を見る</p>
                      <p className="homeViewAllShow">記事はこちら</p>
                  </div>
                </div>
              </Link>
            </FadeInSection>
          </section>


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
