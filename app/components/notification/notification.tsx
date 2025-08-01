'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";
import {NotificationType} from "@/utils/types/notification"

// mui
import NotificationsIcon from '@mui/icons-material/Notifications';
import CloseIcon from '@mui/icons-material/Close';

// jotai
import { useAtom } from "jotai";
import {notificationAtom, notificationLoadingAtom} from "@/utils/notification/notificationAtom"
import { FetchNotifications } from "@/utils/notification/fetchNotifications";
import { useAuthContext } from "@/context/AuthContext";

const Notification = () => {

  const router = useRouter();
  const {loginUserId} = useAuthContext()

  // jotai
  const [notifications, setNotifications] = useAtom(notificationAtom)
  const [loading, setLoading] = useAtom(notificationLoadingAtom)

  // 通知メニューの開閉
  const [menuClose, setMenuClose] = useState<boolean>(true);


  // 通知の取得
  useEffect(() => {
    const fetchNotificationsData = async () => {
      if (loginUserId) {
        try {
          // ローディング開始
          setLoading(true)

          const data:NotificationType[] = await FetchNotifications(loginUserId)
          setNotifications(data);
          console.log('Fetched notifications:', data);

        } catch (error) {
          console.error('Error fetching notifications:', error);

        } finally {
          // ローディング終了
          setLoading(false)
        }
      }
    }

    if (!notifications || notifications.length === 0) {
      fetchNotificationsData();
    }
  },[loginUserId])


  // 通知クリック時の処理 初めて開封する時はDB更新
  const handleClick = async(hasConfirmed:boolean, notificationId: number, postId: number) => {
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
          alert('通知の更新に失敗しました');
        } else {
          // 通知状態をローカル(jotai)に反映
          setNotifications((prev) =>
            prev.map((n)=>
              n.id === notificationId ? {...n, hasConfirmed: true} : n
            )
          )

          // レスポンスから遷移先の投稿番号を取得
          const updatedData = await updateResponse.json()
          const updatedResult = await updatedData.result

          // 通知メニューを閉じる
          setMenuClose(true)

          router.push(`/post/readsingle/${updatedResult.postId}`)
        }

      }catch (error) {
        console.error('Error updating notification:', error);
      }
    } else {
      // 通知メニューを閉じる
      setMenuClose(true)
      router.push(`/post/readsingle/${postId}`)
    }
  }

  // 通知メニューの開閉
  const handelOpenNotification = () => {
    if (menuClose === false) {
      setMenuClose(true)
    } else {
      setMenuClose(false)
    }
  }

  if (!loginUserId) {
    return null
  }

  if (loading) {
    return <p>読み込み中...</p>
  }

  return (
    <>

      {/* 通知アイコン */}
      <div className="notificationIcon" onClick = {handelOpenNotification}>
        <NotificationsIcon sx={{fontSize:"30px"}}/>
        {/* 未読通知あり */}

        {notifications.filter(n=> !n.hasConfirmed).length > 0 &&
          <div className="notificationNotSeen"></div>
        }
      </div>

      {/* 通知メニュー */}
      <div
        className="notificationBox"
        style={{
          display: menuClose ? "none": "block"
        }}>
        <div className="notificationTitleContainer">
          <h3>通知</h3>
          <div onClick={handelOpenNotification}>
            <CloseIcon sx={{fontSize:"26px"}}/>
          </div>
        </div>
        <div className="horizontalLineMedium"></div>

        <div className="notificationContent">
          {notifications?.length === 0 ? (
            <div className="noNotification">
              <p>通知はありません</p>
            </div>
          ) : (
            notifications
            .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
            .map((notification) => {
              const createdAtFormatted = dayjs(new Date(notification.createdAt)).format("YYYY/MM/DD")
              return (
                <div key={notification.id} className="notificationItemContainer">

                  <div
                    className="notificationItemContent"
                    onClick={()=>handleClick(notification.hasConfirmed, notification.id, notification.post.id)}
                    >

                    <div className="newNotificationContainer">
                      {!notification.hasConfirmed &&
                        <div className="newNotification">
                        </div>}
                    </div>

                    <div className="notificationItemImg">
                      <img alt="投稿画像" src={notification.post.image1}></img>
                    </div>
                    <div className="notificationItemDescription">
                      <div className="notificationItemDay">
                        <p>{createdAtFormatted}</p>
                      </div>
                      <p  className="notificationItemMessage">
                        {notification.sender.name}さんが
                        投稿 「{notification.post.title}」に、
                        {notification.type === 'like' ? 'mahalo!!' : 'コメント'}
                        しました
                      </p>
                    </div>
                  </div>
                  <div className="horizontalLineLight"></div>
                </div>
            )})
          )}
        </div>
      </div>
    </>
  );
}

export default Notification;
