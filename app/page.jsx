import './index.scss'
import '../styles/variables/_variables.scss'
import EstampadorDeSucesso from '@/components/_ui/estampadorDeSucesso/EstampadorDeSucesso'

export default function Page() {
  return (
    <main className="mainhome">
      <div className="mainhome__indicador"></div>
      <div className="mainhome__content">
        <EstampadorDeSucesso/>
      </div>
    </main>
  )
}