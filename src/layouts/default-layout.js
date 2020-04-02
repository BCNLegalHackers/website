import { motion } from 'framer-motion'
import React from 'react'
import Footer from '../components/footer'
import Nav from '../components/nav'
import logo from '../img/lh-logo.svg'
import styles from './default-layout.module.scss'
import { Link } from 'gatsby'

const DefaultLayout = ({ children }) => {
  return (
    <div className={`${styles.page} light`}>
      <header>
        <motion.h1
          style={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 1, delay: 0.5 }}
        >
          <Link to="/">
            <img src={logo} alt="BCN Legal Hackers logo" />
          </Link>
        </motion.h1>
      </header>
      <main>
        <div className={styles.content}>
          {children}
          <Nav />
          <Footer />
        </div>
      </main>
    </div>
  )
}

export default DefaultLayout
