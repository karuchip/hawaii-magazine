// components/NotificationFetcher.tsx
"use client"
import { useFetchNotification } from '@/hooks/useFetchNotification'

const NotificationFetcher = () => {
  useFetchNotification()
  return null // UIには何も表示しない
}
export default NotificationFetcher
