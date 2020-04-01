import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Author from '../author'
import styles from './authors.module.scss'

const Authors = () => {
  const { bios } = useStaticQuery(
    graphql`
      query {
        bios: allMdx(
          filter: {
            frontmatter: { template: { eq: "biography" }, draft: { eq: false } }
          }
          sort: { order: ASC, fields: frontmatter___order }
        ) {
          edges {
            node {
              body
              frontmatter {
                author
                twitter
                linkedin
                avatar {
                  childImageSharp {
                    fixed(width: 80, height: 80) {
                      ...GatsbyImageSharpFixed_withWebp
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  const authors = bios.edges.map((item) => {
    const {
      node: {
        body,
        frontmatter: {
          author,
          linkedin,
          twitter,
          avatar: {
            childImageSharp: { fixed: avatar },
          },
        },
      },
    } = item
    const elem = {
      body,
      author,
      linkedin,
      twitter,
      avatar,
    }
    return <Author key={author} {...elem} />
  })

  return <div className={styles.authors}>{authors.map((item) => item)}</div>
}

export default Authors
