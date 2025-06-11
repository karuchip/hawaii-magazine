"use client"

import { useEffect, useState } from "react"
import { Suspense } from "react"
import { useAuthContext } from "@/context/AuthContext"
import ReadMyPost from "@/app/components/readMyPost"
import EditDocumentIcon from '@mui/icons-material/EditDocument';
import Link from "next/link"
import Loading from "@/app/components/loading"
import { AllItemTypes } from "@/utils/types/post"


type Props = {
  myPageInf: {
    id: string;
    name: string;
    userIcon: string;
    userProfile: string;
  };
  myPagePost: AllItemTypes
}

const ReadMypage = ({myPageInf, myPagePost}:Props) => {


  return(
    <>
      <p>{myPageInf.name}</p>
      <p>{myPageInf.name}</p>
      {/* <div className="myPageContainer">
        <div className="myPageContent">
          <div className="myPageTextContainer">
            <p>{userName}</p>
            <p>{userProfile}</p>
          </div>
          <div className="myPageImgContainer">
            {userIcon && (
              <img
              src={`${userIcon}`}
              alt="アイコン画像"
              />
            )}
          </div>
          <div className="editIconContainer">
            <Link href={`/mypage/editmypage/${loginUserId}`}>
              <span>編集</span><EditDocumentIcon />
            </Link>
          </div>
        </div>
      </div>
      {loginUserId && (
        <Suspense fallback={<div>投稿を読み込み中...</div>}>
          <ReadMyPost userId={loginUserId}/>
        </Suspense>
      )} */}
    </>
  )
}

export default ReadMypage
