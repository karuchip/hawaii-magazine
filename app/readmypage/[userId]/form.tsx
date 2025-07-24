"use client"

import EditDocumentIcon from '@mui/icons-material/EditDocument';
import Link from "next/link"
import { AllItemTypes } from "@/utils/types/post"
import { Typography } from '@mui/material';
import { useAuthContext } from '@/context/AuthContext';
import BottomMenu from "@/app/components/common/bottomMenu"

type Props = {
  myPageInf: {
    id: string;
    name: string;
    userIcon: string;
    userProfile: string;
  };
  myPagePost: AllItemTypes[]
}

const ReadMypage = ({myPageInf, myPagePost}:Props) => {

  const {loginUserId, loginUserIcon} = useAuthContext();

  return(
    <>

      {/* bottomメニュー */}
      {loginUserId && loginUserIcon && (
        <div className="bottomMenuContainer">
          <BottomMenu loginUserId={loginUserId}/>
        </div>
      )}

      <div className='myPageContainer'>
        <div className='myPageContent'>
          <div className='profileContent'>
            <Typography variant="h2" sx={{ fontFamily: '"Kaushan Script", cursive', fontSize:32, color:"#626161", mb:2}}>
              Profile
            </Typography>
            <div className="horizontalLineLight"><span></span></div>

            <div className='profile'>
              <div className='toEditBtnContent'>
                {loginUserId && myPageInf.id === loginUserId ?(
                  <Link href={`/editmypage/${myPageInf.id}`}>
                    <div className='toEditProfile'><EditDocumentIcon /><span>編集する</span></div>
                  </Link>
                ):(
                  <div style={{height:"40px"}}></div>
                )}
              </div>

              <div className='profileIconBorder'>
                <div className='profileIconContainer'>
                  <img src={myPageInf.userIcon} />
                </div>
              </div>
              <p className='profileName'>{myPageInf.name}</p>
              <p className='profileComment lineBreak'>{myPageInf.userProfile}</p>
            </div>
          </div>

          <div className="horizontalLineLight"><span></span></div>
        </div>



          <div className='myPostContainer'>
            {myPagePost.length > 0
              ? (
                myPagePost.map((item) => (
                  <div key={item.id} className='myPostContent'>
                    <Link href={`/post/readsingle/${item.id}`}>
                      {item.image1 && (
                        <div className='myPagePostImg'>
                          <img src={item.image1} />
                        </div>
                      )}
                      <p>{item.title}</p>
                    </Link>
                  </div>
                )
              ))
            :(
              <div className='noMyPost'>
                <p>投稿がありません</p>
                <Link href="/post/create">+ 投稿する</Link>
              </div>
            )
          }
          </div>

      </div>
    </>
  )
}

export default ReadMypage
