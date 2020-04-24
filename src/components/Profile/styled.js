import styled from 'styled-components'
import media from "styled-media-query"
import { Link } from 'gatsby'

export const ProfileWrapper = styled.section`
    color: var(--texts);
    display: flex;
    flex-direction: column;
`

export const ProfileLink = styled(Link)`
    color: var(--texts);
    text-decoration: none;
    transition: 'color 0.5s';

    ${media.lessThan("large")`
        display: flex;
        text-align: left;
    `}
    
    &:hover {
        color: var(--highlight);
    }
`

export const ProfileAuthor = styled.h1`
    font-size: 1.8rem;
    font-weight: 500;
    margin: 0.75rem auto 2rem;

    ${media.lessThan("large")`
        font-size: 1.2rem;
        font-weight: 700;
        margin: 0 0 0 10px;
    `}
`

export const ProfilePosition = styled.small`
    display: block;
    font-size: 1.075rem;
    font-weight: 400;
    margin: 0.15rem auto;

    ${media.lessThan("large")`
        font-size: 0.8rem;
        margin-top: 0.2rem;
    `}
`

export const ProfileDescription = styled.p`
    font-size: .9rem;
    font-weight: 400;
    line-height: 1.2;

    ${media.lessThan("large")`
        display: none;
    `}
`