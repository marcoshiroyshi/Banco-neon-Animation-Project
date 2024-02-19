'use client'

import { useEffect, useRef } from "react";
import { SButton } from "../Button/Button";
import CardIcon from "../Card/CardIcon";
import { HeroIcons, HeroImage, HeroText, SHero } from "./Hero.styles";
import { gsap } from "gsap";


const Hero = () => {
    const areaTextRef = useRef(null) 
    const areaIconsRef = useRef(null)
    const areaTextImg = useRef(null)
    const areaImgRef = useRef(null)

    useEffect(() => {
        const areaText = areaTextRef.current;
        const areaIcons = areaIconsRef.current;
        const textImg = areaTextImg.current;
        const areaImg = areaImgRef.current;
        const tl = gsap.timeline()

        tl.fromTo(areaText, {
            opacity: 0,
            x: -20
        }, {
            opacity: 2,
            duration: 0.8,
            x: 0
        }).fromTo(areaIcons, {
            opacity: 0,
            y: 20
        }, {
            opacity: 2,
            y: 0,
            duration: 0.8
        }).fromTo(textImg, {
            opacity: 0,
            y: 20
        }, {
            opacity: 2,
            y: 0,
            duration: 0.8
        }).fromTo(areaImg, {
          opacity: 0,
          y: 20
        }, {
          opacity: 2,
          y: 0,
          duration: 0.8
        })
        }, []);


    return(
        <SHero>
            <HeroText >
                <div id="hero-text" ref={areaTextRef}>
                  <h3> Abra sua conta, é só baixar o app!</h3>
                  <h1>A conta digital certa pra cuidar bem do seu dinheiro</h1>
                  <SButton>Abra sua conta digital</SButton>
                </div>
              <HeroIcons ref={areaIconsRef}>
                <CardIcon
                  icone="./assets/icon-cartao-internacional.svg"
                  paragrafo="Cartão sem
                  anuidade"
                />
                <CardIcon
                  icone="./assets/icon-anuidade.svg"
                  paragrafo="Conta digital 
                  100% grátis"
                />
                <CardIcon
                  icone="./assets/icon-poupanca.svg"
                  paragrafo="Seu dinheiro rendendo mais"
                />
              </HeroIcons>
          </HeroText>
          <HeroImage>
            <h2 ref={areaTextImg}>Banco 100% digital</h2>
              <div ref={areaImgRef} id="hero-image">
                <img id="card-front"src="./assets/card-neon-frnt.png" alt=""/>
                <img id="card-back"src="./assets/card-neon-back.png" alt=""/>
                <img id="card-circle" src="./assets/circle-cards-neon.svg" alt=""/>
              </div>
          </HeroImage>
        </SHero>
    );
}

export default Hero
