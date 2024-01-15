import Image from 'next/image'
import './index.scss'

export default function CardAbout({ description, src, alt, title }) {
const paragrafo = description.split('<br>').map((paragrafo, index) => (
  <div className='paragrafovalores' key={index}>{paragrafo}</div>
))

  return (
    <>
      <div className="cardabout">
        <div className="cardabout__info">
          <span>{paragrafo}</span>
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