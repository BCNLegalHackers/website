import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styles from './footer.module.scss'

const Footer = () => {
  const { site } = useStaticQuery(graphql`
    query BlogLayout {
      site {
        siteMetadata {
          copyright
        }
      }
    }
  `)

  return (
    <footer className={styles.footer}>
      <p>
        {site.siteMetadata.copyright} {new Date().getFullYear()}
      </p>
      <p>
        Made with{' '}
        <span className={styles.heartEmoji} role="img" aria-label="Heart">
          ❤️
        </span>{' '}
        by <a href="https://41north.dev">°41North</a>
      </p>
    </footer>
  )
}

export default Footer
