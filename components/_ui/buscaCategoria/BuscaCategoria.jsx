import CardCategoria from "../cardCategoria/CardCategoria";
import './index.scss'

export default function BuscaCategoria() {
    return (
        <>
            <div className="buscacategoria">
                <div className="buscacategoria__content">
                    <p className="buscacategoria__content--paragrafo">Confira as nossas linhas de produto</p>
                    <div className="buscacategoria__content--secbtn">
                        <CardCategoria
                        link="/produto/baseagua"
                        image="/assets/images/linha-baseagua.png"
                        titulo="linha base água"
                        />
                        <CardCategoria
                        link="/produto/plastisol"
                        image="/assets/images/linha-plastisol.png"
                        titulo="linha plastisol"
                        />
                        <CardCategoria
                        link="/produto/auxiliar"
                        image="/assets/images/linha-auxiliar.png"
                        titulo="linha auxiliar"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}