import Form from "./form"

type Props ={
  params: {
    userId: string,
  }
}


const getUserInf = async(userId: string) => {
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

export default async function Setting({params}: Props) {

  const userId = params.userId
  const userInf = await getUserInf(userId)

  return(
    <>
      <Form userInf={userInf}/>
    </>
  )
}
