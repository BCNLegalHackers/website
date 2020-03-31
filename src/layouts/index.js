import { library } from '@fortawesome/fontawesome-svg-core'
import {
  fab,
  faLinkedin,
  faMeetup,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import DefaultLayout from './default-layout'

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
