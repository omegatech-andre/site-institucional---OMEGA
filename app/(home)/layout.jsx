import Header from '@/components/header/Header'
import '../../styles/globals.scss'
import Footer from '@/components/footer/Footer'

export default function HomeLayout({ children }) {

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}