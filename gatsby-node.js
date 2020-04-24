const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

//Generating slug field to each post metadata
exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === "MarkdownRemark") {
        const slug = createFilePath({
            node,
            getNode,
            basePath: "pages"
        })

        createNodeField({
            node,
            name: "slug",
            value: `/${slug.slice(12)}`
        })
    }
}

//Create pages for each markdown file
exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    return graphql(`
        {
            allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
                edges {
                    node {
                        frontmatter {
                            title
                        }
                        fields { slug }
                    }
                }
            }
        }
    `).then(result => {
        if (result.errors) throw result.errors

        const posts = result.data.allMarkdownRemark.edges

        posts.forEach(({ node }) => {
            createPage({
                path: node.fields.slug,
                component: path.resolve("./src/templates/blog-post.js"),
                context: {
                    slug: node.fields.slug
                }
            })
        })

        const postsPerPage = 5
        const numPages = Math.ceil(posts.length / postsPerPage)

        Array.from({ length: numPages }).forEach((_, index) => {
            createPage({
                path: index === 0 ? `/` : `/page/${index + 1}`,
                component: path.resolve("./src/templates/blog-list.js"),
                context: {
                    limit: postsPerPage,
                    skip: index * postsPerPage,
                    numPages: numPages,
                    currentPage: index + 1
                }
            })
        })
    })
}