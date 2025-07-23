import { useEffect, useState } from "react"
import Loading from "../common/loading"
import Link from "next/link";
import UserIcon from "../common/userIcon";

type Users ={
  id: string;
  name: string;
  userIcon: string;
  viewCount: number;
}

const PopularUserSection = () => {

  const [users, setUsers] = useState<Users[] | null>(null)
  const [loading, setLoading] = useState(true)
  // 画面サイズ判定
  const [iconSize, setIconSize] = useState(190)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width < 640) setIconSize(90)
      else if (width < 768) setIconSize(120)
      else setIconSize(190)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

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
            <div className="popularUserViews">
              <p>{user.viewCount} views</p>
            </div>
            <UserIcon width={iconSize} height={iconSize} img={user.userIcon} />
            <p className="popularUserName">{user.name}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default PopularUserSection
