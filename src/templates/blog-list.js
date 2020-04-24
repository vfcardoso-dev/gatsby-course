import React from 'react'
import { graphql } from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"
import Pagination from "../components/Pagination"


export const query = graphql`
    query ($limit: Int!, $skip: Int!) {
        allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, limit: $limit, skip: $skip) {
            edges {
                node {
                    frontmatter {
                        background
                        category
                        date(formatString: "LL", locale: "pt-br")
                        description
                        title
                    }
                    timeToRead
                    fields { slug }
                }
            }
        }
    }
`

const BlogList = props => {
    const postList = props.data.allMarkdownRemark.edges
    const { currentPage, numPages } = props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? `/` : `/page/${currentPage - 1}`
    const nextPage = `/page/${currentPage + 1}`

    return (
        <Layout>
            <SEO title="Home" />
            {postList.map(({
                node: {
                    frontmatter: { background, category, date, title, description },
                    timeToRead,
                    fields: { slug }
                }
            }) => (
                    <PostItem key={slug}
                        slug={slug}
                        background={background}
                        category={category}
                        date={date}
                        timeToRead={timeToRead}
                        title={title}
                        description={description}
                    />
                ))}
            <Pagination
                isFirst={isFirst}
                isLast={isLast}
                currentPage={currentPage}
                numPages={numPages}
                nextPage={nextPage}
                prevPage={prevPage}
            />
        </Layout>
    )
}

export default BlogList