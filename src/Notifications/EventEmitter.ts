interface Events {
  [key: string]: Function[]
}

export interface Unsubscribe {
  unsubscribe(): any
}

export class EventEmitter {
  private events: Events
  public constructor(initialEvents?: Events) {
    this.events = initialEvents || {}
  }

  public subscribe(name: string, cb: Function): Unsubscribe {
    ;(this.events[name] || (this.events[name] = [])).push(cb)

    return {
      unsubscribe: () =>
        this.events[name] &&
        this.events[name].splice(this.events[name].indexOf(cb) >>> 0, 1),
    }
  }

  public emit(name: string, ...args: any[]): void {
    ;(this.events[name] || []).forEach(fn => fn(...args))
  }
}
