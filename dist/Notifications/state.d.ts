import { Unsubscribe } from './EventEmitter'
import { Notification } from './'
export declare class NotificationState {
  private readonly _eventEmitter
  subscribeToAddNotification(callback: Function): Unsubscribe
  addNotification(notification: Notification): string
}
