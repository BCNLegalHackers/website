import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import Img from 'gatsby-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import styles from './author.module.scss'

const Author = ({ author, linkedin, twitter, avatar, body }) => (
  <div className={styles.author}>
    <Img fixed={avatar} />
    <div className={styles.content}>
      <h5>{author}</h5>
      <MDXRenderer>{body}</MDXRenderer>
      <ul>
        {linkedin && (
          <li>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href={`https://linkedin.com/in/${linkedin}`}
            >
              <FontAwesomeIcon icon={['fab', 'linkedin']} />
            </motion.a>
          </li>
        )}
        {twitter && (
          <li>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href={`https://twitter.com/${twitter}`}
            >
              <FontAwesomeIcon icon={['fab', 'twitter']} />
            </motion.a>
          </li>
        )}
      </ul>
    </div>
  </div>
)

export default Author
