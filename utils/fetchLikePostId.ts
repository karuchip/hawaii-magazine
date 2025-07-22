// ログイン中ユーザーの、いいね済み投稿Idを取得する

type Props = {
  loginUserId: string;
  setLikePostIds:React.Dispatch<React.SetStateAction<string[]>>
}

const FetchLikePostId = async({loginUserId, setLikePostIds}:Props) => {
      const id = String(loginUserId)
      const response = await fetch(`/api/like/likePostId/${id}`)
      const jsonData = await response.json()
      const likePostId = jsonData.likePostIds
      setLikePostIds(likePostId)
}

export default FetchLikePostId
