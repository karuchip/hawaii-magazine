import { NotificationType } from "@/app/generated/postgres"
const createNotification = async (data: {
  postId: number
  senderId: number
  receivedId: number
  type: NotificationType
}) => {
  const response = await fetch('/api/notification/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  if (!response.ok) {
    throw new Error('通知の作成に失敗しました')
  }

  return response.json()
}

export default createNotification
