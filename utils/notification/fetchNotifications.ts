import { NotificationType } from "../types/notification"

export const FetchNotifications = async(loginUserId:string) => {
  const res = await fetch(`/api/notification/read/${loginUserId}`)

  if (!res.ok) throw new Error('通知の取得に失敗しました')

  const data = await res.json()
  const fetchedData = data.notificationResult

    return fetchedData
}
