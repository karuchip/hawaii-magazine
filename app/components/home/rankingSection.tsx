import { AllItemTypes } from "@/utils/types/post"
import { useEffect, useState } from "react"
import Loading from "../common/loading"
import PostCard from "../format/postCard"
import { useAuthContext } from "@/context/AuthContext"
import FetchLikePostId from "@/utils/fetchLikePostId"


const RankingSection = () => {

  const [posts, setPosts] = useState<AllItemTypes[] | null>(null)
  const [likePostIds, setLikePostIds] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const {loginUserId} = useAuthContext()

  useEffect(()=> {
    const GetPosts = async() => {
      try {
        const viewedRes = await fetch ("/api/views/postViews")
        const viewedData = await viewedRes.json()
        setPosts(viewedData.mergedPostData)

        if (!viewedData) {
          alert(viewedData.message)
        }
      } catch (error){
        console.error(error)
      }
    }
    // setLoading(true)
    GetPosts()
    setLoading(false)
  }, [])

  //いいね済み投稿のid取得
  useEffect(() => {
    if (loading || !loginUserId) return
    FetchLikePostId({loginUserId, setLikePostIds})
  }, [loginUserId, loading])


  if (loading || !posts) {
    return <Loading/>
  }

  return (
    <>
      <PostCard allItems={posts} likePostIds={likePostIds}/>
    </>
  )
}

export default RankingSection
