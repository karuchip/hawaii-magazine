import Form from "./form"
import {GetSingleItem} from "@/utils/getSingleItem"


const DeleteItem = async(props: any) => {
  const id = props.params?.id
  const singleItem = await GetSingleItem(id)

  return (
    <div className="postFormWrapper">
      <div className="deleteConfirmMsg">
        <h1>アイテム削除</h1>
        <p className="deleteConfirm">⚠️ 下記の投稿を本当に削除しますか？</p>
      </div>
        <Form id={id} singleItem={singleItem}/>
    </div>
  )
}

export default DeleteItem
