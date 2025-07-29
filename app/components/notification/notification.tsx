"use client"

import { useRouter } from "next/navigation";
import { useAuthContext } from "@/context/AuthContext";
import { useRecoilValue} from "recoil";
import { notificationListState } from "@/recoil/notificationAtom";
import dayjs from "dayjs";


const Notification = () => {

  // const [notifications, setNotifications] = useState<FetchedItemType[]>([]);
  const router = useRouter();
  const { isLoggedIn } = useAuthContext();

  // Atomから通知の取得(/値はheaderにてセット)
  const notifications = useRecoilValue(notificationListState);

  // 通知クリック時の処理 初めて開封する時はDB更新
  const handleClick = async(hasConfirmed:boolean, notificationId: number) => {
    if (hasConfirmed === false) {
      try {
        const updateResponse = await fetch(`/api/notification/update/${notificationId}`)
        if (!updateResponse.ok) {
          console.error('通知の更新に失敗しました');
        } else {
          router.push(`/post/readsingle/${notificationId}`)
        }
      }catch (error) {
        console.error('Error updating notification:', error);
      }
    } else {
      router.push(`/post/readsingle/${notificationId}`)
    }
  }

  if(notifications.length === 0) {
    return <p>通知はありません</p>
  }
  if (!notifications || !isLoggedIn) {
    return null
  }

  return (
    <div>
      {notifications.map((notification) => {
        return (
          <div key={notification.id}>
            {notification.post.image1 && (
              <img src={notification.post.image1}></img>
            )}
            <div
              className="notification-item"
              onClick={()=>handleClick(notification.hasConfirmed, notification.id)}
            >
              <p>
                {notification.sender.name}さんが
                投稿 「{notification.post.title}」に、
                {notification.type === 'like' ? 'mahalo!!' : 'コメント'}
                しました
              </p>
              <p>{dayjs(notification.createdAt).format('YYYY/MM/DD HH:mm')}</p>
            </div>
          </div>
      )})}
    </div>
  );
}

export default Notification;
