
import styled from "styled-components";


export const SHero = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    background: url('./assets/bg-hero.svg') no-repeat;
    background-size: cover;
    width: 100%;
    height: 78.6rem;    


    @media(max-width: 1000px) {
        height: 105.1rem;
        flex-direction: column;
    }

    @media(max-width: 375px) {
        height: 90rem;
    }
    
`

export const HeroText = styled.div`
    margin-top: 10rem;
    width: 68.2rem;
    height: 70%;
    

    #hero-text {
        margin-bottom: 50px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        opacity: 0;

    }
    
    h3{
        font-size: 2.4rem;
        color: #FFFFFF;
    }

    h1 {
        color: #FFFFFF;
    }

    @media(max-width:1000px) {
        text-align: center;
        margin-top: 20rem;

        #hero-text{
            align-items: center;
            justify-content: center;
        }
        

        h3 {
            font-size: 1.8rem;
        }

        h1 {
            font-size: 4.8rem;
            text-align: center;
        }
    }

    @media(max-width:375px) {
        margin-top: 40rem;
        width: 30rem;
       

        h1 {
            font-size: 3.2rem;
        }

        h3 {
            font-size: 1.6rem;
        }

       
    }
`

export const HeroImage = styled.div`
    width: 40%;
    height: 57%;
    

    h2 {
        color: #FFF;
        opacity: 50%;
        text-align: center;
        
    }

    #hero-image {
        position: relative;
        height: 55rem;
    }

    #card-front {
        position: absolute;
        top: 120px;
        left: 5%;
        z-index: 3;
    }

    #card-back {
        position: absolute;
        z-index: 2;
        right: 20%;
        bottom: 0;
    }

    #card-circle {
        position: absolute;
        z-index: 1;
        top: 140px;
        left: 100px;
        
    }

    @media(max-width: 1440px) {
        #card-front {
            top: 120px;
            left: -30px;
           
        }

        #card-back {
            right: 0;
            bottom: 0;
        }

        #card-circle {
            top: 140px;
            left: 0;
        }
    }

    @media(max-width:1000px) {
        margin-top: 5rem;

        h2 {
            font-size: 4rem;
        }

        #card-front {
            top: 120px;
            left: -10rem;
           
        }

        #card-back {
            right: -10rem;
            bottom: 0;
        }

        #card-circle {
            top: 140px;
            left: -8rem;
        }


    }

    @media(max-width:375px) {
        h2{
            display: none;
        }

        #card-front {
            top: 50px;
            width: 150%;
        }

        #card-back {
            top: 80px;
            width: 150%;
        }

        #card-circle {
            top: 0;
            left: -70px;
            width: 200%;
            
        }


    }


`

export const HeroIcons = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;

    @media(max-width:375px) {
        flex-direction: column;
        justify-content: center;
        gap: 20px;
    }
`

