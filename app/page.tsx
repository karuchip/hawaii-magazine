"use client"
import * as React from "react"
import { Suspense, useEffect, useState} from "react"
import dayjs from "dayjs"
import Link from "next/link"
import useAuth from "@/utils/useAuth"
import Loading from "./components/loading"
import { AllItemTypes } from "@/utils/types/post"
import { useRouter, useSearchParams } from "next/navigation"
import ToolBox from "./components/toolBox"

//MUI
import { CardActionArea, CardHeader, Avatar, CardMedia, CardContent, CardActions, Collapse, Box, TextField, Typography } from "@mui/material"
import {Card, Grid, Pagination} from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import PlaceIcon from '@mui/icons-material/Place';
import BottomMenu from "./components/bottomMenu"
import { useAuthContext } from "@/context/AuthContext"

export const dynamic = "force-dynamic"

const ReadAllItemsInner = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const {loading, loginUserId,} = useAuth(false)
  const {loginUserIcon} = useAuthContext()

  const [listLoading, setListLoading] = useState(true)
  const [likePostIds, setLikePostIds] = useState<string[]>([])

  const [allItems, setAllItems] = useState<AllItemTypes[]>([])
  // 総投稿数
  const [totalCount, setTotalCount] = useState(0)
  // 総ページ数
  const [totalPageCount, setTotalPageCount] = useState(1)
  // 1ページあたりの表示記事数
  const pageSize = 12;
  // 開いているページ番号
  const currentPage = Number(searchParams.get("page") || 1)
  // 検索ワード
  const [keyWord, setKeyWord] = useState("")

  //現在のページ番号をURLから取得
  const page = parseInt(searchParams.get("page") || "1")
  const sort = searchParams.get("sort") || "new"
  const category = searchParams.get("category") || "all"
  const search = searchParams.get("keyWord") || null

  // ソートボタン
  const [sortBtn, setSortBtn] = useState(false)



  useEffect(() => {
    const fetchPosts = async() => {
      try {
        const postRes = await fetch(`/api/post/readPage?page=${page}&sort=${sort}&category=${category}&keyWord=${keyWord}`)
        const postData = await postRes.json()

        setAllItems(postData.posts)
        setTotalCount(postData.totalCount)
        setTotalPageCount(Math.ceil(postData.totalCount / pageSize))
      }catch(error) {
        console.error(error)
      }finally{
        setListLoading(false)
      }
    }

    fetchPosts()
  }, [currentPage, page, sort, category, search])

  //ページ番号変更時
  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("page", value.toString())
    router.push(`?${params.toString()}`)
  }

  //検索時にURLを書き換える
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams(searchParams.toString())
    params.set("keyWord", keyWord)
    params.set("page", "1")
    router.push(`?${params.toString()}`)
  }

  //ソートが選択された時にURLを書き換える
  const handleSortChange = (newSort: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("sort", newSort)
    params.set("page", "1")
    router.push(`?${params.toString()}`)
  }

  //カテゴリーフィルターが選択された時にURLを書き換える
  const handleCategoryChange = (newCategory: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("category", newCategory)
    params.set("page", "1")
    router.push(`?${params.toString()}`)
  }

  //クリアボタン押下時にURLを書き換える
  const handleClearChange = () => {
    setKeyWord("")
    const params = new URLSearchParams(searchParams.toString())
    params.set("keyWord", "")
    params.set("sort", "new")
    params.set("category", "all")
    params.set("page", "1")
    router.push(`?${params.toString()}`)
  }

  //ソートボタン押下時の挙動
  const handleSortBtnChange = () => {
    if(sortBtn === true) {
      setSortBtn(false)
    } else {
      setSortBtn(true)
    }
  }

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

        {/* 検索ツールボックス */}
        <div className="sortBtn">
          <button onClick={handleSortBtnChange}>
            {sortBtn
              ? <><ClearIcon sx={{fontSize:"26px"}}/></>
              : <><SearchIcon sx={{fontSize:"26px", color: "rgba(255, 255, 255, 1)", backgroundColor: "#5a8c68", borderRadius:"5px"}}/>ツール</>}
          </button>
        </div>

        {/* 検索ツールボックスの中身表示 */}
        {sortBtn && (
          <Suspense>
            <ToolBox
              keyWord = {keyWord}
              setKeyWord = {setKeyWord}
              handleClearChange = {handleClearChange}
              handleSearchSubmit = {handleSearchSubmit}
              handleSortChange = {handleSortChange}
              handleCategoryChange = {handleCategoryChange}
              searchParams = {searchParams}
            />
          </Suspense>
        )}

        {/* 一覧表示 */}
        <div className="allItemsContainer">
          <Grid container spacing={{ mobile: 1, tablet: 1, laptop: 1 }} sx={{justifyContent:"center", alignItems:"flex-start"}}>
            { allItems.length === 0 && (
              <div className="noPost">
                <p>該当の投稿がありません</p>
                <button onClick={handleClearChange}>
                  条件をクリア
                </button>
              </div>
            )}
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
                      title={item.title}
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
                        <p className="createdDay">{createdAtFormatted}</p>
                        <p><PlaceIcon sx={{fontSize:"14px"}}/> {item.googlePlace}</p>
                        <p className="categoryIcon">{item.category}</p>
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

        {totalPageCount > 1 && (
          <Box sx={{mt: 4, mb: 4, display: "flex", justifyContent:"center"}}>
            <Pagination
              count={totalPageCount}
              page={currentPage}
              onChange={handlePageChange}
            />
          </Box>
        )}

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
