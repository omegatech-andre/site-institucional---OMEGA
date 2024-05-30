import Image from 'next/image'
import './index.scss'
import ButtonAtv from '../../buttonAtv/ButtonAtv'

export default function Palestrante() {
  return (
    <>
      <div className="palestrante">
        <h1>Aprenda com um <span>especialista</span> no assunto</h1>
        <div className="palestrante__content">
          <Image
            src='/assets/images/palestrante.jpg'
            width={635}
            height={380}
            alt='palestrante'
          ></Image>
          <div className="palestrante__info">
            <p><strong><span>Andrey Marcio</span></strong>, Diretor da Indústria Ômega Screen, <strong>estampador de sucesso</strong>, com 20 anos de experiência no mercado serigráfico! Com todo conhecimento adquirido, desenvolveu a capacitação Estampador de Sucesso.</p>
            <p>Instruindo verdadeiros profissionais na área da serigrafia que levam mais cor e intensidade para as estampas de seus clientes.</p>
            <div className="info__btn">
              <ButtonAtv link={process.env.NEXT_PUBLIC_URL_ESTAMPADOR_DE_SUCESSO} target="_blank" largura="35rem" nome="Quero me tornar um Estampador de Sucesso" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}