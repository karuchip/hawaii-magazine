import Form from "./form"


const getUserInf = async(userId: any) => {
  try{
    console.log(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user/readUser/${userId}`)
    const userInfRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user/readUser/${userId}`)
    const userInfData = await userInfRes.json()
    return userInfData.userInf

  }catch(error){
    console.error(error)
    return null
  }
}

export default async function Setting({params}: any) {

  const userId = params.userId
  const userInf = await getUserInf(userId)

  return(
    <>
      <Form userInf={userInf}/>
    </>
  )
}
