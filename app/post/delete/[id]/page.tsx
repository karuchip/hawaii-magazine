import Form from "./form"
import {GetSingleItem} from "@/utils/getSingleItem"


const DeleteItem = async(props: any) => {
  const id = props.params?.id
  const singleItem = await GetSingleItem(id)

  return (
    <div className="singlePostContainer">
        <div className="singlePostContent">
        <div className="postFormWrapper">
          <div className="deleteConfirmMsg">
            <h1>アイテム削除</h1>
            <p className="deleteConfirm">⚠️ 下記の投稿を本当に削除しますか？</p>
            <div className="horizontalLineMedium"><span></span></div>
          </div>
            <Form id={id} singleItem={singleItem}/>
        </div>
      </div>
    </div>
  )
}

export default DeleteItem
