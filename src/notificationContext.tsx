import React, { useContext } from 'react'
import uuidv4 from 'uuid'
import Notifications, { NotificationStatus } from './Notifications'
import { NotificationState } from './Notifications/state'

interface ContextInterface {
  notify(message: string, status?: NotificationStatus): void
}

interface Props {
  children: React.ReactNode
  state: NotificationState
}

const NotificationContext = React.createContext<ContextInterface | undefined>(
  undefined,
)

function NotificationProvider({ children, state }: Props) {
  const notify = (
    message: string,
    status: NotificationStatus = 'default',
  ): void => {
    state.addNotification({
      id: uuidv4(),
      createdAt: Date.now(),
      message,
      status,
    })
  }

  return (
    <NotificationContext.Provider value={{ notify }}>
      <Notifications state={state} />
      {children}
    </NotificationContext.Provider>
  )
}

function useNotification() {
  const context = useContext(NotificationContext)
  if (context === undefined) {
    throw new Error(
      `useNotification must be used within a NotificationProvider`,
    )
  }
  return context
}

export { NotificationProvider, useNotification }
