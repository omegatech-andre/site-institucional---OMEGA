import YouTube from '@/components/_ui/youtube/youTube'
import './index.scss'

export default function PagePadraoOmega() {
  return (
    <>
      <div className="pagepadraoomega">
        <div className="pagepadraoomega__indicador"></div>
        <div className="pagepadraoomega__content">
          <h1>No youtube você encontra como utilizar a linha de produtos do Padrão Ômega, todas recomendações e curiosidades sobre nossa empresa.</h1>
        </div>
        <YouTube />
      </div>
    </>
  )
}