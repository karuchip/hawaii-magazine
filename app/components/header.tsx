"use client"
import Link from "next/link"
import { useAuthContext } from "../../context/AuthContext"
import {Typography, Button} from "@mui/material"
import UserIcon from "./userIcon"
import CustomizedMenus from "./headerMenu"

//動的ファイルにて、データの更新時に直に更新する
export const dynamic = "force-dynamic"

const Header = () => {
  const {loginUserId, loginUserName, loginUserIcon} = useAuthContext()
    return (
      <header>
        <div className="headerContainer">
          <div>
            <Typography variant="h1" sx={{ fontFamily: '"Kaushan Script", cursive', fontSize:50}}>
              <Link href = "/" className="headerLogo">Aloha memories</Link>
            </Typography>
            <p className="logoSub">あの瞬間をもう一度。ハワイで出会ったとっておきの景色を集めよう</p>
          </div>
          <div className="headerRight">
            {!loginUserId ? (
              <nav className="notLoginNav">
                <Link href="/user/register">新規登録</Link>
                <Link href="/user/login">ログイン</Link>
              </nav>
            ):(
              <nav className="loginNav">
                {loginUserIcon && (
                  <div className="userIconWrapper">
                    <UserIcon/>
                    <p>ログイン中</p>
                  </div>
                )}
                {loginUserName && loginUserId &&(
                  <CustomizedMenus loginUserName={loginUserName} loginUserId={loginUserId}></CustomizedMenus>
                )}
              </nav>
            )}
          </div>
        </div>
      </header>
    )
}

export default Header
