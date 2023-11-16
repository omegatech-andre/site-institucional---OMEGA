import './index.scss'
import '../styles/variables/_variables.scss'
import Form from '@/components/_ui/form/Form'
import YouTube from '@/components/_ui/youtube/youTube'

export default function Page() {
  return (
    <>
      <main className="mainhome">
        <div className="mainhome__indicador"></div>
        <div className="mainhome__content">
        </div>
        <YouTube/>
      </main>
    </>
  )
}