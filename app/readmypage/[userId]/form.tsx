"use client"

import EditDocumentIcon from '@mui/icons-material/EditDocument';
import Link from "next/link"
import { AllItemTypes } from "@/utils/types/post"


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
    <>
      <div>
        <div>
          <img src={myPageInf.userIcon} />
        </div>
        <p>{myPageInf.name}</p>
        <p>{myPageInf.userProfile}</p>
      </div>

      {myPagePost.map((item) => (
        <div key={item.id}>
          <Link href={`/post/readsingle/${item.id}`}>
            {item.image1 && (
              <div>
                <img src={item.image1} />
              </div>
            )}
            <p>{item.title}</p>
          </Link>
        </div>
      ))}
    </>
  )
}

export default ReadMypage
