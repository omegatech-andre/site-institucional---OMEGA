'use client'
import EstampadorDeSucesso from '@/components/_ui/estampadorDeSucesso/EstampadorDeSucesso'
import './index.scss'

export default function PageEstampador() {
  return (
    <>
      <div className="pageestampador">
        <div className="pageestampador__indicador"></div>
        <div className="pageestampador__content">
          <h1>Capacitar estampadores é um dos lados sociais da nossa Indústria</h1>
          <h2>Desenvolvemos em nosso centro de treinamento verdadeiros Estampadores de Sucesso, contribuindo no crescimento do mercado serigráfico!</h2>
        </div>
        <EstampadorDeSucesso/>
        <div className="pageestampador__content">
          <p>CONHEÇA NOSSO CENTRO DE TREINAMENTO (C.T.):</p>
          <video src="centro-de-treinamento-omega.mp4" typeof='video/mp4' autoPlay loop muted></video>
        </div>
      </div>
    </>
  )
}