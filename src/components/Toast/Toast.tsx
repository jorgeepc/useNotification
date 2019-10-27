import React from 'react'
import styled from 'styled-components'
import Text from '../Text'
import { colors, spacing } from '../../tokens'

export type NotificationStatus = 'default' | 'success' | 'warning' | 'error'

export interface Notification {
  id: string
  createdAt: number
  title?: string
  message: string
  status: NotificationStatus
}

function getColor(
  status: NotificationStatus,
): { color: string; background: string } {
  const color = { color: colors.base.white }
  switch (status) {
    case 'default':
      return { color: colors.base.default, background: colors.base.white }
    case 'success':
      return { ...color, background: colors.base.green }
    case 'warning':
      return { ...color, background: colors.base.yellow }
    case 'error':
      return { ...color, background: colors.base.red }
  }
}

interface Props {
  notification: Notification
  remove(id: string): void
  getRef?: React.LegacyRef<HTMLDivElement>
}

function Toast({ notification, remove, getRef }: Props) {
  const color = getColor(notification.status)
  const textProps = notification.status !== 'default' ? { white: true } : {}

  function handleClick(): void {
    remove(notification.id)
  }

  return (
    <Wrapper ref={getRef as any}>
      <Content {...color} data-testid="content-div">
        <Text {...textProps}>{notification.message}</Text>
        <Close onClick={handleClick} data-testid="close-div">
          <svg fill="currentColor" height="1em" width="1em" viewBox="0 0 40 40">
            <path d="m31.6 10.7l-9.3 9.3 9.3 9.3-2.3 2.3-9.3-9.3-9.3 9.3-2.3-2.3 9.3-9.3-9.3-9.3 2.3-2.3 9.3 9.3 9.3-9.3z"></path>
          </svg>
        </Close>
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 420px;
  transition: all 0.4s ease 0s;
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
`

interface ContentProps {
  color: string
  background: string
}

const Content = styled.div<ContentProps>`
  background: ${props => props.background};
  color: ${props => props.color};
  width: 420px;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 0px none;
  border-radius: 5px;
  padding: ${spacing.xsmall} ${spacing.small};
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
`

const Close = styled.div`
  svg {
    opacity: 1;
    cursor: pointer;
    transition: opacity 0.3s ease 0s;
  }
  svg:hover {
    opacity: 0.75;
  }
`

export default Toast
