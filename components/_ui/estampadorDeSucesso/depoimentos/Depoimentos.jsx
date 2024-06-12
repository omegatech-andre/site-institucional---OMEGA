import CardComments from './card/CardComments'
import './index.scss'

export default function Depoimentos() {
  return (
    <>
    <div className="depoimentos">
      <h1>Confira os <span>depoimentos</span> dos nossos alunos</h1>
      <div className="depoimentos__content">
        <CardComments />
      </div>
    </div>
    </>
  )
}