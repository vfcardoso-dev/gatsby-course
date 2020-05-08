import React from 'react'
import ReactDisqusComments from 'react-disqus-comments'
import PropTypes from 'prop-types'

import * as S from './styled'

const Comments = ({ url, title }) => {
    const fullURL = `https://vfcardoso-gatsby-blog.netlify.app${url}`

    return (
        <S.CommentsWrapper>
            <S.CommentsTitle>Comentários</S.CommentsTitle>
            <ReactDisqusComments
                shortname="vfcardoso-gatsby-blog"
                identifier={fullURL}
                title={title}
                url={fullURL}
            />
        </S.CommentsWrapper>
    )
}

Comments.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default Comments