import styled from 'styled-components'

interface ICard {
    usuario: string,
    comentario: string
}

const SCard = styled.div`
    width: 30.84rem;
    height: 20.09rem;
    padding: 2rem 3rem;
    background-color: #F1F0F5;
    

    p {
        font-size: 1.8rem;
    }
    
`

const SCardTitle = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;

    strong {
        font-size: 1.8rem;
    }



`

const CardTwitter = ({usuario, comentario}: ICard) => {
    return(
        <SCard>
            <SCardTitle>
                <strong>{usuario}</strong>
                <img src="./assets/icon-twiiter.svg" alt="Logo twitter"/>
            </SCardTitle>
            <p>{comentario}</p>
        </SCard>
    );
}

export default CardTwitter