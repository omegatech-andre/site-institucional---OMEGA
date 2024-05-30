'use client'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './index.scss'
import { FaCheckCircle } from "react-icons/fa";

export default function Modulo() {
  const topics = [
    {
      name: 'Criação de uma Estampa'
    },
    {
      name: 'Telas (processo de revelação com qualidade)'
    },
    {
      name: 'Rodo ideal'
    },
    {
      name: 'Tecidos ideais para cada tipo de tinta'
    },
    {
      name: 'Curiosidades sobre a serigrafia'
    },
    {
      name: 'Muito mais...'
    },
  ]

  const pictures = [
    {
      image: '/assets/images/carrossel-estampador-modulos/picture_0.png'
    },
    {
      image: '/assets/images/carrossel-estampador-modulos/picture_1.png'
    },
    {
      image: '/assets/images/carrossel-estampador-modulos/picture_2.png'
    },
    {
      image: '/assets/images/carrossel-estampador-modulos/picture_3.png'
    },
    {
      image: '/assets/images/carrossel-estampador-modulos/picture_4.png'
    },
    {
      image: '/assets/images/carrossel-estampador-modulos/picture_5.png'
    }
  ]

  return (
    <>
      <div className="modulo">
        <h1>O que você irá <span>aprender:</span></h1>
        <div className="modulo__content">
          <div className="modulo__contentleft">
            <p className='p_top'>Em primeiro momento vamos te passar todo conhecimento teórico, logo após, vamos demonstrar toda prática no Centro de Treinamento:</p>
            {topics.map((topic, index) => (
              <div key={index} className="modulo__contentleft--topics">
                <FaCheckCircle size={40} />
                <p>{topic.name}</p>
              </div>
            ))}
          </div>
          <div className="modulo__contentright">
            <Splide
              options={{
                autoplay: true,
                type: 'loop',
                pauseOnHover: true,
                pagination: false
              }}
            >
              {pictures.map((picture, index) => (
                <SplideSlide key={index}>
                  <img className='slide_estampador' src={picture.image} alt="imagem" />
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
        <div className="modulo__content">
          <p className='p_bottom'>Nosso curso foi pensado para que você aluno tenha a formação completa, mesmo que não tenha nenhum conhecimento na área de serigrafia.</p>
        </div>
      </div>
    </>
  )
}