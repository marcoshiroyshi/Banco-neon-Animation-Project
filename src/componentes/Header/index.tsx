import React from 'react';
import Link from "next/link";
import styled, { ThemeProvider } from "styled-components";
import { ButtonHeader } from "../Button/Button";
import NavMobile from "../NavMobile";


const SHeader = styled.header`
    width: 100%;
    position: absolute;
    height: 8.8rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #34c4ec;
    
`

const Nav = styled.nav`
    display: flex;
    align-items: center;

    @media (max-width:865px){
        display: none;
    }
`

export const SLink = styled(Link)`
    font-size: ${(props) => props.theme.colors.white};
    text-decoration: none;
    color: #FFF;
    font-size: 1.6rem;
    margin: 0 10px;
`


const Header = () => {

    return(
        <SHeader>
            <img src="./assets/logo.svg" alt="logo"/>
            <Nav>
                <SLink href="/">Produtos</SLink>
                <SLink href="/">Conta digital PJ</SLink>
                <SLink href="/">Quem somos</SLink>
                <SLink href="/">Blog</SLink>
                <SLink href="/">Ajuda</SLink>
                <ButtonHeader>
                    Abra sua conta digital
                </ButtonHeader>
            </Nav>
            <NavMobile/>
        </SHeader>
    );
}

export default Header