import React, { useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { useTransition, animated } from 'react-spring'
import Portal from './Portal'
import Toast from '../components/Toast'
import { NotificationState } from './state'
import { Notification } from './'

function Notifications({ state }: { state: NotificationState }) {
  const [notificationsToShow, setNotificationsToShow] = useState<
    Notification[]
  >([])

  const [refMap] = useState<WeakMap<Notification, HTMLDivElement>>(
    () => new WeakMap<Notification, HTMLDivElement>(),
  )

  const mouseOverRef = useRef(false)

  const transitions = useTransition<
    Notification,
    { opacity: number; height: number }
  >(notificationsToShow, notification => notification.id, {
    from: { opacity: 0, height: 0 },
    // @ts-ignore: not typed properly in react-spring
    enter: item => async next =>
      await next({
        opacity: 1,
        // @ts-ignore: not typed properly in react-spring
        height: refMap.get(item) ? refMap.get(item).offsetHeight + 10 : 0,
      }),
    leave: { opacity: 0, height: 0 },
  })

  const removeNotification = useCallback((id: string) => {
    setNotificationsToShow(notifications => {
      const filteredNotifications = notifications.filter(
        notification => notification.id !== id,
      )

      if (filteredNotifications.length !== notifications.length) {
        return filteredNotifications
      }

      return notifications
    })
  }, [])

  useEffect(() => {
    const subscription = state.subscribeToAddNotification(
      (event: Notification) => {
        setNotificationsToShow(notifications => [...notifications, event])
      },
    )

    return () => {
      subscription.unsubscribe()
    }
  }, [state])

  useEffect(() => {
    const interval = setInterval(() => {
      if (mouseOverRef.current) {
        return
      }

      setNotificationsToShow(notifications => {
        const filteredNotifications = notifications.filter(
          notification => Date.now() < notification.createdAt + 10000,
        )

        if (filteredNotifications.length !== notifications.length) {
          return filteredNotifications
        }

        return notifications
      })
    }, 100)

    return () => {
      clearInterval(interval)
    }
  }, [])

  function handleMouseEnter(): void {
    mouseOverRef.current = true
  }

  function handleMouseLeave(): void {
    mouseOverRef.current = false
  }

  return (
    <Portal>
      <Container
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {transitions.map(
          ({
            item,
            key,
            props,
          }: {
            item: Notification
            key: string
            props: object
          }) => (
            <animated.div key={key} style={props}>
              <Toast
                getRef={ref => ref && refMap.set(item, ref)}
                notification={item}
                remove={removeNotification}
              />
            </animated.div>
          ),
        )}
      </Container>
    </Portal>
  )
}

const Container = styled.div`
  position: fixed;
  bottom: 10px;
  right: 20px;
  max-width: 420px;
  z-index: 2000;
  box-sizing: border-box;
`

export default Notifications
