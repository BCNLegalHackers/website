import { motion } from 'framer-motion'
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
        <motion.span
          animate={{ scale: [1, 1.2, 1, 1.2, 1] }}
          transition={{ duration: 1.6, loop: Infinity }}
          className={styles.heartEmoji}
          role="img"
          aria-label="Heart"
        >
          ❤️
        </motion.span>{' '}
        by <a href="https://41north.dev">°41North</a>
      </p>
    </footer>
  )
}

export default Footer
