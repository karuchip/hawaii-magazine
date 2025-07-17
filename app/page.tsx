"use client"
import * as React from "react"
import { Suspense, useEffect, useState} from "react"
import dayjs from "dayjs"
import Link from "next/link"
import useAuth from "@/utils/useAuth"
import Loading from "./components/loading"
import { AllItemTypes } from "@/utils/types/post"
import GoogleMapSearchPost from "./components/map/googleMapSearchPost"

//MUI
import { CardActionArea, CardHeader, Avatar, CardMedia, CardContent, Box, Typography } from "@mui/material"
import {Card, Grid} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PlaceIcon from '@mui/icons-material/Place';
import BottomMenu from "./components/bottomMenu"
import { useAuthContext } from "@/context/AuthContext"


export const dynamic = "force-dynamic"

const ReadAllItemsInner = () => {
  const {loading, loginUserId,} = useAuth(false)
  const {loginUserIcon} = useAuthContext()
  const [listLoading, setListLoading] = useState(true)
  const [likePostIds, setLikePostIds] = useState<string[]>([])

  const [allItems, setAllItems] = useState<AllItemTypes[]>([])

  useEffect(() => {
    const fetchPosts = async() => {
      try {
        const postRes = await fetch(`/api/post/readall`)
        const postData = await postRes.json()
        setAllItems(postData.allItems)
        console.log(allItems)
      }catch(error) {
        console.error(error)
      }finally{
        setListLoading(false)
      }
    }

    fetchPosts()
  }, [])



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


  if (loading || listLoading) {
    return <Loading/>
  }


  return(
    <>
      {/* bottomメニュー */}
      {loginUserId && loginUserIcon && (
        <div className="bottomMenuContainer">
          <BottomMenu loginUserId={loginUserId}/>
        </div>
      )}

      {/* ページ全体 */}
      <div className="mainContainer">

        {!loginUserId && (
          <div className="aboutLinkContainer">
            <Link href="/hawaiiAbout/about" className="aboutLinkContent">
              <img src="about/toAboutPage1.png" />
              <p>このアプリ<br/>について</p>
            </Link>
          </div>
        )}


        {/* 一覧表示 */}
        <div className="allItemsContainer">

          <Grid container spacing={{ mobile: 1, tablet: 1, laptop: 1 }} sx={{justifyContent:"center", alignItems:"flex-start"}}>
            {allItems
              .map(item => {
                const createdAtFormatted = dayjs(new Date(item.createdAt)).format("YYYY/MM/DD")
                const isLiked = likePostIds.includes(String(item.id))

                const card = (
                  <CardActionArea component={Link} href={`/post/readsingle/${item.id}`} >
                    <CardHeader
                      avatar={
                        <Avatar alt={`${item.author && item.author.name}`} src={`${item.author && item.author.userIcon }`}  />
                      }
                      title=
                        <Typography sx={{ fontWeight: 600 }}>
                          {item.title && item.title.length > 20
                            ? `${item.title?.slice(0, 24)}...`
                            : item.title
                          }
                        </Typography>
                      subheader={`by ${item.author.name}`}
                    />

                    {item.image1 && (
                      <CardMedia
                        component="img"
                        height="250"
                        image={item.image1}
                        alt="image"
                      />
                    )}

                    <CardContent>
                      <div className="supInf">
                        <div className="supInfCategoryDay">
                          <p className="categoryIcon">{item.category}</p>
                          <p className="createdDay">{createdAtFormatted}</p>
                        </div>
                        <p className="supInfPlace">
                          <PlaceIcon sx={{fontSize:"14px"}}/>
                          {
                            item.googlePlace && item.googlePlace.length > 20
                            ? `${item.googlePlace.slice(0, 30)}...`
                            : item.googlePlace

                          }
                        </p>
                      </div>

                      <div className="likePosition">
                        <div className={isLiked? "hasLiked" : "hasNotLiked"}>
                          <Typography sx={{ fontFamily: '"Kaushan Script", cursive', fontSize:14}}>
                            {isLiked ? (
                              <FavoriteIcon sx={{width:"16px", height:"16px"}}/>
                            ):(
                              <FavoriteBorderIcon sx={{width:"16px", height:"16px"}}/>
                            )}
                            <span>{item.likeCount}</span>
                          </Typography>
                        </div>
                      </div>
                    </CardContent>
                  </CardActionArea>
                )

            return(

              <Grid container spacing={{mobile: 1, tablet: 2, laptop: 3}}  key={item.id}>
                <Box sx={{width: 300, margin:2, mt:6}}>
                  <Card variant="outlined">{card}</Card>
                </Box>
              </Grid>
              )
            })}
          </Grid>

        </div>
      </div>
    </>
  )
}

export default function ReadAllItems(){
  return (
    <Suspense fallback={<Loading/>}>
      <ReadAllItemsInner/>
    </Suspense>
  );
};
