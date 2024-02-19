import styled from "styled-components";

interface ICardIcon {
    icone: string,
    paragrafo: string
} 



const SCardIcon = styled.div`
    display: flex;
    align-items: center;

    div {
        width: 48px;
        height: 48px;
        border-radius: 100%;
    }

    p {
        font-size: 1.8rem;
        color: #FFF;
    }
`


const CardIcon = ({icone, paragrafo}:ICardIcon) => {
    return(
        <SCardIcon>
            <div>
                <img src={icone} alt=""/>
            </div>
            <p>{paragrafo}</p>
        </SCardIcon>
    );
}

export default CardIcon