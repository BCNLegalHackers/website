const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = async ({ graphql, actions }) => {
  const createStaticPages = async (graphql, actions) => {
    const { createPage } = actions

    const result = await graphql(`
      {
        allMdx(
          filter: {
            frontmatter: { draft: { ne: true }, template: { eq: "static" } }
          }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `)

    const { edges } = result.data.allMdx
    edges.forEach((edge) => {
      const {
        node: {
          fields: { slug },
          frontmatter: { title },
        },
      } = edge

      createPage({
        path: slug,
        component: path.resolve(`./src/templates/static-template.js`),
        context: { slug, title },
      })
    })
  }
  await createStaticPages(graphql, actions)
}

exports.onCreatePage = ({ page }) => {
  const {
    path,
    context,
    context: { layout },
  } = page

  if (layout) return

  if (path === '/') {
    context.layout = 'home'
  } else if (path === '/404.html') {
    context.layout = 'error'
  } else {
    context.layout = 'default'
  }
}

function createDefaultNodeFields(createNodeField, node, getNode) {
  const value = createFilePath({ node, getNode })
  createNodeField({
    node,
    name: 'slug',
    value,
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  const {
    internal: { type },
  } = node

  fmImagesToRelative(node)

  if (type !== 'Mdx') return

  const {
    frontmatter: { template },
  } = node

  switch (template) {
    default:
      createDefaultNodeFields(createNodeField, node, getNode)
  }
}
