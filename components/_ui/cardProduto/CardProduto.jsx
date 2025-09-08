import { useEffect, useState } from 'react'
import ButtonAtv from '../buttonAtv/ButtonAtv'
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri"
import './index.scss'

export default function CardProduto({ nome, description, cores, pesos, images, fds, boletim }) {
  const [imagemPrincipal, setImagemPrincipal] = useState(images[0])
  const [inicio, setInicio] = useState(0)
  const [numImagens, setNumImagens] = useState(5)

  useEffect(() => {
    setImagemPrincipal(images[0])
  }, [images])

  useEffect(() => {
    const atualizarNumImagens = () => {
      setNumImagens(window.innerWidth <= 320 ? 3 : 5)
    }

    window.addEventListener('resize', atualizarNumImagens)
    atualizarNumImagens()

    return () => window.removeEventListener('resize', atualizarNumImagens)
  }, [])

  const proximaImagem = () => {
    setInicio((inicio + 1) % (images.length - numImagens + 1))
  }

  const imagemAnterior = () => {
    setInicio((inicio - 1 + (images.length - numImagens + 1)) % (images.length - numImagens + 1))
  }

  const imagensVisiveis = images.slice(inicio, inicio + numImagens)

  return (
    <>
      <div className="cardproduto">
        <div className="cardproduto__img">
          <img src={imagemPrincipal} alt="" />
          {
            images.length > 1 && (
              <div className="cardproduto__img--mini">
                <div className='setas'>
                  {images.length > numImagens && <div className='bgsetas' onClick={imagemAnterior}><RiArrowLeftSLine size={30} /></div>}
                  {images.length > numImagens && <div className='bgsetas' onClick={proximaImagem}><RiArrowRightSLine size={30} /></div>}
                </div>
                <div className='images'>
                  {
                    imagensVisiveis.map((image, index) => (
                      <img className='imagescarrossel' key={index} src={image} alt="" onClick={() => setImagemPrincipal(image)} />
                    ))
                  }
                </div>
              </div>
            )
          }
        </div>
        <div className="cardproduto__detalhes">
          <h1>{nome}</h1>
          <div className="cardproduto__detalhes--description">
            <h2>{description}</h2>
          </div>
          {cores.length > 0 && (
            <>
              <p>cores disponíveis:</p>
              <div className="cardproduto__detalhes--cores">
                {
                  cores.map((objetoCor, index) => (
                    <div key={index}>
                      <div className="coresbox" style={{ backgroundColor: objetoCor.color }}></div>
                      <span>{objetoCor.name}</span>
                    </div>
                  ))
                }
              </div>
            </>
          )}
          {pesos.length > 0 && (
            <>
              <p>pesos disponíveis:</p>
              <div className="cardproduto__detalhes--pesos">
                {
                  pesos.map((peso, index) => (
                    <span key={index}>{peso}</span>
                  ))
                }
              </div>
            </>
          )}
          <div className="cardproduto__detalhes--boletins">
            <ButtonAtv link={fds} largura="" nome="fds" />
            <ButtonAtv link={boletim} largura="" nome="boletim técnico" />
          </div>
        </div>
      </div>
    </>
  )
}


//  componente de ser chamado da forma abaixo
//
//  <CardProduto nome="" description="" cores="" pesos="" images="" fds="" boletim=""/>