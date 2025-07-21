"use client"
import { AllItemTypes } from "@/utils/types/post"
import * as React from "react"
import dayjs from "dayjs"
import Link from "next/link"

//MUI
import { CardActionArea, CardHeader, Avatar, CardMedia, CardContent, Box, Typography } from "@mui/material"
import {Card, Grid} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

type Props = {
  allItems: AllItemTypes[];
  likePostIds: string[];
}

const PostCard = ({allItems, likePostIds}:Props) => {
  return (
    <div className="allItemsContainer">

      <Grid container spacing={{ mobile: 1, tablet: 1, laptop: 1 }} sx={{justifyContent:"center", alignItems:"flex-start"}}>
        {(allItems.some(item => item.viewCount !== undefined)
          ? [...allItems].sort((a, b) => (b.viewCount ?? 0) - (a.viewCount ?? 0))
          : allItems
        ).map((item, index) => {
            const createdAtFormatted = dayjs(new Date(item.createdAt)).format("YYYY/MM/DD")
            const isLiked = likePostIds.includes(String(item.id))

            const ranking = (
              <>
                {item.viewCount !== undefined && index < 3 && (
                    <div>
                      <p>{index + 1}位</p>
                      <p>{item.viewCount} views</p>
                    </div>
                )}
              </>
            )

            const card = (
              <>
                <CardActionArea component={Link} href={`/post/readsingle/${item.id}`} >
                  <CardHeader
                    title=
                      <Typography sx={{ fontWeight: 600, height: "30px", alignContent:"center" }}>
                        {item.title && item.title.length > 20
                          ? `${item.title?.slice(0, 24)}...`
                          : item.title
                        }
                      </Typography>
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
                      {/* <p className="supInfPlace">
                        <PlaceIcon sx={{fontSize:"14px"}}/>
                        {
                          item.googlePlace && item.googlePlace.length > 20
                          ? `${item.googlePlace.slice(0, 30)}...`
                          : item.googlePlace
                        }
                      </p> */}
                    </div>

                    <div className="allItemsBottomInf">
                      <div className="allItemsUserInf">
                        <Avatar alt={`${item.author && item.author.name}`} src={`${item.author && item.author.userIcon }`}  />
                        <p>{item.author.name}</p>
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
                    </div>
                  </CardContent>
                </CardActionArea>
              </>
            )

            return(

              <Grid container spacing={{mobile: 1, tablet: 2, laptop: 3}}  key={item.id}>
                <Box sx={{width: 300}}>
                  {/* ランキング機能の場合のみ */}
                  <>{ranking}</>

                  <Card variant="outlined">{card}</Card>
                </Box>
              </Grid>
            )
        })}
      </Grid>
    </div>
  )
}

export default PostCard
