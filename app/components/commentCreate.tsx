"use client"

import { useState } from "react";
import { TextField, Button } from "@mui/material";
import Loading from "./loading";

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
        <form onSubmit={handleSubmit}>
            <TextField
              label="コメントを書く"
              variant="standard"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              sx={{width: "60vw"}}
              />
          <Button type="submit" variant="contained" sx={{margin:"10px 0 0 10px", backgroundColor:"#f06543"}}>追加</Button>
        </form>
      </div>
  )
}

export default CommentCreate
