"use client"
import dayjs from "dayjs"
import {useState, useEffect} from "react"
import { useAuthContext } from "../../context/AuthContext";
import CommentCreate from "./commentCreate"
import Loading from "./loading";
import Link from "next/link";
import { Avatar, Zoom } from "@mui/material"


type AllCommentType = {
  comment: string,
  user:{
    id: string,
    name: string,
    userIcon: string,
  },
  createdAt: Date
}

export const dynamic = "force-dynamic"

const Comment = ({postId}:{postId:number}) => {
  const {loginUserId, loading: authLoading} = useAuthContext()
  const [allComments, setAllComments] = useState<AllCommentType[]>([])
  const [commentLoading, setCommentLoading] = useState<boolean>(true)

  const getAllComments = async()=>{
    try {
      const response = await fetch(`/api/comment/readAllComments/${postId}`)
      const jsonData = await response.json()

      if (jsonData.readAllComments) {
        await setAllComments(jsonData.readAllComments)

      } else {
        setAllComments([])
      }
    }catch(error) {
      console.error("コメントを取得できませんでした。", error)
    }finally {
      setCommentLoading(false)
    }
  }

  useEffect(()=> {
    getAllComments()
  }, [])

  //コメント作成完了後、loadingはtrue＋再度コメント全件取得
  const handleCommentCreated = () => {
    setCommentLoading(true)
    getAllComments()
  }

  if (authLoading || commentLoading) {
    return <Loading/>
  }

  return (
    <>
      <>
        {loginUserId && (
          <CommentCreate
            loginUserId={loginUserId}
            postId={postId}
            onCommentCreated = {handleCommentCreated}
          />
        )}
      </>

      <>
        {allComments?.map(comment => (
          <div key={comment.createdAt.toString()}>
            <div className="commentContent">
              <Link href={`/readmypage/${comment.user.id}`}>
                <Avatar src={comment.user.userIcon} alt={comment.user.name} className="userIcon"/>
              </Link>
              <p className="lineBreak">{comment.comment}</p>
            </div>
            <div className="horizontalLineLight"><span></span></div>
          </div>
        ))}

        {allComments.length === 0 && (
          <div className="noCommentYet">
            <p>コメントがありません</p>
            <div className="horizontalLineMedium"><span></span></div>
          </div>
        )}
      </>
    </>
  )
}

export default Comment
