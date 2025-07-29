"use client"

import { atom } from 'recoil'
import { Notification } from '@/utils/types/notification'

export const notificationListState = atom<Notification[]>({
  key: 'notificationListState',
  default: [],
})

export const notificationLoadedState = atom<boolean>({
  key: "notificationLoadedState",
  default: false
})
