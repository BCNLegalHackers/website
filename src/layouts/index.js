import React from 'react'
import DefaultLayout from './default-layout'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faTwitter, faMeetup, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(fab, faTwitter, faMeetup, faLinkedin)

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
