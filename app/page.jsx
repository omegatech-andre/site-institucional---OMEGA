import './index.scss'
import '../styles/variables/_variables.scss'
import Revenda from '@/components/_ui/revenda/Revenda'
import BuscaDireta from '@/components/_ui/buscaDireta/BuscaDireta'

export default function Page() {
  return (
    <main className="mainhome">
      <div className="mainhome__indicador"></div>
      <div className="mainhome__content">
        <Revenda/>
      </div>
    </main>
  )
}