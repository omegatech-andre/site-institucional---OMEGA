'use client'
import { useState } from 'react'
import './index.scss'
import Formulario from './formulario/Formulario'

export default function Form() {
  const [isSubmited, setIsSubmited] = useState(false)

  return (
    <>
      <div className="form">
        {
          !isSubmited ? (
            <div className="form__content">
              <div className="form__content--left">
                <h1>Quer se tornar um revendedor <strong>ÔMEGA</strong>?</h1>
              </div>
              <div className="form__content--right">
                <Formulario isSubmiting={setIsSubmited}/>
              </div>
            </div>
          ) : (
            <div className="form__content">
              <div className="form__content--leftsucsess">
                <img src="/assets/images/sucsess.png" alt="" />
              </div>
              <div className="form__content--rightsucsess">
                <h3>Seu cadastro foi enviado com sucesso!</h3>
                <p>Agora é com a gente! Seu cadastro foi para análise, entraremos em contato com você dentro de 72 horas</p>
              </div>
            </div>
          )
        }
      </div>
    </>
  )
}

