import BuscaCategoria from '@/components/_ui/buscaCategoria/BuscaCategoria'
import './index.scss'
import BuscaDireta from '@/components/_ui/buscaDireta/BuscaDireta'

export default function PageProduto() {
  return (
    <>
      <div className="pageproduto">
        <div className="pageproduto__indicador"></div>
        <div className="pageproduto__content">
          <h1>Com mais cor e intensidade para sua estampa!</h1>
          <h2>Nossas linhas de produtos contam com a qualidade do Padrão Ômega!</h2>
          <p>Navegue por categoria e encontre o produto ideal</p>
        </div>
        <BuscaCategoria/>
        <BuscaDireta/>
      </div>
    </>
  )
}