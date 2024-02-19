import styled from "styled-components";

const SFooter = styled.div`
    height: 10vh;
    background-color: #0073ce;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media(max-width: 510px){
        flex-direction: column;
        margin-top: 1rem;
        height: 15vh;
    }
`

const NavFooter = styled.div`
    display: flex;
    gap: 30px;
    p {
        font-size: 1.4rem;
        color: #FFFFFF;
    }

    #icones {
        display: flex;
        gap: 20px;
    }

    @media(max-width: 510px){
        flex-direction: column;
    }
`


const Footer = () => {
    return(
        <SFooter>
            <img src="./assets/logo.svg" alt="logo"/>
            <NavFooter>
                <p>Acompanhe nas redes</p>
                    <div id="icones">
                        <img src="./assets/youtube.svg" alt=""/>
                        <img src="./assets/linkedin.svg" alt=""/>
                        <img src="./assets/facebook.svg" alt=""/>
                        <img src="./assets/instagram.svg" alt=""/>
                        <img src="./assets/twitter-white.svg" alt=""/>
                    </div>
            </NavFooter>
        </SFooter>
        );
}

export default Footer