"use client"
import * as React from "react"
import { useEffect, useState} from "react"
import dayjs from "dayjs"
import Link from "next/link"
import useAuth from "@/utils/useAuth"
import CategoryButtons from "./components/categoryButton"
import SortPost from "./components/sortPost"
import Loading from "./components/loading"
//MUI
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid'
import { CardActionArea, CardHeader, Avatar, CardMedia, CardContent, CardActions, Collapse, Box, TextField, Typography } from "@mui/material"
import ExpandMore from "./components/expandMore"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import { AllItemTypes } from "@/utils/types/post"


export const dynamic = "force-dynamic"

const ReadAllItems = () => {
  const {loading, loginUserId} = useAuth(false)
  const [allItems, setAllItems] = useState<AllItemTypes[]>([])

  const [selectCategory, setSelectCategory] = useState<string|null> (null)
  const [searchWord, setSearchWord] = useState("")
  const [sortType, setSortType] = useState("new")
  const [expanded, setExpanded] = useState(false);
  const [listLoading, setListLoading] = useState(true)

  const [likePostIds, setLikePostIds] = useState<string[]>([])

  //投稿一覧取得
  useEffect(() => {
    const fetchData = async()=>{
      try {
        const response = await fetch('/api/post/readall')
        const jsonData = await response.json()
        setAllItems(jsonData.allItems)

      }catch(error) {
        console.error(error)
      } finally {
        setListLoading(false)
      }
    }
    fetchData()
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


  //検索タブの開閉
  const handleExpandClick = () => {
    setExpanded((prev) => !prev);
  }


  if (loading || listLoading) {
    return <Loading/>
  }

  return(
    <div className="mainContainer">
      <Card sx={{ mb: 5}} className="searchCard">
        <Box className="searchCard">
          <CardActions sx={{display: "flex", justifyContent: "center"}}>

            <label style={{display:"flex"}}>
              <Typography  sx={{ fontSize: "16px", mr: 1, color: "#fff", fontWeight:"700" }}>
                <SearchIcon
                  sx={{m:0, pt:0, color:"#fff",  width:"40px", height:"40px"}} />
                <span className="searchIcon"> 検索・ソート</span>
              </Typography>

              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                >
                  <ExpandMoreIcon sx={{m:0, p:0, color:"#fff"}} />
              </ExpandMore>
            </label>
          </CardActions>
        </Box>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <Grid
            container
            spacing={0}
            justifyContent="center"
            sx={{
              border:"2px solid #66c7d9",
              minWidth: " 200px",
              maxWidth: "1000px",
              margin: "5px 5px 5px 5px",
              padding: "5px",
              justifyContent: "center"
            }}>

              {/* 検索 */}
              <Box sx={{ width: "100%", textAlign: "center", mt: 2 }}>
                <TextField
                  label="検索"
                  variant="standard"
                  onChange={(e) => setSearchWord(e.target.value)}
                  sx={{width: "300px", height:"40px", margin:"20px 0"}}
                  />
              </Box>


              {/* 並び替え */}
              <Box sx={{ width: "100%", textAlign: "center", mt: 2 }}>
                <Typography variant="body1">並び替え</Typography>
                <SortPost sortType={sortType} setSortType={setSortType} />
              </Box>

              {/* カテゴリー */}
              <Box sx={{ width: "100%", textAlign: "center", mt: 2 }}>
                <Typography variant="body1">カテゴリーフィルター</Typography>
                <CategoryButtons selectCategory={selectCategory} setSelectCategory={setSelectCategory}/>
              </Box>

            </Grid>
          </CardContent>
        </Collapse>

      </Card>



      {/* 一覧表示 */}
      <div>
        <Grid container spacing={{ mobile: 1, tablet: 1, laptop: 1 }} sx={{justifyContent:"center", alignItems:"flex-start"}}>
          {allItems
            .filter(item =>
              (!selectCategory || item.category === selectCategory) &&
              (!searchWord || item.title?.toLowerCase().includes(searchWord.toLowerCase()) || item.description1?.toLowerCase().includes(searchWord.toLowerCase()))
            )
            .sort((a, b) => {
              if (sortType === "new") {
                return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
              } else if (sortType === "old") {
                return new Date(a.createdAt).getTime() -  new Date(b.createdAt).getTime()
              } else if (sortType === "likes") {
                return b.likeCount - a.likeCount
              } else {
                return 0;
              }
            })
            .map(item => {
              const createdAtFormatted = dayjs(new Date(item.createdAt)).format("YYYY/MM/DD")
              const updatedAtFormatted = dayjs(new Date(item.updatedAt)).format("YYYY/MM/DD")

              const isLiked = likePostIds.includes(String(item.id))

              const card = (
                <CardActionArea component={Link} href={`/post/readsingle/${item.id}`}>
                  <CardHeader
                    // avatar={
                    //   <Avatar alt={`${item.author && item.author.name}`} src={`${item.author && item.author.userIcon }`}  />
                    // }
                    title={item.title}
                    subheader={`by ${item.author && item.author.name }`}
                  />

                  <CardMedia
                    component="img"
                    height="250"
                    image={item.image1}
                    alt="image"
                  />

                  <CardContent>
                    <p>📍 {item.googlePlace}</p>
                    <p className="createdDay">{createdAtFormatted}</p>

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
                  <Box sx={{minWidth: 300, maxwidth: 400, margin:2}}>
                    <Card variant="outlined">{card}</Card>
                  </Box>
                </Grid>
                )
          })}
        </Grid>
      </div>
    </div>
  )

}

export default ReadAllItems
