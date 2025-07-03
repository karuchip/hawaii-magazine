"use client"
import {useState, useEffect} from "react"
import { useAuthContext } from "../../context/AuthContext"
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography'
import Loading from "./loading";
import {useRouter} from "next/navigation";

type likeCountProps = {
  likeCount: number
  id: number
}

export const dynamic = "force-dynamic"


const LikeCount = ({likeCount, id}:likeCountProps) => {
  const {loginUserId, loading} = useAuthContext()
  const [count, setCount] = useState<number>(likeCount)
  const [hasLiked, setHasLiked] = useState<boolean>(false)
  const [notLikeYet, setNotLikeYet] = useState(false)
  const router = useRouter()

  useEffect (() => {
    setCount(likeCount);
  }, [likeCount]);


  // 表示時
  useEffect (() => {
    //ログイン情報未取得時はreturn
    if (loading || !loginUserId) return

    const likedCheck = async() => {
      try {
        const response = await fetch(`/api/like/likedCheck/${id}/${loginUserId}`)
        const jsonData = await response.json()

        if(jsonData.hasLiked) {
          setHasLiked(true)
        }
      }catch(error) {
        console.error(error)
      }
    }
    likedCheck()
  }, [loginUserId, id, loading])


  //likeボタン押下時
  const handleSubmit = async() => {
    setNotLikeYet(true)

    if(!loginUserId) {
      alert("ログインしてください")
      return
    }

    //UI上のlike数を+1
    setCount(prev => prev + 1)

    //API「addLikeUser」の呼び出し
    try {
      const addLikeRes = await fetch(`/api/like/addLikedUser/${id}/${loginUserId}`, {
        method: "POST",
        headers:{
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      })
      const addLikeData = await addLikeRes.json()

      //API「likeCountUpdate」の呼び出し
      if(addLikeData){
        setHasLiked(true)
        const countUpdateRes = await fetch(`/api/like/likeCountUpdate/${id}`, {
          method:"POST",
          headers:{
            "Accept": "application/json",
            "Content-Type": "application/json"
          }
        })
        const countUpdateData = await countUpdateRes.json()

        if (countUpdateData.updatedLikeCount !== undefined) {
          setCount(countUpdateData.updatedLikeCount)
          //ローディング表示解除
          setNotLikeYet(false)
          alert(countUpdateData.message)
        }
      } else {
        alert(addLikeData.message)
      }
    }catch(error) {
      console.error("Error:", error)
      alert("いいね失敗")
    }
  }

  if(notLikeYet) {
    return <Loading />
  }

  return(
    <div>
      {hasLiked===false ? (
          <button onClick={handleSubmit} className="mahalo mahaloBtn">
            <Typography sx={{ fontFamily: '"Kaushan Script", cursive', fontSize:16}}>
              <FavoriteBorderIcon sx={{width:"20px", height:"20px"}}/><span> </span>
              {count}<span> </span>mahalo!
            </Typography>
          </button>
        ):(
        <button onClick={handleSubmit} disabled className="mahalo mahaloDisBtn">
            <Typography sx={{ fontFamily: '"Kaushan Script", cursive', fontSize:16}}>
            <FavoriteIcon sx={{width:"20px", height:"20px"}}/><span>  </span>
            {count}<span> </span>mahalo!
            </Typography>
        </button>
      )}
    </div>
  )
}

export default LikeCount
