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
    const GetProfileViews = async() => {
      try {
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
    <div className="popularUserContainer">
    {users
      .sort((a, b) => b.viewCount - a.viewCount)
      .map(user => (
        <div key={user.id} className="popularUserContent">
          <Link href={`/readmypage/${user.id}`}>
            <UserIcon width={200} height={200} img={user.userIcon}/>
            <p className="popularUserName">{user.name}</p>
            <p className="popularUserViews">{user.viewCount} views</p>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default PopularUserSection
