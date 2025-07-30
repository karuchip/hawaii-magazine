import {atom} from 'jotai'
import { NotificationType } from '../types/notification'

export const notificationAtom = atom<NotificationType[]>([])
