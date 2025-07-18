import Form from "./form"

 const getMyData = async(userId:string) => {
  try{
        const myPageRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/mypage/readProfile/${userId}`,{
          cache: "no-store"
        })
        const myPageData = await myPageRes.json()
        const myPageInf = myPageData.myInf
        return myPageInf
      }catch(error) {
        console.error(error)
        return
      }
}

const getMyPost = async(userId: string) => {
  try{
      const myPostRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/mypage/readMyPost/${userId}`,{
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

export default async function ReadMyPage ({params}: any){
  const userId = params.userId
  if(!params.userId) {
    console.error("userIdが未定義です")
    return null
  }
  const myPageInf = await getMyData(userId)
  const myPagePost = await getMyPost(userId)


  return(
    <>
      <Form myPageInf={myPageInf} myPagePost={myPagePost}/>
    </>
  )
}

