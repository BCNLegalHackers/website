import React from 'react'
import DefaultLayout from './default-layout'

export default ({ children, pageContext, ...props }) => {
  const { layout } = pageContext
  switch (layout) {
    case 'default':
    default:
      return (
        <DefaultLayout pageContext={pageContext} {...props}>
          {children}
        </DefaultLayout>
      )
  }
}
