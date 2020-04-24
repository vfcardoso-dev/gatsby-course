import React from 'react'
import { graphql } from 'gatsby'
import { TimeFive } from '@styled-icons/boxicons-regular/TimeFive'

import Layout from "../components/Layout"
import SEO from "../components/seo"
import RecommendedPosts from "../components/RecommendedPosts"
import Comments from '../components/Comments'

import * as S from "../components/Post/styled"

export const query = graphql`
    query ($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                date(formatString: "LL", locale: "pt-br")
                description
            }
            fields { slug }
            timeToRead
            html
        }
    }
`

const BlogPost = ({ data, pageContext }) => {
    const post = data.markdownRemark
    const next = pageContext.next
    const previous = pageContext.previous

    return (
        <Layout>
            <SEO title={post.frontmatter.title} />
            <S.PostHeader>
                <S.PostTimeInfoWrapper>
                    <S.PostDateWrapper>
                        <S.PostDate>{post.frontmatter.date}</S.PostDate>
                    </S.PostDateWrapper>

                    <S.PostTimeToReadWrapper>
                        <TimeFive size="18" />
                        <S.PostTimeToRead>{post.timeToRead} min de leitura</S.PostTimeToRead>
                    </S.PostTimeToReadWrapper>
                </S.PostTimeInfoWrapper>
                <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
                <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
            </S.PostHeader>

            <S.MainContent>
                <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
            </S.MainContent>

            <RecommendedPosts next={next} previous={previous} />
            <Comments url={post.fields.slug} title={post.frontmatter.title} />
        </Layout>
    )
}

export default BlogPost