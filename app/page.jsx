import './index.scss'
import '../styles/variables/_variables.scss'
import BuscaCategoria from '@/components/_ui/buscaCategoria/BuscaCategoria'
import BuscaDireta from '@/components/_ui/buscaDireta/BuscaDireta'

export default function Page() {
  return (
    <main className="mainhome">
      <div className="mainhome__indicador"></div>
      <div className="mainhome__content">
      </div>
    </main>
  )
}