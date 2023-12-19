'use client'
import './index.scss'
import '../../styles/variables/_variables.scss'
import Image from 'next/image'
import CarrosselHome from '@/components/_ui/carrosselHome/CarrosselHome'
import BuscaDireta from '@/components/_ui/buscaDireta/BuscaDireta'
import YouTube from '@/components/_ui/youtube/youTube'
import EstampadorDeSucesso from '@/components/_ui/estampadorDeSucesso/EstampadorDeSucesso'
import Revenda from '@/components/_ui/revenda/Revenda'

export default function Page() {
  return (
    <>
      <main className="mainhome">
        <div className="indicador"></div>
        <div className="mainhome__content">
          <h1>Levar mais cor e intensidade  é a nossa missão</h1>
          <div className="mainhome__content--imgs">
            <Image className='imgmenor' src='/assets/images/home-img3.jpg' width={260} height={330} alt=''></Image>
            <Image className='imgmaior' src='/assets/images/home-img1.jpg' width={330} height={410} alt=''></Image>
            <Image className='imgmenor' src='/assets/images/home-img2.jpg' width={260} height={330} alt=''></Image>
          </div>
          <div className="mainhome__content--carrossel">
            <h2>Disponibilizamos de uma qualidade de alto padrão para as estampas dos nossos clientes e parceiros! Assim, mantendo o padrão Ômega com mais cor e intensidade.</h2>
            <div className='mainhomecarrossel'>
              <div className="mainhomecarrossel__content">
                <h3>Descubra a tinta ideal para cada estampa que deseja desenvolver</h3>
              </div>
              <CarrosselHome />
            </div>
          </div>
        </div>
        <YouTube/>
        <EstampadorDeSucesso/>
        <Revenda/>
      </main>
    </>
  )
}