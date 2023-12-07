'use client'
import './index.scss'
import { revendedores } from '../../../components/mocks/revendedores'
import { useState } from 'react'
import CardRevendedores from '@/components/_ui/cardRevendedores/CardRevendedores'

export default function PageRevendedores() {
  const [estadoSelecionado, setEstadoSelecionado] = useState(null)
  const [estadoParaBuscar, setEstadoParaBuscar] = useState(null)
  
  const estadoObj = revendedores.estados.find(estado => estado.nome === estadoParaBuscar)

  return (
    <>
      <div className="pagerevendedores">
        <div className="pagerevendedores__bg">
          <img src="/assets/images/bg-revendedores.png" alt="" />
        </div>
        <div className="pagerevendedores__content">
          <h1>Selecione o estado que deseja </h1>
          <div>
            <select onChange={(e) => setEstadoSelecionado(e.target.value)}>
              <option value=''>Selecione um estado</option>
              {
                revendedores.estados.map((estado) => (
                  <option key={estado.nome} value={estado.nome}>{estado.nome}</option>
                ))
              }
            </select>
            <button onClick={() => setEstadoParaBuscar(estadoSelecionado)}>procurar</button>
          </div>
        </div>
        {
          !estadoParaBuscar ? (
            <div className='pagerevendedores__aguardando'>
              <h1>Selecione um estado acima</h1>
            </div>
          ) : (
            <div className="pagerevendedores__resposta">
              {
                estadoObj.revendedor.map((item) => (
                  <CardRevendedores
                    key={item.id}
                    src={item.imagem}
                    nome={item.nome}
                    rua={item.endereco}
                    cidade={item.cidade}
                    tel={item.tel}
                  />
                ))
              }
            </div>
          )
        }
      </div>
    </>
  )
}