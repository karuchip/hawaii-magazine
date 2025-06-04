"use client"

import { useState } from "react";
import Loading from "./loading";
import AddIcon from '@mui/icons-material/Add';

type commentType = {
  loginUserId: string,
  postId: number,
  onCommentCreated: () => void
}

const CommentCreate = ({loginUserId, postId, onCommentCreated}:commentType)=>{

  const [comment, setComment] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try{
      const response = await fetch (`/api/comment/createComment/${postId}`, {
        method: "POST",
        headers:{
          "Accept": "application/json",
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          comment: comment,
          postId: postId,
          userId: Number(loginUserId)
        })
      })

      const jsonData = await response.json()
      setComment("")
      onCommentCreated()
      setLoading(false)

      alert(jsonData.message)

    }catch(error) {
      console.error(error)
      alert("コメントを追加できませんでした")
    }
  }
  if (loading) {
    return <Loading/>
  }

  return(

      <div style={{display:"flex", justifyContent:"center"}}>
        <form onSubmit={handleSubmit} className="commentCreateForm">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="＋コメントを追加する"
            />
          <button type="submit"><AddIcon sx={{width:"40px", height:"40px", color:"#fff"}} /></button>
        </form>
      </div>
  )
}

export default CommentCreate
