import { useEffect, useState } from "react"
import Loading from "../loading"
import Link from "next/link";
import UserIcon from "../userIcon";

type Users ={
  id: string;
  name: string;
  userIcon: string;
  viewCount: number;
}

const PopularUserSection = () => {

  const [users, setUsers] = useState<Users[] | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=> {
    console.log("useEffectが走りました！")
    const GetProfileViews = async() => {
      try {
        console.log("useEffectで関数が呼び出されました！")
        const viewedRes = await fetch ("/api/views/profileViews")
        const viewedData = await viewedRes.json()
        setUsers(viewedData.mergedProfileData)
        console.log(users);

        if (!viewedData) {
          alert(viewedData.message)
        }
      } catch (error){
        console.error(error)
      }
    }
    GetProfileViews()
    setLoading(false)
  }, [])


  if (loading || !users) {
    return <Loading/>
  }

  return (
    <>
    {users
      .sort((a, b) => b.viewCount - a.viewCount)
      .map(user => (
        <div key={user.id}>
          <Link href={`/readmypage/${user.id}`}>
            <UserIcon width={200} height={200} img={user.userIcon}/>
            <p>{user.name}</p>
            <p>{user.viewCount}</p>
          </Link>
        </div>
      ))}
    </>
  )
}

export default PopularUserSection
