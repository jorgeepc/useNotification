import React from 'react'
export declare type NotificationStatus =
  | 'default'
  | 'success'
  | 'warning'
  | 'error'
export interface Notification {
  id: string
  createdAt: number
  title?: string
  message: string
  status: NotificationStatus
}
interface Props {
  notification: Notification
  remove(id: string): void
  getRef?: React.LegacyRef<HTMLDivElement>
}
declare function Toast({ notification, remove, getRef }: Props): JSX.Element
export default Toast
