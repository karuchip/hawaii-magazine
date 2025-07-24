"use client"
import * as React from "react"
import { Suspense, useEffect, useState} from "react"
import useAuth from "@/utils/useAuth"
import { AllItemTypes } from "@/utils/types/post"
import { useRouter, useSearchParams } from "next/navigation"
import { useAuthContext } from "@/context/AuthContext"
import Loading from "@/app/components/common/loading"
import ToolBox from "@/app/components/post/toolBox"
import BottomMenu from "@/app/components/common/bottomMenu"

//MUI
import { Box } from "@mui/material"
import {Grid, Pagination} from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import PostCard from "@/app/components/format/postCard"
import FetchLikePostId from "@/utils/fetchLikePostId"
// MUI アコーディオン
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
    FetchLikePostId({loginUserId, setLikePostIds})
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
      <div className="mainContent">

        {/* 検索ツールボックスの中身表示 */}
        <Accordion sx={{ my: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="search-tools-content"
            id="search-tools-header"
            sx={{ position: 'relative' }}
            >
            <Typography
              sx={{
                color:"#596626",
                fontWeight:"700",
                fontSize:"14px",
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                bottom: '30%',
              }}>
              検索・ソート・フィルター
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
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
          </AccordionDetails>
        </Accordion>

        {/* 一覧表示 */}
        <div className="postCardContainer">
          <PostCard allItems={allItems} likePostIds={likePostIds}/>
        </div>

        {(totalPageCount > 1 && (
          <Box sx={{mt: 4, mb: 4, display: "flex", justifyContent:"center"}}>
            <Pagination
              count={totalPageCount}
              page={currentPage}
              onChange={handlePageChange}
            />
          </Box>)
        )}

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
