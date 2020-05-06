const postsQuery = `{
    posts: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
        edges {
            node {
                objectID: id
                frontmatter {
                    category
                    dateTimestamp: date
                    date(formatString: "LL", locale: "pt-br")
                    description
                    title
                }
                fields { slug }
                excerpt(pruneLength: 5000)
            }
        }
    }
}`

const flatten = (arr) =>
    arr.map(({ node: { frontmatter, ...rest } }) => ({
        ...frontmatter,
        dateTimestamp: parseInt((new Date(frontmatter.dateTimestamp).getTime() / 1000).toFixed(0)),
        ...rest
    }))

const queries = [
    {
        query: postsQuery,
        transformer: ({ data }) => flatten(data.posts.edges),
        indexName: 'Posts',
        settings: {
            attributesToSnippet: ['excerpt:20']
        }
    },
];

module.exports = queries