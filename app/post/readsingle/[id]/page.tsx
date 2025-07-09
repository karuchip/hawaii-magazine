import Form from "./form"
import { AllItemTypes } from "@/utils/types/post"

// 1投稿取得
const getSingleItem = async(id: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/post/readsingle/${id}`)
  const jsonData = await response.json()
  const singleItem = await jsonData.singleItem
  return singleItem
}

//lat,lonを中心地とした、20km以内の投稿取得
const getNearDistancePost = async(lat:number, lon:number) => {
  const nearDistanceRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/post/nearDistance/?lat=${lat}&lon=${lon}`)
  const nearDistanceData = await nearDistanceRes.json()
  const nearPosts = nearDistanceData.nearPosts
  return nearPosts
}

const ReadSingleItem = async({params}:any) => {

  const singleItem:AllItemTypes = await getSingleItem(params.id)
  const postId = Number(singleItem.id)

  const nearPosts = singleItem.lat && singleItem.lon
  ? await getNearDistancePost(singleItem.lat, singleItem.lon)
  : []

  if(!singleItem) {
    return <div>投稿が見つかりませんでした</div>
  }

  return(

    <div className="singlePostContainer">
      <div className="singlePostContent">
        <Form singleItem={singleItem} postId={postId} nearPosts={nearPosts}/>
      </div>
    </div>
  )
}

export default ReadSingleItem
