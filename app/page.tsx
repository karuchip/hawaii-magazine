"use client"
import * as React from "react"
import { Suspense, useState} from "react"
import Link from "next/link"
import useAuth from "@/utils/useAuth"
import Loading from "./components/loading"

//MUI
import BottomMenu from "./components/bottomMenu"
import { useAuthContext } from "@/context/AuthContext"
import RankingSection from "./components/home/rankingSection"
import PopularUserSection from "./components/home/popularUser"


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

      {/* ページ全体 */}
      <div className="mainContainer">

        {!loginUserId && (
          <div className="aboutLinkContainer">
            <Link href="/hawaiiAbout/about" className="aboutLinkContent">
              <img src="about/toAboutPage1.png" />
              <p>このアプリ<br/>について</p>
            </Link>
          </div>
        )}

        {/* ランキングセクション */}
        <div>
          <h2>Ranking</h2>
          <p>今週最も閲覧された記事をチェックする</p>
          <RankingSection/>
          <Link href="/post/readAll">全ての記事を見る</Link>
        </div>

        {/* マップリンクセクション */}
        <div>
          <h2>From Map</h2>
          <p>地図から記事を探す</p>
          <Link href="/map">
            <img alt="マップ画像"/>
          </Link>
        </div>

        {/* 人気ユーザーセクション */}
        <div>
          <h2>From User</h2>
          <p>人気ユーザーの記事をチェック</p>
          <PopularUserSection/>
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
