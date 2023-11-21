'use client'
import './index.scss'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import Image from 'next/image'
import GroupBtnHeader from '../groupBtnHeader/GroupBtnHeader'
import Link from 'next/link'


export default function HeaderSec() {
  const data = [
    {
      id: '1',
      image: '/assets/images/carrossel-plastisol.png'
    },
    {
      id: '2',
      image: '/assets/images/carrossel-plastiflex.png'
    },
    {
      id: '3',
      image: '/assets/images/carrossel-linhafluor.png'
    },
    {
      id: '4',
      image: '/assets/images/carrossel-plastiflex.png'
    },
  ]

  return (
    <>
      <div className="headersec">
        <div className="headersec__top">
          <Link href="#"><button>Boletim técnico</button></Link>
        </div>
        <div className="headersec__mid">
          <div className="headersec__mid--images">
            <div className="headersec__mid--text">
              <Image className='imagelogo' src="/assets/images/logo-header.png" width={330} height={330}></Image>
              <h1>SOMOS A ÔMEGA</h1>
              <h2>A Ômega é uma indústria especializada em tintas serigráficas, produzindo esse padrão desde 2021 é referência em Pernambuco.</h2>
            </div>
            <Splide
              options={{
                type: 'loop',
                autoplay: true,
                pauseOnHover: false,
              }}
            >
              {data.map((item) => (
                <SplideSlide key={item.id}>
                  <img className='imageslide' src={item.image} alt="" />
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
        <div className="headersec__bot">
          <GroupBtnHeader/>
        </div>
      </div>
    </>
  )
}