import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Helmet from 'react-helmet'

function SEO({ title, description, author, lang = 'en', image, meta }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            url
            title
            defaultTitle
            description
            author
            image
          }
        }
      }
    `
  )

  const {
    url: metaDomain,
    title: metaTitle,
    defaultTitle: metaDefaultTitle,
    description: metaDesc,
    author: metaAuthor,
    image: metaImage,
  } = site.siteMetadata

  const desc = description || metaDesc

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | ${metaTitle}`}
      defaultTitle={metaDefaultTitle}
      meta={[
        {
          name: `theme-color`,
          content: `#008885`,
        },
        {
          name: `msapplication-navbutton-color`,
          content: `#008885`,
        },
        {
          name: `apple-mobile-web-app-status-bar-style`,
          content: `#008885`,
        },
        {
          name: `description`,
          content: desc,
        },

        // Open Graph: https://ogp.me/
        {
          property: `og:title`, // equivalent: twitter:title
          content: title || metaDefaultTitle,
        },
        {
          property: `og:description`, // equivalent: twitter:description
          content: desc,
        },
        {
          property: `og:image`, // equivalent: twitter:image
          content: image || metaImage,
        },
        {
          property: `og:type`,
          content: `website`,
        },

        // Twitter: https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/markup
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:title`,
          content: title || metaDefaultTitle,
        },
        {
          name: `twitter:description`,
          content: desc,
        },
        {
          name: `twitter:image`,
          content: image || metaImage,
        },
        {
          name: `twitter:site`,
          content: metaAuthor,
        },
        {
          name: `twitter:creator`,
          content: author || metaAuthor,
        },
        {
          name: 'twitter:domain',
          content: metaDomain,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
  lang: PropTypes.string,
  image: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
}

export default SEO
