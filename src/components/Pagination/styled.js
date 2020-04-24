import styled from 'styled-components'
import media from 'styled-media-query'

export const PaginationWrapper = styled.section`
    align-items: center;
    color: var(--texts);
    display: flex;
    padding: 1.5rem 3rem;
    justify-content: space-between;

    ${media.lessThan("large")`
        font-size: .8rem;
        padding: 1rem 1rem 1.25rem;
    `}

    a {
        color: var(--texts);
        text-decoration: none;
        transition: color 0.5s;
        
        &:hover {
            color: var(--highlight);
        }
    }
`