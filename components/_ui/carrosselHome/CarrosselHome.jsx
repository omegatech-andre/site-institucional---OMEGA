'use client'
import './index.scss'
import { data } from '../../mocks/carrosselHome'


export default function CarrosselHome() {
  return (
    <>
      <div className="carrosselhome">
          {data.map((item) => (
              <img key={item.id} className="carrosselslide" src={item.image} alt="imagem" />
          ))}
          {data.map((item) => (
              <img key={item.id} className="carrosselslide" src={item.image} alt="imagem" />
          ))}
      </div>
    </>
  )
}