import styled from "styled-components";

export const StyledSectionDepoimentos = styled.div`
    width: 100%;
    height: 60vh;
`

export const ContainerDepoimento = styled.div`
    width: 70%;
    height: 80%;
    margin: 5rem auto;

    @media(max-width:1440px) {
        width: 80%;
    }

    @media(max-width:768px) {
        width: 90%;
    }
`

export const TitleDepoimento = styled.div`
    margin-bottom: 5rem;
    

    #title-1 {
        font-size: 4rem;
        font-weight: 700;
        color: #C6C5CE;
    }

    #title-2 {
        font-size: 4rem;
        font-weight: 700;
    }

    @media(max-width:1440px) {
        margin-top: 5rem;
    }

    @media(max-width:1000px) {
        margin-top: 20rem;
    }

    @media(max-width:800px) {
        margin-top: 30rem;
    }

    @media(max-width:768px) {
        margin-top: 10rem;
        text-align: center;

        #title-1 {
            font-size: 3.6rem;
            font-weight: 700;
            
        }

        #title-2 {
            font-size: 3.6rem;
            
        }
    }

    @media(max-width: 375px) {
        margin-top: 18rem;

        #title-1 {
            font-size: 2.4rem;
            font-weight: 700;
            
        }

        #title-2 {
            font-size: 2%.8rem;
            
        }
    }



`