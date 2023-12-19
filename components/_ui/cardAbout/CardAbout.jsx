import Image from 'next/image'
import './index.scss'

export default function CardAbout({ description, src, alt, title }) {
const paragrafo = description.split('<br>').map((paragrafo, index) => (
  <p className='paragrafovalores' key={index}>{paragrafo}</p>
))

  return (
    <>
      <div className="cardabout">
        <div className="cardabout__info">
          <p>{paragrafo}</p>
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