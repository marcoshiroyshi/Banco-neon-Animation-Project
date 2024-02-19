import styled from "styled-components";


export const ContainerConta = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20rem;

    @media(max-width: 1440px) {
        margin-left: 10rem;
        gap: 100px;
    }

    @media(max-width: 1000px) {
        margin-left: 5rem;
        gap: 100px;
    }

   

`

export const ContaImg = styled.div`
    height: 80%;
    width: 22%;
    position: relative;
    
    

    #circle-mock {
        position: absolute;
        top: 10rem;
        left: -160%;    
        opacity: 0;
    }

    #mockup {
        position: absolute;
        right: 100%;
        opacity: 0;
    }

    @media(max-width: 1000px) {
        margin-left: 10rem;
        gap: 100px;
    }

    @media(max-width: 1440px) {
        margin-left: 10rem;
        gap: 100px;
    }

    @media(max-width: 768px) {
        display: none;
    }



`

export const ContaConteudo = styled.div`
    height: 80%;
    width: 40%;
    position: relative;
    right: -20%;
    opacity: 0;
    
    
    h2 {
        font-size: 4rem;
        width: 65%;
    }

    @media(max-width:1440px) {
        h2 {
            width: 90%;
        }
    }

    @media(max-width: 1000px) {
        margin-left: 5rem;
        
        h2 {
            width: 100%;
        }
    }

    @media(max-width: 768px) {
        width: 100%;
        margin-top: 14rem;
        margin-left: -3rem;

        h2 {
            text-align: center;

        }
    }

    @media(max-width:375px) {
        h2 {
            font-size: 2.8rem;
            
        }
    }

    



    
`

export const ContainerItem = styled.div`
    margin-top: 6rem;
    display: flex;
    flex-direction: column;
    gap: 40px;

    
`
