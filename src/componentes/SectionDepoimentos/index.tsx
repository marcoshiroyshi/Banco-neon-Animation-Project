
import Carrosel from '../CarroselCards';
import { ContainerDepoimento, StyledSectionDepoimentos, TitleDepoimento } from './Depoimento.styles';

const SectionDepoimento = () => {
    return(
    <StyledSectionDepoimentos>
        <ContainerDepoimento>
            <TitleDepoimento>
                <h3 id='title-1'>Prático, fácil, moderno</h3>
                <h3 id='title-2'>Você resolve tudo sem estresse 😊</h3>
            </TitleDepoimento>
            <Carrosel/>
        </ContainerDepoimento>
    </StyledSectionDepoimentos>
    );
}

export default SectionDepoimento