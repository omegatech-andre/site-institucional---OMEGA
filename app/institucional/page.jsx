import Image from 'next/image'
import './index.scss'
import CardAbout from '@/components/_ui/cardAbout/CardAbout'

export default function PageInstitucional() {
  return (
    <>
      <div className="pageinstitucional">
        <div className="pageinstitucional__indicador"></div>
        <div className="pageinstitucional__content">
          <h1>A Ômega é uma indústria especializada em tintas serigráficas</h1>
          <h2><span>Produzindo esse padrão desde 2021 é referência em Pernambuco nos assuntos de: serigrafia e qualidade.</span></h2>
          <h2>Disponibilizamos de uma qualidade de alto padrão para as estampas dos nossos clientes e parceiros! Assim, mantendo o padrão Ômega com mais cor e intensidade.</h2>
          <h2>A nossa missão é ser uma empresa que por meio da inovação, empenha-se no âmbito do desenvolvimento social e sustentável, atuando na fabricação de produtos de qualidade direcionando ao mercado serigráfico. Com a visão de ser reconhecida como uma empresa que fomente o desenvolvimento do mercado regional e no melhoramento do processo produtivo e ambiental.</h2>
          <p>Eu sou o Alfa e o Ômega, o Principio e o Fim , diz o Senhor, que é, que era e que há de vir, O Todo Poderoso. <br></br> Apocalipse 1:8</p>
        </div>
        <div className="pageinstitucional__picture">
          <Image src='/assets/images/equipe-omega-setembro.png' width={1440} height={762} />
          <div className="pageinstitucional__picture--box">
            <h3>Comemoração de aniversário de 2 anos da Ômega Screen Indústria</h3>
          </div>
        </div>
        <div className="pageinstitucional__about">
          <div className="pageabout">
            <CardAbout
              description="Ser uma empresa que por meio da inovação, empenha-se no âmbito do desenvolvimento social e sustentabilidade ambiental. Atuando na fabricação de produtos de qualidade direcionado ao mercado serigráfico brasileiro."
              src="/assets/images/about-missao.png"
              alt="sobre missão"
              title="missão"
            />
            <CardAbout
              description="Ser reconhecida como uma empresa que fomente o desenvolvimento do mercado regional; Melhoramento do processo produtivo e ambiental."
              src="/assets/images/about-visao.png"
              alt="sobre visão"
              title="visão"
            />
            <CardAbout
              description="Temor a DEUS, Ética, Honestidade, Respeito, Trabalho em equipe,"
              src="/assets/images/about-valores.png"
              alt="sobre valores"
              title="valores"
            />
          </div>
        </div>
      </div>
    </>
  )
}