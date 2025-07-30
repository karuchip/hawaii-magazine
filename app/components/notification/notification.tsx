'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";
import {NotificationType} from "@/utils/types/notification"

// jotai
import { useAtom } from "jotai";
import {notificationAtom} from "@/utils/notification/notificationAtom"
import { FetchNotifications } from "@/utils/notification/fetchNotifications";


const Notification = ({loginUserId}: {loginUserId:string}) => {

  // const [notifications, setNotifications] = useState<FetchedItemType[]>([]);
  const [notifications, setNotifications] = useAtom(notificationAtom)
  const router = useRouter();

  // 通知の取得 (とりあえずポーリングで定期的にfetch)
  useEffect(() => {
    const fetchNotificationsData = async () => {
      try {
          const data:NotificationType[] = await FetchNotifications(loginUserId)
          setNotifications(data);
          console.log('Fetched notifications:', data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    }

    if (notifications.length === 0) {
      fetchNotificationsData();
    }
  },[notifications])

  // 通知クリック時の処理 初めて開封する時はDB更新
  const handleClick = async(hasConfirmed:boolean, notificationId: number) => {
    if (hasConfirmed === false) {
      try {
        const updateResponse = await fetch(`/api/notification/update/${notificationId}`, {
          method: "PUT",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
          },
        })
        if (!updateResponse.ok) {
          console.error('通知の更新に失敗しました');
        } else {
          // 通知状態をローカル(jotai)に反映
          setNotifications((prev) =>
            prev.map((n)=>
              n.id === notificationId ? {...n, hasConfirmed: true} : n
            )
          )
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
      {notifications
      .slice()
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .map((notification) => {
        const createdAtFormatted = dayjs(new Date(notification.createdAt)).format("YYYY/MM/DD")
        return (
          <div key={notification.id} className="notificationItemContainer">
            <div
              className="notificationItemContent"
              onClick={()=>handleClick(notification.hasConfirmed, notification.id)}
            >
              {!notification.hasConfirmed && <div className="newNotification"></div>}
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
                <p>{createdAtFormatted}</p>
              </div>
            </div>
          </div>
      )})}
    </div>
  );
}

export default Notification;
