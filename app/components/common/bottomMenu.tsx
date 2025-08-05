"use client"
import Link from "next/link"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';

type Props = {
  loginUserId: string,
}

const BottomMenu = ({loginUserId}:Props) => {
  return(
    <>
      <ul className="bottomMenuContent">

        {/* ホーム画面 */}
        <li>
          <Link href="/">
            <HomeIcon sx={{fontSize:"32px"}}/>
          </Link>
        </li>

        {/* 記事一覧 */}
        <li>
          <Link href="/post/readAll">
            <ViewCarouselIcon sx={{fontSize:"32px"}}/>
          </Link>
        </li>


        {/* 投稿する */}
        <li>
          <Link href="/post/create">
            <AddCircleOutlineIcon sx={{fontSize:"32px"}}/>
          </Link>
        </li>

        {/* マイページ */}
        <li>
          <Link href={`/readmypage/${loginUserId}`}>
            <AccountCircleIcon sx={{fontSize:"32px"}}/>
          </Link>
        </li>

      </ul>
    </>
  )
}

export default BottomMenu
