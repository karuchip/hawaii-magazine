"use client"

import {useForm} from "react-hook-form"
import { useState } from "react";
import Loading from "@/app/components/common/loading";
import AddIcon from '@mui/icons-material/Add';
import createNotification from "@/utils/createNotification";

type commentType = {
  loginUserId: string,
  postId: number,
  authorId: number,
  onCommentCreated: () => void
}

type FormInput = {
  comment: string
}

const CommentCreate = ({loginUserId, postId, authorId, onCommentCreated}:commentType)=>{

  const [commentCount, setCommentCount] = useState(0);
  const [loading, setLoading] = useState(false)
  const {register, handleSubmit, setValue, formState:{errors}} = useForm<FormInput>()

  const onSubmit = async(data: FormInput) => {

    setLoading(true)

    try{
      const response = await fetch (`/api/comment/createComment/${postId}`, {
        method: "POST",
        headers:{
          "Accept": "application/json",
          "Content-type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({
          comment: data.comment,
          postId: postId,
          userId: Number(loginUserId)
        })
      })

      const jsonData = await response.json()

      if (!response.ok) {
          throw new Error('コメントの作成に失敗しました');
      }

      //呼び出し元で再度コメントの全件取得
      onCommentCreated()
      setLoading(false)
      setValue("comment", "")

      //　通知の作成
      await createNotification({
        postId: postId,
        senderId: Number(loginUserId),
        receivedId: authorId,
        type: 'comment'
      })

      alert(jsonData.message)


    }catch(error) {
      console.error(error)
      alert("コメントを追加できませんでした")
    }finally {
      setLoading(false)
    }
  }
  if (loading) {
    return <Loading/>
  }

  return(

      <div style={{display:"flex", justifyContent:"center", marginBottom:"20px"}}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="commentCreateForm">
            <textarea
              placeholder="＋コメントを入力する"
              {...register("comment", {
                required: "コメントを入力してください",
                maxLength: {
                  value: 100,
                  message: "コメントは100文字以内で入力してください"
                },
                onChange: (e)=> {setCommentCount(e.target.value.length)}
              })}
            />
          <button type="submit"><AddIcon sx={{width:"40px", height:"40px", color:"#fff"}} /></button>
          </div>
          <div className="commentValidation">
            <p
              style={{
                color : commentCount > 100 ? "red" : "#a1a1a1",
              }}
            >{commentCount}/100</p>
            {errors.comment &&
              <p className="inputErrorMsg">{errors.comment.message}</p>
            }
          </div>

        </form>
      </div>
  )
}

export default CommentCreate
