import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
            <a href={`https://linkedin.com/in/${linkedin}`}>
              <FontAwesomeIcon icon={['fab', 'linkedin']} />
            </a>
          </li>
        )}
        {twitter && (
          <li>
            <a href={`https://twitter.com/${twitter}`}>
              <FontAwesomeIcon icon={['fab', 'twitter']} />
            </a>
          </li>
        )}
      </ul>
    </div>
  </div>
)

export default Author
