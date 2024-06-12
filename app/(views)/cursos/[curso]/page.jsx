import "./index.scss"
import Image from "next/image"
import MainEstampador from "@/components/_ui/estampadorDeSucesso/mainEstampador/MainEstampador"
import CardEstampador from "@/components/_ui/estampadorDeSucesso/cardEstampador/cardEstampador"
import Palestrante from "@/components/_ui/estampadorDeSucesso/palestrante/Palestrante"
import Modulo from "@/components/_ui/estampadorDeSucesso/modulo/Modulo"
import CarrosselEstampador from "@/components/_ui/estampadorCarrossel/CarrosselEstampador"
import Location from "@/components/_ui/estampadorDeSucesso/location/Location"
import Cta from "@/components/_ui/estampadorDeSucesso/cta/Cta"
import Faq from "@/components/_ui/estampadorDeSucesso/faq/Faq"
import Depoimentos from "@/components/_ui/estampadorDeSucesso/depoimentos/Depoimentos"

export default function PageCursos() {
  return (
    <>
      <div className="pagecursos">

        <div className="pagecursos__main">
          <MainEstampador />
          <div className="pagecursos__main--img">
            <Image 
              src="/assets/images/bg-estampador-de-sucesso.jpg"
              width={560}
              height={740}
              alt="foto da turma"
            />
          </div>
        </div>

        <div className="pagecursos__card">
          <CardEstampador />
        </div>

        <div className="pagecursos__palestrante">
          <Palestrante />
        </div>

        <div className="pagecursos__modulo">
          <Modulo />
        </div>

        <div className="pagecursos__carrossel">
          <h1>Confira as <span>turmas</span> do Estampador de Sucesso</h1>
          <CarrosselEstampador />
        </div>

        <div className="pagecursos__depoimentos">
          <Depoimentos />
        </div>

        <div className="pagecursos__location">
          <Location />
        </div>

        <div className="pagecursos__faq">
          <Faq />
        </div>

        <div className="pagecursos__cta">
          <Cta />
        </div>

      </div>
    </>
  )
}