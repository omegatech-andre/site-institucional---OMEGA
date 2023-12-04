'use client'
import './index.scss'
import { useState } from 'react'
import { data } from '../../mocks/perguntasFrequentes'

export default function FaqArea() {
  const [openContent, setOpenContent] = useState(null)

  const handleClick = (id) => {
    setOpenContent(prevState => prevState === id ? null : id)
  }

  return (
    <>
      <div className="faqarea">
        <p>Perguntas frequentes</p>
        {data.map((item) => (
          <div className="faqarea__content" key={item.id}>
            <div className="faqarea__contenttitle" onClick={() => handleClick(item.id)}>
              <h1>{item.pergunta}</h1>
              {
                openContent === item.id ?
                <span>-</span> : <span>+</span>
              }
            </div>
            {
              openContent === item.id &&
              <div className="faqarea__contentcontent">
                <h2>{item.resposta}</h2>
              </div>
            }
          </div>
        ))}
      </div>
    </>
  )
}