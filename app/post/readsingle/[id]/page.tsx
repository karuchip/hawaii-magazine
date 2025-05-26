import Image from "next/image"
import Link from "next/link"
import dayjs from "dayjs"
import { Suspense } from "react"
import LikeCount from "../../../components/likeCount"
import Comment from "../../../components/comment"
import {Paper} from "@mui/material"
import {Typography, Button} from "@mui/material"
import { AllItemTypes } from "@/utils/types/post"
import GoogleMap from "@/app/components/googleMap"


export const dynamic = "force-dynamic"

const getSingleItem = async(id: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/post/readsingle/${id}`)
  const jsonData = await response.json()
  const singleItem = await jsonData.singleItem
  return singleItem
}

const ReadSingleItem = async({params}:any) => {

  const singleItem:AllItemTypes | null = await getSingleItem(params.id)


  if(!singleItem) {
    return <div>投稿が見つかりませんでした</div>
  }

  const createdAtFormatted = dayjs(new Date(singleItem.createdAt)).format("YYYY/MM/DD")
  const updatedAtFormatted = dayjs(new Date(singleItem.updatedAt)).format("YYYY/MM/DD")
  const postId = Number(singleItem.id)

  return(
    <div className="singleItemContainer">
      <div style={{ position: 'relative', width: '100%', height: '600px' }}>
        <Image
          src={singleItem.image1}
          alt="item-image"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      <div style={{width:"80vw", margin:"20px auto"}}>
        <div className="operationButtons">
          <LikeCount likeCount={singleItem.likeCount} id={singleItem.id} />
          <div className="editedDay">
            <p>{createdAtFormatted}</p>
            {/* {(createdAtFormatted !== updatedAtFormatted) &&
                <p>edited : {updatedAtFormatted}</p>
            } */}
          </div>
        </div>
        <div className="postContent">
          <h2>{singleItem.title}</h2>
          {singleItem.author? (
            <p>by {singleItem.author.name}</p>
          ):(
            <p>by 未定</p>
          )}
          <div className="marqueeContainer">
            <div className="marquee">
              <p>{singleItem.description1}</p>
            </div>
          </div>

        </div>
      </div>

      {/* google map表示 */}
      {/* <div  style={{margin: "50px 0"}}>
        <Typography variant="h2"
          sx={{
            fontFamily: '"Kaushan Script", cursive',
            fontSize:"28px",
            color:"#5a8c68",
            display:"flex",
            justifyContent:"center"
          }}>

            Location

        </Typography>
        <div style={{display:"flex", justifyContent:"center"}}>
          <p style={{width:"content-fit"}}>場所: {singleItem.googlePlace}</p>
        </div>
        <Suspense fallback={<div>地図を読み込み中...</div>}>
          <GoogleMap lat={singleItem.lat} lng={singleItem.lon}/>
        </Suspense>
      </div> */}


      {/* コメント表示 */}
      <div style={{margin: "50px 0"}}>
        <Suspense fallback={<div>コメントを読み込み中...</div>}>
          <div style={{display:"flex", justifyContent:"center"}}>
          <Paper elevation={3} sx={{width:"100%", padding:"40px", margin:"0 0 20px 0"}}>
            <Typography variant="h2"
              sx={{
                fontFamily: '"Kaushan Script", cursive',
                fontSize:"28px",
                color:"#5a8c68",
                display:"flex",
                justifyContent:"center",
                marginBottom:"30px"
              }}>
              Comment
            </Typography>
            <Comment postId={singleItem.id}/>
          </Paper>

          </div>
        </Suspense>
      </div>
      <div className="backToList"><Link href={`/`} >一覧に戻る</Link></div>

      <div className="editDeleteButton">
        <div>
          <Link href={`/post/update/${postId}`}>
            <Button variant="contained" sx={{margin:"10px 0 0 10px", backgroundColor:"#f06543"}}>編集</Button>
          </Link>
        </div>
        <div>
          <Link href={`/post/delete/${postId}`}>
            <Button variant="contained" sx={{margin:"10px 0 0 10px", backgroundColor:"#f06543"}}>削除</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ReadSingleItem
