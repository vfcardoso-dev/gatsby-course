import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'

import * as S from "../components/Post/styled"

const AboutPage = () => (
    <Layout>
        <SEO title="About" />
        <S.PostHeader>
            <S.PostTitle>Sobre mim</S.PostTitle>
        </S.PostHeader>

        <S.MainContent>
            <p>Sou desenvolvedor de software, músico e nerd. Este é um espaço que mantenho para falar das coisas que gosto.</p>
        </S.MainContent>
    </Layout>
)

export default AboutPage