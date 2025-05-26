"use client"
import { useAuthContext } from "@/app/AuthContext"
import { useEffect, useState} from "react"
import PostList from "../components/postList"
import { AllItemTypes } from "@/utils/types/post"
import Loading from "./loading"


const ReadMyPost = ({userId}:{userId:string|null}) => {
  const {loginUserId, loading} = useAuthContext()
  const [myAllItems, setMyAllItems] = useState<AllItemTypes[]>([])
  const [likePostIds, setLikePostIds] = useState<string[]>([])
  const [loadingMyPost, setLoadingMyPost] = useState(false)

  useEffect(()=> {
    const fetchMyPost = async() => {
      if(userId) {
        setLoadingMyPost(true)
        try {
          const myPostRes = await fetch(`/api/mypage/readMyPost/${userId}`)
          const myPostData = await myPostRes.json()
          setMyAllItems(myPostData.myPost)
        }catch(error) {
          console.error("投稿の取得に失敗しました")
        }finally {
          setLoadingMyPost(false)
        }
      }
    }
    fetchMyPost()
  }, [loginUserId])


    //いいね済み投稿のid取得
    useEffect(() => {

      if (loading || !loginUserId) return

      const fetchLikePostId = async() => {
        const id = String(loginUserId)
        const response = await fetch(`/api/like/likePostId/${id}`)
        const jsonData = await response.json()
        const likePostId = jsonData.likePostIds
        setLikePostIds(likePostId)
      }
      fetchLikePostId()
    }, [loginUserId, loading])


    if (!loginUserId) return <p>ログインしていません</p>
    if (loadingMyPost || loading) {
      return <Loading />
    }

    return(
      <PostList allItems={myAllItems} likePostIds={likePostIds}/>
  )
}

export default ReadMyPost
