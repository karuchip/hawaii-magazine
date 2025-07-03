"use client"
import Link from "next/link"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

type Props = {
  loginUserId: string,
}

const BottomMenu = ({loginUserId}:Props) => {
  return(
    <>
      <ul className="bottomMenuContent">

        {/* 記事一覧 */}
        <li>
          <Link href="/">
            <HomeIcon sx={{fontSize:"26px"}}/>
          </Link>
        </li>

        {/* 投稿する */}
        <li>
          <Link href="/post/create">
            <AddCircleOutlineIcon sx={{fontSize:"26px"}}/>
          </Link>
        </li>

        {/* マイページ */}
        <li>
          <Link href={`/readmypage/${loginUserId}`}>
            <AccountCircleIcon sx={{fontSize:"26px"}}/>
          </Link>
        </li>

      </ul>
    </>
  )
}

export default BottomMenu
