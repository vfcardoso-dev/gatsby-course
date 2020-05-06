import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Avatar from '../Avatar'
import * as S from './styled'
import getThemeColor from '../../utils/get-theme-color'

const Profile = () => {
    const { site: { siteMetadata: { title, position, description } } } =
        useStaticQuery(graphql`
            {
                site {
                    siteMetadata {
                        position
                        description
                        title
                    }
                }
            }
        `)

    return (
        <S.ProfileWrapper className="Profile-wrapper">
            <S.ProfileLink
                cover
                direction="left"
                bg={getThemeColor()}
                duration={0.6}
                to="/">
                <Avatar />
                <S.ProfileAuthor>
                    {title}
                    <S.ProfilePosition>{position}</S.ProfilePosition>
                </S.ProfileAuthor>
            </S.ProfileLink>
            <S.ProfileDescription>{description}</S.ProfileDescription>
        </S.ProfileWrapper>
    )
}

export default Profile