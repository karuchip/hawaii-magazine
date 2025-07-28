"use client"
import dayjs from "dayjs"
import {useState, useEffect} from "react"
import { useAuthContext } from "../../../context/AuthContext";
import CommentCreate from "./commentCreate"
import Loading from "../common/loading";
import Link from "next/link";
import { Avatar, Zoom } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';


type AllCommentType = {
  commentId: string,
  comment: string,
  user:{
    id: string,
    name: string,
    userIcon: string,
  },
  createdAt: Date
}

export const dynamic = "force-dynamic"

const Comment = ({postId, authorId}:{postId:number, authorId:number}) => {
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


  // コメント削除
  const deleteComment = async (commentId: string) => {
    const isConfirmed = window.confirm("コメントを削除してもよろしいですか?")
    if(!isConfirmed) return

    setCommentLoading(true)

    try {
      const deleteRes = await fetch(`/api/comment/deleteComment/${commentId}`, {
        method: "DELETE",
        headers:{
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({
          loginUserId: loginUserId
        })
      })

      if(!deleteRes.ok) {
        const error = await deleteRes.json();
        alert(error.message)
        return
      }

      const deleteData = await deleteRes.json()
      alert(deleteData.message)

      handleCommentCreated()

    }catch(error) {
      console.error(error)
    }finally {
      setCommentLoading(false)
    }
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
            authorId={authorId}
            onCommentCreated = {handleCommentCreated}
          />
        )}
      </>

      <>
        {allComments?.map((comment:AllCommentType) => {
          const createdAtFormatted = dayjs(comment.createdAt).format("YYYY/MM/DD")

          return (
            <div key={comment.commentId}>

              <div className="commentContent">

                <Link href={`/readmypage/${comment.user.id}`} className="commentUserLink">
                  <Avatar src={comment.user.userIcon} alt={comment.user.name} className="userIcon"/>
                  <p>{comment.user.name}</p>
                </Link>

                <div className="commentDescription">
                  <p className="commentCreatedAt">{createdAtFormatted}</p>
                  <p>{comment.comment}</p>
                </div>

                {(comment.user.id === loginUserId) && (
                  <div className="commentDeleteBtn">
                    <button onClick={() => deleteComment(comment.commentId)}><DeleteIcon/></button>
                  </div>
                )}

              </div>

              <div className="horizontalLineLight"><span></span></div>
            </div>
          )
        }
      )}

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
