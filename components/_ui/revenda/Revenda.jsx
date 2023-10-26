import Image from "next/image";
import ButtonAtv from "../buttonAtv/ButtonAtv";
import './index.scss'

export default function Revenda() {
    return (
        <>
            <section className="revenda">
                <div className="revenda__content">
                    <div className="revenda__content--img">
                        <Image
                            src="/assets/icons/revenda.png"
                            width={500}
                            height={500}
                            alt="erro"
                        >
                        </Image>
                    </div>
                    <div className="revenda__content--text">
                        <h1>Quer revender o padrão mais intenso?</h1>
                        <p>Clique no botão abaixo</p>
                        <ButtonAtv
                            link=""
                            largura=""
                            nome="tenha mais cor e intensidade"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}