import { SButton } from "@/componentes/Button/Button";
import CardIcon from "@/componentes/Card/CardIcon";
import ConteudoCard from "@/componentes/ConteudoCards";
import Footer from "@/componentes/Footer";
import Header from "@/componentes/Header";
import Hero from "@/componentes/Hero";
import SectionConta from "@/componentes/SectionConta";
import { ContaConteudo, ContaImg, ContainerConta, ContainerItem } from "@/componentes/SectionConta/Conta.styles";
import SectionDepoimento from "@/componentes/SectionDepoimentos";



export default function Home() {
  return (
    <>
      <main> 
        <Header/>
        <Hero/>
        <SectionConta/>
        <SectionDepoimento/>
        <Footer/>
      </main>
    </>
  );
}
