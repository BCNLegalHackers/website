import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import SEO from '../components/seo'

const StaticTemplate = ({ data }) => {
  const {
    pageContent: {
      body,
      frontmatter: { title },
    },
  } = data

  return (
    <>
      <SEO title={title} />
      <article>
        <MDXRenderer>{body}</MDXRenderer>
      </article>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    pageContent: mdx(
      frontmatter: { template: { eq: "static" } }
      fields: { slug: { eq: $slug } }
    ) {
      body
      frontmatter {
        title
      }
    }
  }
`

export default StaticTemplate
