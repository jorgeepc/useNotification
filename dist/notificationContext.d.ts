import React from 'react'
import { NotificationStatus } from './Notifications'
import { NotificationState } from './Notifications/state'
interface ContextInterface {
  notify(message: string, status?: NotificationStatus): void
}
interface Props {
  children: React.ReactNode
  state: NotificationState
}
declare function NotificationProvider({ children, state }: Props): JSX.Element
declare function useNotification(): ContextInterface
export { NotificationProvider, useNotification }
