import "./index.scss"
import Image from "next/image"
import MainEstampador from "@/components/_ui/estampadorDeSucesso/mainEstampador/MainEstampador"
import CardEstampador from "@/components/_ui/estampadorDeSucesso/cardEstampador/cardEstampador"
import Palestrante from "@/components/_ui/estampadorDeSucesso/palestrante/Palestrante"

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
        
      </div>
    </>
  )
}