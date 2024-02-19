'use client';

import styled from "styled-components";
import { ContaConteudo, ContaImg, ContainerConta, ContainerItem } from "./Conta.styles";
import ConteudoCard from "../ConteudoCards";
import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
    
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);


const StyledSectionConta = styled.div`
    width: 100%;
    height: 65vh;
    
`

const SectionConta = () => {
    const areaCardsRef = useRef(null)
    const areaImgRef = useRef(null)
    const areaContentRef = useRef(null)
    const circleRef = useRef(null)
    const mockupRef = useRef(null)

    useEffect(() => {
      const areaCards = areaCardsRef.current
      const circle = circleRef.current
      const mockup = mockupRef.current
      const text = areaContentRef.current

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".container",
          start:'top 600px',
          end: 'bottom 900px'
          
        }
      });
      

      timeline.to(circle, {
        left: -260,
        opacity: 2
      }).to(mockup, {
        right: 130,
        opacity: 2
      }).to(text, {
        right: 0,
        opacity: 2
      })


    }, []);

    return(
    <StyledSectionConta>
        <ContainerConta ref={areaCardsRef} className="container">
              <ContaImg ref={areaImgRef}>
                  <img ref={circleRef}id="circle-mock"src="./assets/circle-mockup.svg" alt=""/>
                  <img ref={mockupRef}id="mockup"src="./assets/mockup.svg" alt=""/>
              </ContaImg>
              <ContaConteudo ref={areaContentRef}>
                  <h2>Resolva sua vida direto pelo app Neon!</h2>
                  <ContainerItem>
                      <ConteudoCard
                        icone="./assets/icon-cartao-credito.svg"
                        titulo="Cartão de crédito sem anuidade"
                        paragrafo="Conta digital com cartão de crédito sem anuidade e sem complicação"
                      />
                      <ConteudoCard
                        icone="./assets/icon-taxas.svg"
                        titulo="Sem taxas "
                        paragrafo="Transferências, boletos de depósito e outros serviços gratuitos"
                      />
                      <ConteudoCard
                        icone="./assets/icon-investimentos.svg"
                        titulo="Mais investimentos"
                        paragrafo="Mais investimentos"
                      />
                  </ContainerItem>
              </ContaConteudo>
            </ContainerConta>
    </StyledSectionConta>);
}

export default SectionConta