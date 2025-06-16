import Form from "./form"

type Props = {
  params: {
    userId:string
  }
}
type myInfProps = {
  id: string
  name: string
  email: string
  userIcon: string
  userProfile?: string
}

const fetchProfile = async(userId: string) => {
  try {
    const readRes = await fetch(`http://localhost:3000/api/mypage/readProfile/${userId}`)
    const readData = await readRes.json()
    const myInf:myInfProps = readData.myInf
    return myInf
  }catch(error) {
    console.error(error)
    return null
  }
}

export default async function readProfile({params}:Props) {
  const userId = params.userId
  const myPageInf = await fetchProfile(userId)

    return (
      <>
        <Form myInf={myPageInf} />
      </>
    )
}

