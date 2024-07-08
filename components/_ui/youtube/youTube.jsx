import './index.scss'
import ButtonAtv from '../buttonAtv/ButtonAtv'

export default function YouTube() {
  return(
    <>
      <div className="youtube">
        <video src="bgMovieYoutube.mp4" muted loop autoPlay></video>
        <div className="youtube__content">
          <h1>Conheça nosso canal do Youtube</h1>
          <p>Em nosso canal temos conteúdos sobre serigrafia, esclarecendo as principais dúvidas do mundo silk.</p>
          <p>Se você deseja tirar dúvidas sobre serigrafia, clique aqui e conheça o canal mais intenso.</p>
          <ButtonAtv
          link="https://www.youtube.com/channel/UCwd1QoM-ApQ0c1cBZXpJMKQ"
          largura=""
          nome="inscreva-se no nosso canal"
          />
        </div>
      </div>
    </>
  )
}