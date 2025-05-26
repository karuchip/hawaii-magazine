"use client"
import dayjs from "dayjs"
import {useState, useEffect} from "react"
import { useAuthContext } from "../AuthContext";
import CommentCreate from "../components/commentCreate"
import Loading from "./loading";


type AllCommentType = {
  comment: string,
  user:{
    name: string
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
    <div>
      <div>
        {allComments?.map(comment => (
          <div key={comment.createdAt.toString()}>
            <p>{dayjs(new Date(comment.createdAt)).format("YYYY/MM/DD HH:mm")}    <span style={{color:"#5a8c68"}}>by {comment.user.name}</span></p>
            <p style={{fontSize:"18px", paddingBottom:"15px"}}>{comment.comment}</p>
          </div>
        ))}
      </div>
      <div>
        {loginUserId && (
          <CommentCreate
            loginUserId={loginUserId}
            postId={postId}
            onCommentCreated = {handleCommentCreated}
          />
        )}
      </div>
    </div>
  )
}

export default Comment
