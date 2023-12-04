import ButtonAtv from '@/components/_ui/buttonAtv/ButtonAtv'
import './index.scss'
import FaqArea from '@/components/_ui/faqArea/FaqArea'

export default function PageAtendimento() {
  return (
    <>
      <div className="pageatendimento">
        <div className="pageatendimento__indicador"></div>
        <div className="pageatendimento__content">
          <h1>Fale com o time mais intenso da serigrafia! </h1>
          <h2>Fale com o nosso time comercial e faça um orçamento agora, ou tire suas dúvidas na área de perguntas frequentes</h2>
        </div>
        <div className="pageatendimento__box">
          <div className="pageatendimento__boxbackground"></div>
          <div className="pageatendimento__boxcontent">
            <div className="boxcontent__content">
              <img src="/assets/icons/wpp-icon.png" alt="" />
              <h3>Fale agora com nosso time comercial, nosso atendimento está pronto para tirar todas as suas dúvidas</h3>
              <ButtonAtv link="" largura="" nome="fale conosco"/>
              <p>Ou ligue para o número de telefone do comercial (81) 98281-0058</p>
            </div>
          </div>
        </div>
        <div className="pageatendimento__faqarea">
          <FaqArea/>
        </div>
      </div>
    </>
  )
}