import Link from 'next/link'
import './index.scss'

export default function CardCanais({ src, name, description, link, cta }) {
  return (
    <>
      <div className="cardcanais">
        <div className="cardcanais__content">
          <img src={src} alt="nossas redes" />
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
        <div className="cardcanais__cta">
          <Link href={`${link}`} target='_blank'><h3>{cta}</h3></Link>
        </div>
      </div>
    </>
  )
}


//  componente de ser chamado da forma abaixo
//
//  <CardCanais src="" name="" description="" link="" cta=""/>