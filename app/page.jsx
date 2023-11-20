import './index.scss'
import '../styles/variables/_variables.scss'
import Navbar from '@/components/_ui/navBar/Navbar'

export default function Page() {
  return (
    <>
      <main className="mainhome">
        {/* <div className="mainhome__indicador"></div> */}
        <div className="mainhome__content">
        </div>
        <Navbar/>
      </main>
    </>
  )
}