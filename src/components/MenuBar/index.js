import React, { useState, useEffect } from 'react'
import { Home } from "@styled-icons/boxicons-solid/Home"
import { SearchAlt2 as Search } from "@styled-icons/boxicons-solid/SearchAlt2"
import { UpArrowAlt as Arrow } from "@styled-icons/boxicons-regular/UpArrowAlt"
import { Bulb as Light } from "@styled-icons/boxicons-solid/Bulb"

import * as S from './styled'
import getThemeColor from '../../utils/get-theme-color'

const MenuBar = () => {
    const [theme, setTheme] = useState(null)

    const isDarkMode = theme === "dark"

    useEffect(() => {
        setTheme(window.__theme)
        window.__onThemeChange = () => setTheme(window.__theme)
    }, [])

    return (
        <S.MenuBarWrapper>
            <S.MenuBarGroup>
                <S.MenuBarLink
                    cover
                    direction="left"
                    bg={getThemeColor()}
                    duration={0.6}
                    to="/"
                    title="Voltar para home">
                    <S.MenuBarItem><Home /></S.MenuBarItem>
                </S.MenuBarLink>

                <S.MenuBarLink
                    cover
                    direction="left"
                    bg={getThemeColor()}
                    duration={0.6}
                    to="/search/"
                    title="Pesquisar">
                    <S.MenuBarItem><Search /></S.MenuBarItem>
                </S.MenuBarLink>
            </S.MenuBarGroup>

            <S.MenuBarGroup>
                <S.MenuBarItem
                    title="Mudar tema"
                    onClick={() => { window.__setPreferredTheme(isDarkMode ? 'light' : 'dark') }}
                    className={theme}>
                    <Light />
                </S.MenuBarItem>
                <S.MenuBarItem
                    title="Ir para o topo"
                    onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }) }}>
                    <Arrow />
                </S.MenuBarItem>
            </S.MenuBarGroup>
        </S.MenuBarWrapper>
    )
}

export default MenuBar