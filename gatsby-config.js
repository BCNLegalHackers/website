const siteConfig = require('./site.config.js')

module.exports = {
  siteMetadata: siteConfig,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'posts',
        path: `${__dirname}/content/announcements/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'static',
        path: `${__dirname}/content/static/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `biography`,
        path: `${__dirname}/content/bios`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require(`postcss-preset-env`)({ stage: 0 }),
          require('autoprefixer'),
          require('postcss-sorting'),
        ],
      },
    },
    `gatsby-plugin-layout`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `${__dirname}/static/img/favicon.png`,
        name: siteConfig.title,
        short_name: siteConfig.title,
        start_url: `/`,
        background_color: `#ff0000`,
        theme_color: `#ffff`,
        display: `standalone`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: ['Gotham Book'],
          urls: ['/fonts/gotham-font.css'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Lora`,
            variants: [`300`, `400`, `500`, `700`],
          },
        ],
      },
    },
    `gatsby-plugin-optimize-svgs`,
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          'gatsby-remark-unwrap-images',
          'gatsby-remark-code-headers',
          `gatsby-remark-relative-images`,
          `gatsby-remark-embedder`,
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1440,
              showCaptions: true,
              linkImagesToOriginal: false,
              withWebp: true,
            },
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'noopener noreferrer',
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              inlineCodeMarker: '›',
            },
          },
          'gatsby-remark-katex',
          'gatsby-remark-figure-caption',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              inlineCodeMarker: ',',
            },
          },
        ],
        remarkPlugins: [require('remark-emoji')],
      },
    },
  ],
}
