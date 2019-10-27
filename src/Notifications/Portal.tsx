import React from 'react'
import ReactDom from 'react-dom'

interface Props {
  children: React.ReactNode
}

function Portal({ children }: Props): React.ReactPortal {
  return ReactDom.createPortal(<div>{children}</div>, document.body)
}

export default Portal
