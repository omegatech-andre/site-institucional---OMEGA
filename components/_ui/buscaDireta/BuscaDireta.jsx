import ButtonAtv from "../buttonAtv/ButtonAtv"
import './index.scss'

export default function BuscaDireta() {
    return (
        <>
            <section className="buscadireta">
                <div className="buscadireta__content">
                    <h1>O que suas estampas precisam?</h1>
                    <p>Selecione o resultado que deseja para suas estampas</p>
                    <div className="buscadireta__content--btns">
                        <ButtonAtv
                            link=""
                            largura=""
                            nome="brilho intenso"
                        />
                        <ButtonAtv
                            link=""
                            largura=""
                            nome="alta cobertura"
                        />
                        <ButtonAtv
                            link=""
                            largura=""
                            nome="relevo definido"
                        />
                        <ButtonAtv
                            link=""
                            largura=""
                            nome="zero toque"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}