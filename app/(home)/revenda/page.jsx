import Revenda from '@/components/_ui/revenda/Revenda'
import './index.scss'
import ButtonAtv from '@/components/_ui/buttonAtv/ButtonAtv'

export default function PageRevenda() {
  return (
    <>
      <div className="pagerevenda">
        <div className="pagerevenda__indicador"></div>
        <div className="pagerevenda__content">
          <h1>Descubra onde nos encontrar e leve o padrão Ômega de qualidade para os seus clientes!</h1>
        </div>
        <div className="pagerevenda__box">
          <div className="pagerevenda__boxcontent">
            <div className="boxcontent__content">
              <h3>Localize a revenda mais próxima da sua estamparia.</h3>
              <ButtonAtv link="/revendedores" largura=""  nome="ver revendedores"/>
            </div>
          </div>
          <div className="pagerevenda__boxbackground">
          </div>
        </div>
        <Revenda/>
      </div>
    </>
  )
}