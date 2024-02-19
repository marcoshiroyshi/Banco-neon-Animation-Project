import { useState } from "react";
import styled from "styled-components";
import { ButtonHeader } from "../Button/Button";
import { SLink } from "../Header";

const SNav = styled.nav`
    display: none;

    @media (max-width:865px){
        display: block;
    }
`

const Hamburguer = styled.div`
    width: 4rem;
    height: 4rem;
    border: 1px solid white;
    gap: 5px;
    border-radius: 5px;
    display: none;

    div {
        background-color: white;
        width: 2rem;
        height: 0.2rem;
    }

    @media (max-width:865px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    
`



const NavMobile = () => {
    const [isToggle, setIsToggle] = useState(false)

    function handleClick() {
        setIsToggle(!isToggle)
    }


    return(
        <>
            <Hamburguer onClick={handleClick}>
                <div></div>
                <div></div>
                <div></div>
            </Hamburguer>
            {isToggle && 
                <SNav>
                    <SLink href="/">Produtos</SLink>
                    <SLink href="/">Conta digital PJ</SLink>
                    <SLink href="/">Quem somos</SLink>
                    <SLink href="/">Blog</SLink>
                    <SLink href="/">Ajuda</SLink>
                    <ButtonHeader>
                        Abra sua conta digital
                    </ButtonHeader>
                </SNav>
            }
        </>
    );
}

export default NavMobile