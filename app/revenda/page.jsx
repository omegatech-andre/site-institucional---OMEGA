import './index.scss'
import ButtonAtv from '@/components/_ui/buttonAtv/ButtonAtv'

export default function PageRevenda() {
  return (
    <>
      <div className="pagerevenda">
        <div className="pagerevenda__indicador"></div>
        <div className="pagerevenda__content">
          <h1>Descubra onde encontrar as nossas tinta e leve o padrão Ômega de qualidade para os seus clientes</h1>
          <h2>Encontre o revendedor mais próximo de você</h2>
        </div>
        <div className="pagerevenda__box">
          <div className="pagerevenda__boxcontent">
            <div className="boxcontent__content">
              <h3>Clique no botão abaixo e encontre o REVENDEDOR mais próximo de você!</h3>
              <ButtonAtv link="" largura=""  nome="ver revendedores"/>
            </div>
          </div>
          <div className="pagerevenda__boxbackground">
          </div>
        </div>
      </div>
    </>
  )
}