import styled from "styled-components";

interface IConteudoCard {
    icone: string,
    titulo: string,
    paragrafo: string
}

export const SConteudoCard = styled.div`
    display: flex;
    border-bottom: 1px solid #C6C5CE;
    gap: 10px;
    width: 90%;
    height: 30%;
    padding: 15px 0;
    

    #conteudo-text {
        width:100%;
        
    }

    h3 {
        font-size: 2.4rem;
        font-weight: 500;
    }

    #conteudo-p {
        font-size: 1.5rem;
        font-weight: 400;
    }

    @media(max-width:768px) {
        width: 100%;
    }

    @media(max-width:375px) {
        align-items: start;

        h3 {
            font-size: 2rem;
        }

        #conteudo-p {
            font-size: 1.4rem;
        }
    }


`

const ConteudoCard = ({icone, titulo, paragrafo}:IConteudoCard) => {
    return(
    <SConteudoCard>
        <img src={icone} alt=""/>
            <div id="conteudo-text">
                <h3>{titulo}</h3>
                <p id="conteudo-p">{paragrafo}</p>
            </div>
        <img src="./assets/arrow-right.svg" alt=""/>
    </SConteudoCard>);
}

export default ConteudoCard