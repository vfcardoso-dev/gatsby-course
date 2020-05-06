import React from 'react'
import PropTypes from 'prop-types'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import * as S from './styled'
import getThemeColor from '../../utils/get-theme-color'

const Pagination = ({ isFirst, isLast, currentPage, numPages, prevPage, nextPage }) => (
    <S.PaginationWrapper>
        {!isFirst && <AniLink
            cover
            direction="left"
            bg={getThemeColor()}
            duration={0.6}
            to={prevPage}>← página anterior</AniLink>}
        <p>{currentPage} de {numPages}</p>
        {!isLast && <AniLink
            cover
            direction="right"
            bg={getThemeColor()}
            duration={0.6}
            to={nextPage}>proxima página →</AniLink>}
    </S.PaginationWrapper>
)

Pagination.propTypes = {
    isFirst: PropTypes.bool.isRequired,
    isLast: PropTypes.bool.isRequired,
    prevPage: PropTypes.string,
    nextPage: PropTypes.string,
    currentPage: PropTypes.number.isRequired,
    numPages: PropTypes.number.isRequired
}

export default Pagination