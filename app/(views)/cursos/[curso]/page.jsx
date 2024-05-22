import Image from "next/image"
import "./index.scss"
import MainEstampador from "@/components/_ui/estampadorDeSucesso/mainEstampador/MainEstampador"

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
      </div>
    </>
  )
}