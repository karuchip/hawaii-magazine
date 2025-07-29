"use client"

import Link from "next/link"
import { useState, useEffect, Suspense } from "react"
import { useAuthContext } from "../../../context/AuthContext"
import {Typography, Button} from "@mui/material"
import UserIcon from "../common/userIcon"
import CustomizedMenus from "./headerMenuLogin"
import CustomizedMenusNotLogin from "./headerMenuNotLogin"
import Notification from "../notification/notification"

// カスタムフック
import {useFetchNotification} from "@/hooks/useFetchNotification"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { notificationListState, notificationLoadedState } from "@/recoil/notificationAtom"
import Loading from "./loading"

//動的ファイルにて、データの更新時に直に更新する
export const dynamic = "force-dynamic"

const Header = () => {
  const [showHeader, setShowHeader] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const {loginUserId, loginUserName, loginUserIcon, isLoggedIn} = useAuthContext()

  console.log(loginUserId)
  // カスタムフックの呼び出し(通知リスト取得)
  // useFetchNotification()

  try {
    const isLoaded = useRecoilValue(notificationLoadedState)
    console.log('isLoaded:', isLoaded)
  } catch (e) {
    console.error('RecoilRootが有効でないかも:', e)
  }
  // const isLoaded = useRecoilValue(notificationLoadedState)

  // if (!isLoaded) return <p>Loading notifications...</p>;

  // const notifications = useRecoilValue(notificationListState);



  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if(currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false)
      }else {
        setShowHeader(true)
      }

      setLastScrollY(currentScrollY);
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)

  }, [lastScrollY])

    // まだ通知が取得できていなければ表示しない
    // if (!notifications) {
    //   return <Loading/>
    // }


    return (
      <header className={`header ${showHeader ? 'visible' : 'hidden'}`}>
        <div className="headerContainer">
          <div>
            <Typography variant="h1" sx={{ fontFamily: '"Kaushan Script", cursive', fontSize:50}}>
              <Link href = "/" className="headerLogo">Aloha memories</Link>
            </Typography>
            <p className="logoSub">あの瞬間をもう一度。ハワイで出会ったとっておきの景色を集めよう</p>
          </div>
          <div className="headerRight">
            {!loginUserId ? (
              <>
                <nav className="notLoginNav">
                  <Link href="/user/register">新規登録</Link>
                  <Link href="/user/login">ログイン</Link>
                  <CustomizedMenusNotLogin/>
                </nav>
              </>
            ):(
              <div className="loginNav">
                <nav>

                  {/* 通知表示 */}
                  {/* <Suspense fallback={<Loading/>}>
                    <Notification />
                  </Suspense> */}

                  {loginUserIcon && (
                    <div className="userIconWrapper">
                      <UserIcon width={40} height={40} img={loginUserIcon}/>
                      <p>ログイン中</p>
                    </div>
                  )}
                  {loginUserName && loginUserId &&(
                    <CustomizedMenus loginUserName={loginUserName} loginUserId={loginUserId}></CustomizedMenus>
                  )}
              </nav>
            </div>
            )}
          </div>
        </div>
      </header>
    )
}

export default Header
