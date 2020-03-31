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
      <h6>
        {site.siteMetadata.copyright} {new Date().getFullYear()}
      </h6>
      <p>
        <small>
          Made with <span className={styles.heartEmoji}>❤️</span> by{' '}
          <a href="https://41north.dev">°41North</a>
        </small>
      </p>
    </footer>
  )
}

export default Footer
