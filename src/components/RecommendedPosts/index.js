import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'
import getThemeColor from '../../utils/get-theme-color'

const RecommendedPosts = ({ next, previous }) => (
    <S.RecommendedWrapper>
        {previous && (
            <S.RecommendedLink
                cover
                direction="left"
                bg={getThemeColor()}
                duration={0.6}
                to={previous.fields.slug}
                className="previous">
                {previous.frontmatter.title}
            </S.RecommendedLink>
        )}
        {next && (
            <S.RecommendedLink
                cover
                direction="right"
                bg={getThemeColor()}
                duration={0.6}
                to={next.fields.slug}
                className="next">
                {next.frontmatter.title}
            </S.RecommendedLink>
        )}
    </S.RecommendedWrapper>
)

RecommendedPosts.propTypes = {
    next: PropTypes.shape({
        frontmatter: PropTypes.shape({
            title: PropTypes.string.isRequired
        }),
        fields: PropTypes.shape({
            slug: PropTypes.string.isRequired
        })
    }),
    previous: PropTypes.shape({
        frontmatter: PropTypes.shape({
            title: PropTypes.string.isRequired
        }),
        fields: PropTypes.shape({
            slug: PropTypes.string.isRequired
        })
    })
}

export default RecommendedPosts