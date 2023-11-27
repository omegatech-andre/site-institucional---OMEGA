import Image from 'next/image'
import './index.scss'

export default function CardAbout({ description, src, alt, title }) {
  return (
    <>
      <div className="cardabout">
        <div className="cardabout__info">
          <p>{description}</p>
        </div>
        <div className="cardabout__img">
          <Image
            src={src}
            width={300}
            height={400}
            alt={alt}
          />
        </div>
        <div className="cardabout__title">
          <h2>{title}</h2>
        </div>
      </div>
    </>
  )
}



//  componente de ser chamado da forma abaixo
//
//  <CardAbout description="" src="" alt="" title=""/>