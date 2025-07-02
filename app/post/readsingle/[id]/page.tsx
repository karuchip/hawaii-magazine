import Form from "./form"
import { AllItemTypes } from "@/utils/types/post"


const getSingleItem = async(id: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/post/readsingle/${id}`)
  const jsonData = await response.json()
  const singleItem = await jsonData.singleItem
  return singleItem
}

const ReadSingleItem = async({params}:any) => {
  const singleItem:AllItemTypes = await getSingleItem(params.id)
  const postId = Number(singleItem.id)

  if(!singleItem) {
    return <div>投稿が見つかりませんでした</div>
  }

  return(

    <div className="singlePostContainer">
      <div className="singlePostContent">
        <Form singleItem={singleItem} postId={postId}/>
      </div>
    </div>
  )
}

export default ReadSingleItem
