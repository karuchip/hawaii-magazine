import {atom} from 'jotai'
import { NotificationType } from '../types/notification'

// 通知リスト
export const notificationAtom = atom<NotificationType[]>([])

// ローディング状態(true: 読み込み中)
export const notificationLoadingAtom = atom<boolean>(false)

