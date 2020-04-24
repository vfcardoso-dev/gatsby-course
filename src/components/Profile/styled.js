import styled from 'styled-components'
import { Link } from 'gatsby'

export const ProfileWrapper = styled.section`
    color: #8899a6;
    display: flex;
    flex-direction: column;
`

export const ProfileLink = styled(Link)`
    color: #8899a6;
    text-decoration: none;
    transition: 'color 0.5s';
    
    &:hover {
        color: #1fa1f2;
    }
`

export const ProfileAuthor = styled.h1`
    font-size: 1.8rem;
    font-weight: 500;
    margin: 0.75rem auto 2rem;
`

export const ProfilePosition = styled.small`
    display: block;
    font-size: 1.075rem;
    font-weight: 400;
    margin: 0.15rem auto;
`

export const ProfileDescription = styled.p`
    font-size: .9rem;
    font-weight: 400;
    line-height: 1.2;
`