import Image from "next/image"
import './index.scss'
import ButtonAtv from "../buttonAtv/ButtonAtv"
import CarrosselEstampador from "../estampadorCarrossel/CarrosselEstampador"

export default function EstampadorDeSucesso() {
    return (
        <>
            <div className="carroestamp">
                <section className="estampador">
                    <CarrosselEstampador />
                    <div className="estampador__cta">
                        <Image src="/assets/images/logo-estampador-de-sucesso.png" width={200} height={130} alt=''></Image>
                        <h1 className="description-hidden">A capacitação do estampador é um dos lados sociais da nossa indústria, formamos em nosso C.T (Centro de Treinamento) Estampadores de Sucesso, contribuindo no desenvolvimento do mercado serigráfico!</h1>
                        <ButtonAtv link="" largura="" nome="quero participar" />
                    </div>
                </section>
            </div>
        </>
    )
}