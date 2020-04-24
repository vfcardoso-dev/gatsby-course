import React, { useState, useEffect } from 'react'
import { Home } from "@styled-icons/boxicons-solid/Home"
import { SearchAlt2 as Search } from "@styled-icons/boxicons-solid/SearchAlt2"
import { UpArrowAlt as Arrow } from "@styled-icons/boxicons-regular/UpArrowAlt"
import { Bulb as Light } from "@styled-icons/boxicons-solid/Bulb"
import { Grid } from "@styled-icons/boxicons-solid/Grid"
import { ListUl } from "@styled-icons/boxicons-regular/ListUl"

import * as S from './styled'

const MenuBar = () => {
    const [theme, setTheme] = useState(null)
    const [display, setDisplay] = useState(null)

    const isDarkMode = theme === "dark"
    const isListMode = display === "list"

    useEffect(() => {
        setTheme(window.__theme)
        setDisplay(window.__display)

        window.__onThemeChange = () => setTheme(window.__theme)
        window.__onDisplayChange = () => setDisplay(window.__display)
    }, [])

    return (
        <S.MenuBarWrapper>
            <S.MenuBarGroup>
                <S.MenuBarLink to="/" title="Voltar para home">
                    <S.MenuBarItem><Home /></S.MenuBarItem>
                </S.MenuBarLink>

                <S.MenuBarLink to="/search/" title="Pesquisar">
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
                    title="Alternar entre grid e lista"
                    onClick={() => { window.__setPreferredDisplay(isListMode ? 'grid' : 'list') }}
                    className="display">
                    {isListMode ? <Grid /> : <ListUl />}
                </S.MenuBarItem>
                <S.MenuBarItem title="Ir para o topo"><Arrow /></S.MenuBarItem>
            </S.MenuBarGroup>
        </S.MenuBarWrapper>
    )
}

export default MenuBar