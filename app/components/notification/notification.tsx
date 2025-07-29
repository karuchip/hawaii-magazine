import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/context/AuthContext";

type FetchedItemType = {
  id: number;
  type: 'comment' | 'like';
  hasConfirmed: boolean;
  createdAt: Date;
  post : {
    id: number;
    title: string;
    image1: string;
  };
  sender: {
    id: number;
    name: string;
  }
}

const Notification = () => {

  const [notifications, setNotifications] = useState<FetchedItemType[]>([]);
  const router = useRouter();
  const { loginUserId } = useAuthContext();

  // 通知の取得
  useEffect(() => {
    const fetchNotifications = async () => {
      console.log(`Fetching notifications for user ID: ${loginUserId}`);
      try {
        const response = await fetch(`/api/notification/read/${loginUserId}`);
        if (!response.ok) {
          throw new Error('通知の取得に失敗しました');
        }
        const notificationData = await response.json();

        setNotifications(notificationData.notificationResult);

      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    }
    fetchNotifications();
  },[])

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
  if (!loginUserId) {
    return null
  }

  return (
    <div className="notificationContent">
      {notifications.map((notification) => {
        return (
          <div key={notification.id} className="notificationItemContainer">
            <div
              className="notificationItemContent"
              onClick={()=>handleClick(notification.hasConfirmed, notification.id)}
            >
              <div className="notificationItemImg">
                <img src={notification.post.image1}></img>
              </div>
              <div>
                <p>
                  {notification.sender.name}さんが
                  投稿 「{notification.post.title}」に、
                  {notification.type === 'like' ? 'mahalo!!' : 'コメント'}
                  しました
                </p>
                <p>{notification.createdAt.toLocaleString()}</p>
              </div>
            </div>
          </div>
      )})}
    </div>
  );
}

export default Notification;
