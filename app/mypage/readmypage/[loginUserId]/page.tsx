"use client"

import { useEffect, useState } from "react"
import { Suspense } from "react"
import { useAuthContext } from "@/context/AuthContext"
import ReadMyPost from "@/app/components/readMyPost"
import EditDocumentIcon from '@mui/icons-material/EditDocument';
import Link from "next/link"
import Loading from "@/app/components/loading"

type myInfProps = {
  id: string,
  name: string,
  userIcon: string,
  userProfile: string
}

const ReadMypage = () => {
  const {loginUserId} = useAuthContext()
  const [userId, setUserId] = useState<string | null>(null)
  const [userName, setUserName] = useState<string | null>(null)
  const [userIcon, setUserIcon] = useState<string | null>(null)
  const [userProfile, setUserProfile] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const fetchMyData = async() => {
      try{
        if(loginUserId) {
          const myPageRes = await fetch(`/api/mypage/readProfile/${loginUserId}`)
          const myPageData = await myPageRes.json()
          const myPageInf:myInfProps = myPageData.myInf

          setUserId(myPageInf.id)
          setUserName(myPageInf.name)
          setUserIcon(myPageInf.userIcon)
          setUserProfile(myPageInf.userProfile)

          setLoading(false)
        }

      }catch(error) {
        console.error(error)
      }
    }

    fetchMyData()
  },[])

  if(loading) {
    return <Loading />
  }

  return(
    <>
      <div className="myPageContainer">
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
      )}
    </>
  )
}

export default ReadMypage
