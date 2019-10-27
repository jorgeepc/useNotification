interface Events {
  [key: string]: Function[]
}
export interface Unsubscribe {
  unsubscribe(): any
}
export declare class EventEmitter {
  private events
  constructor(initialEvents?: Events)
  subscribe(name: string, cb: Function): Unsubscribe
  emit(name: string, ...args: any[]): void
}
export {}
