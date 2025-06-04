import {Grid, Card, CardContent, Typography, CardActionArea, CardHeader, CardMedia} from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Link from "next/link"
import { AllItemTypes } from "@/utils/types/post";

type Props = {
  allItems: AllItemTypes[]
  likePostIds: string[]
}

const PostList = ({allItems, likePostIds}:Props) => {
  return (
    <>
      <Typography variant="h2"
        sx={{
          fontFamily: '"Kaushan Script", cursive',
          fontSize:"96px",
          color:"#00B8D9",
          width:"fit-content",
          margin:"0 auto 50px auto",
          position:"relative",
        }}>
          <span className="shareWordShare">Shared </span>
          {allItems.length}
          <span className="shareWordPosts"> posts</span>
      </Typography>

      <Grid container spacing={{mobile: 1, tablet: 2, laptop: 3}} sx={{justifyContent:"center"}}>

          {allItems.map(item => {

            const isLiked = likePostIds.includes(String(item.id))

            const card = (
              <CardActionArea component={Link} href={`/post/readsingle/${item.id}`}>
                <CardHeader
                  title={item.title}
                  subheader={`by ${item.author && item.author.name }`}
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
                  <p>📍 {item.googlePlace}</p>

                  <div className="likePosition">
                    <div className={isLiked ? "hasLiked" : "hasNotLiked"}>
                      <Typography sx={{ fontFamily: '"Kaushan Script", cursive', fontSize: 14 }}>
                        {isLiked ? (
                          <FavoriteIcon sx={{ width: "16px", height: "16px" }} />
                        ) : (
                          <FavoriteBorderIcon sx={{ width: "16px", height: "16px" }} />
                        )}
                        <span>{item.likeCount}</span>
                      </Typography>
                    </div>
                  </div>
                </CardContent>
              </CardActionArea>
            )

            return (
                <Grid sx={{minWidth: 300, maxwidth: 400, margin:2}} key={item.id}>
                  <Card variant="outlined">{card}</Card>
                </Grid>
            )
          })}
      </Grid>
    </>
  )
}

export default PostList
