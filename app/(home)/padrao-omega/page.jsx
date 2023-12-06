import YouTube from '@/components/_ui/youtube/youTube'
import './index.scss'

export default function PagePadraoOmega() {
  return (
    <>
      <div className="pagepadraoomega">
        <div className="pagepadraoomega__indicador"></div>
        <div className="pagepadraoomega__content">
          <h1>Nosso canal do Youtube mostra com propriedade como utilizar a linha de produtos Ômega e ter sucesso em sua estamparia. </h1>
          <h2>Quer acompanhar com exclusividade sobre nossos produtos: como aplicar nas estampas e obter um resultado intenso com o Padrão Ômega?</h2>
        </div>
        <YouTube/>
      </div>
    </>
  )
}