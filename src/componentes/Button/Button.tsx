import styled from 'styled-components'


export const SButton = styled.div`
    background-color: #FFC800;
    color:#855B35;
    border-radius:#FFC800;
    width: 23.4rem;
    height: 4.8rem;
    font-size: 1.6rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    cursor: pointer;
    transition: 0.3s ease;
    
    &:hover {
        background-color:'#FFDC5C' ;
        color: '#855B35';
        border-radius: '#FFDC5C';
    }
`

export const ButtonHeader = styled.div`
    width: 23.4rem;
    height: 4.8rem;
    color: #FFF;
    border: 1px solid #FFF;
    font-size: 1.6rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
        background-color:'#FFF' ;
        color: '#01c7df';
      
    }
    
`