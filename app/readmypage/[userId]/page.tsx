import Form from "./form"

type Props = {
  params: {
    userId: string
  }
}

type myInfTypes = {
  id: string,
  name: string,
  userIcon: string,
  userProfile: string
}

const getMyData = async(userId:string) => {
  try{
        const myPageRes = await fetch(`http://localhost:3000/api/mypage/readProfile/${userId}`,{
          cache: "no-store"
        })
        const myPageData = await myPageRes.json()
        const myPageInf:myInfTypes = myPageData.myInf
        return myPageInf
      }catch(error) {
        console.error(error)
        return
      }
}

const getMyPost = async(userId: string) => {
  try{
      const myPostRes = await fetch(`http://localhost:3000/api/mypage/readMyPost/${userId}`,{
        cache: "no-store"
      })
      const myPostData = await myPostRes.json()
      const myPagePost = myPostData.myPost
      return myPagePost
    }catch(error) {
      console.error(error)
      return
  }
}

export default async function ReadMyPage ({params}: Props){
  const userId = params.userId
  if(!params.userId) {
    console.error("userIdが未定義です")
    return null
  }
  const myPageInf = await getMyData(userId)
  console.log(myPageInf);
  const myPagePost = await getMyPost(userId)
  console.log(myPagePost);


  return(
    <>
      {/* <Form myPageInf={myPageInf} myPagePost={myPagePost}/> */}
    </>
  )
}

