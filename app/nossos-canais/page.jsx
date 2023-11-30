import './index.scss'
import { data } from '../../components/mocks/nossosCanais'
import CardCanais from '@/components/_ui/cardCanais/CardCanais'

export default function PageNossosCanais() {
  return (
    <>
      <div className="pagenossoscanais">
        <div className="pagenossoscanais__indicador"></div>
        <div className="pagenossoscanais__content">
          <h1>Saiba onde nos encontrar e fique por dentro de todas as novidades</h1>
        </div>
        <div className="pagenossoscanais__box">
          {data.map((item) => (
            <CardCanais
              key={item.id}
              src={item.image}
              name={item.nome}
              description={item.description}
              link={item.link}
              cta={item.cta}
            />
          ))}
        </div>
      </div>
    </>
  )
}