'use client'
import { Notifications } from '@/utils/types/notofication'
import {atom} from 'recoil'

export const notificationAtom = atom<Notifications[]>({
  key: 'notificationAtom',
  default: []
})
