'use client'

import { notificationAtom } from "@/recoil/notificationAtom"
import { useEffect } from "react"
import {useSetRecoilState} from 'recoil'

export const useFetchNotification = () => {
  const setNotifications = useSetRecoilState(notificationAtom)

useEffect(() => {
  setNotifications([{id: 1, message:'テスト'}])
}, [])

}
