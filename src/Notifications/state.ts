import { EventEmitter, Unsubscribe } from './EventEmitter'
import { Notification } from './'

export class NotificationState {
  private readonly _eventEmitter = new EventEmitter()

  public subscribeToAddNotification(callback: Function): Unsubscribe {
    return this._eventEmitter.subscribe('addNotification', callback)
  }

  public addNotification(notification: Notification): string {
    const id = notification.id
    this._eventEmitter.emit('addNotification', notification)
    return id
  }
}
