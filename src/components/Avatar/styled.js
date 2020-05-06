import styled from 'styled-components'
import media from 'styled-media-query'
import Img from 'gatsby-image'

export const AvatarWrapper = styled(Img)`
    border-radius: 50%;
    height: 7rem;
    width: 7rem;
    margin: auto;

    ${media.lessThan("large")`
        height: 2.2rem;
        width: 2.2rem;
    `}
`