import ButtonSection from "../buttonSection/ButtonSection";
import './index.scss'

export default function GroupBtnSec() {
    return (
        <>
            <section className="groupbtnsec">
                <div className="groupbtnsec__btns">
                    <ButtonSection
                        link="/institucional"
                        cor="#c90000"
                        src="/assets/icons/institucional.png"
                        alt="institucional"
                        titulo="institucional"
                    />
                    <ButtonSection
                        link="/estampador-de-sucesso"
                        cor="#4ee98c"
                        src="/assets/icons/estampador-de-sucesso.png"
                        alt="estampador"
                        titulo="estampador de sucesso"
                    />
                    <ButtonSection
                        link="/produto"
                        cor="#e9c64e"
                        src="/assets/icons/produto.png"
                        alt="produto"
                        titulo="produto"
                    />
                    <ButtonSection
                        link="/padrao-omega"
                        cor="#4e8ce9"
                        src="/assets/icons/padrao-omega.png"
                        alt="padrão ômega"
                        titulo="padrão ômega"
                    />
                    <ButtonSection
                        link="/revenda"
                        cor="#009a19"
                        src="/assets/icons/revenda.png"
                        alt="revenda"
                        titulo="revenda"
                    />
                    <ButtonSection
                        link="/atendimento"
                        cor="#e94e4e"
                        src="/assets/icons/atendimento.png"
                        alt="atendimento"
                        titulo="atendimento"
                    />
                    <ButtonSection
                        link="/nossos-canais"
                        cor="#0032b2"
                        src="/assets/icons/nossos-canais.png"
                        alt="nossos canais"
                        titulo="nossos canais"
                    />
                </div>
            </section>
        </>
    )
}