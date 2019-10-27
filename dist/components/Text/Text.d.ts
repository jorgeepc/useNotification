/// <reference types="react" />
interface Props {
  /** Inner content of the span tag */
  children: string
  /** Set white color for use in dark background */
  white?: boolean
}
declare const Text: ({ children, white }: Props) => JSX.Element
export default Text
