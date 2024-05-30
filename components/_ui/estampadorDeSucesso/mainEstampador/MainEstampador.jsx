import './index.scss'
import Image from 'next/image'
import ButtonAtv from '../../buttonAtv/ButtonAtv'

export default function MainEstampador() {

  return (
    <>
      <div className="mainestampador">
        <div className='mainestampador__logo'>
          <Image src='/assets/images/logo-estampador-de-sucesso.png' width={300} height={214} alt='Logo Estampador de Sucesso'></Image>
        </div>
        <div className='mainestampador__text'>
          <h2><strong>A sua técnica é bem importante e vou te contar o motivo</strong></h2>
          <p>Não basta apenas ter um ótimo produto na sua estamparia, sem técnica, os resultados de excelência, não serão possíveis! Por isso, você que é estampador precisa se capacitar para obter excelentes resultados em suas estampas!</p>
          <p>E foi pensando nisso que desenvolvemos o curso <strong><span>ESTAMPADOR DE SUCESSO</span></strong>.</p>
          <p><strong>Uma capacitação presencial e gratuita</strong> que além da prática leva <strong>conhecimento técnico e prática</strong> diretamente para sua estamparia!</p>
        </div>
        <div className='mainestampador__btn'>
          <ButtonAtv link={process.env.NEXT_PUBLIC_URL_ESTAMPADOR_DE_SUCESSO} target="_blank" largura="35rem" nome="Quero me tornar um Estampador de Sucesso" />
        </div>
      </div>
    </>
  )
}