'use client'
import './index.scss'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import Image from 'next/image'
import GroupBtnHeader from '../groupBtnHeader/GroupBtnHeader'
import Link from 'next/link'
import { data } from '../../mocks/carrosselHeader'


export default function HeaderSec() {
  return (
    <>
      <div className="headersec">
        <div className="headersec__top">
          <Link href="/"><button>Home</button></Link>
          <Link href="/boletim-tecnico"><button>Boletim Técnico</button></Link>
        </div>
        <div className="headersec__mid">
          <div className="headersec__mid--images">
            <div className="headersec__mid--text">
              <Image className='imagelogo' src="/assets/images/logo-header.png" priority width={330} height={330} alt=''></Image>
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
                  <img className='imageslide' src={item.image} alt="imagem" />
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