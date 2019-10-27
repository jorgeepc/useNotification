import React from 'react'
import styled, { css } from 'styled-components'
import { colors, fonts } from '../../tokens'

interface Props {
  /** Inner content of the span tag */
  children: string
  /** Set white color for use in dark background */
  white?: boolean
}

const Text = ({ children, white = false }: Props) => (
  <Wrapper white={white}>{children}</Wrapper>
)

const Wrapper = styled.span<Props>`
  font-family: ${fonts.family.default};
  font-size: ${fonts.size.default};
  font-weight: ${fonts.weight.normal};
  color: ${colors.base.default};
  ${props =>
    props.white &&
    css`
      color: ${colors.base.white};
    `}
`

export default Text
