import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { kebabCase } from '../../utils/strings'
import styles from './nav.module.scss'

const NavEntry = ({ title, entries }) => (
  <div className={styles.entry}>
    <h5>{title}</h5>
    <ul className={styles.social}>
      {entries.map((item) => (
        <li key={kebabCase(item.text)}>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href={item.href}
            className={item.icon ? styles.icon : ''}
          >
            {item.icon ? (
              <FontAwesomeIcon icon={['fab', item.icon]} />
            ) : (
              `${item.text}`
            )}
          </motion.a>
        </li>
      ))}
    </ul>
  </div>
)

const Nav = () => {
  const {
    site: {
      siteMetadata: { menu },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          menu {
            title
            entries {
              text
              icon
              href
            }
          }
        }
      }
    }
  `)

  return (
    <nav className={styles.nav}>
      {menu.map((item) => (
        <NavEntry key={kebabCase(item.title)} {...item} />
      ))}
    </nav>
  )
}

export default Nav
