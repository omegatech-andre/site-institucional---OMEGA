import './index.scss'
import '../styles/variables/_variables.scss'
import Footer from '@/components/footer/Footer'

export default function Page() {
  return (
    <>
      <main className="mainhome">
        <div className="mainhome__indicador"></div>
        <div className="mainhome__content">
        </div>
      </main>
      <Footer/>
    </>
  )
}