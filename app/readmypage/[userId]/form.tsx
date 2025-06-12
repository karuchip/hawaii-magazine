"use client"

import EditDocumentIcon from '@mui/icons-material/EditDocument';
import Link from "next/link"
import { AllItemTypes } from "@/utils/types/post"
import { Typography } from '@mui/material';


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

  return(
    <div className='myPageContainer'>
      <div className='myPageContent'>
        <div className='profileContent'>
          <Typography variant="h1" sx={{ fontFamily: '"Kaushan Script", cursive', fontSize:32, color:"#626161", mb:2}}>
            Profile
          </Typography>
          <div className="horizontalLineLight"><span></span></div>

          <div className='profile'>
            <div className='profileIconBorder'>
              <div className='profileIconContainer'>
                <img src={myPageInf.userIcon} />
              </div>
            </div>
            <p className='profileName'>{myPageInf.name}</p>
            <p className='profileComment'>{myPageInf.userProfile}</p>
          </div>
        </div>

        <div>
          <Typography variant="h1" sx={{ fontFamily: '"Kaushan Script", cursive', fontSize:32, color:"#626161", mb:2}}>
            myArticles
          </Typography>
          <div className="horizontalLineLight"><span></span></div>
          <div className='myPostContainer'>
            {myPagePost.map((item) => (
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
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReadMypage
