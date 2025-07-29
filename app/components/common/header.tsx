"use client"
"use client"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useAuthContext } from "../../../context/AuthContext"
import {Typography} from "@mui/material"
import UserIcon from "../common/userIcon"
import CustomizedMenus from "./headerMenuLogin"
import CustomizedMenusNotLogin from "./headerMenuNotLogin"
import Notification from "../notification/notification"

import { useRecoilValue } from 'recoil'
import { notificationAtom } from "@/recoil/notificationAtom"

//動的ファイルにて、データの更新時に直に更新する
export const dynamic = "force-dynamic"

const Header = () => {
  const {loginUserId, loginUserName, loginUserIcon} = useAuthContext()
  const [showHeader, setShowHeader] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const notifications = useRecoilValue(notificationAtom)

  useEffect(() => {
    const handelScroll = () => {
      const currentScrollY = window.scrollY

      if(currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false)
      }else {
        setShowHeader(true)
      }

      setLastScrollY(currentScrollY);
    }

    window.addEventListener('scroll', handelScroll)
    return () => window.removeEventListener('scroll', handelScroll)

  }, [lastScrollY])

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
                  {/* 通知 */}
                  <Notification />
                  {/* <div>通知数: {notifications.length}</div> */}

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
