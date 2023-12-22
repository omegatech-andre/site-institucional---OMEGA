'use client'
import ButtonAtv from '@/components/_ui/buttonAtv/ButtonAtv'
import './index.scss'
import useFetch from '@/components/hooks/useFetch'
import { IoMdRefresh } from "react-icons/io"

export default function pageBoletimTecnico() {

  const { data, isFetching, error } = useFetch("https://api.omegascreen.com.br/dataProducts")

  return (
    <>
      <div className="pageboletimtecnico">
        <div className="pageboletimtecnico__header">
          <h1>Consulte FISPQ e boletim técnico de todos os produtos</h1>
        </div>
        {
          error ? (
            <div className="pageboletimtecnico__carregando">
              <p>Não foi passível encontrar os dados</p>
              <div>
                <a href={`/boletim-tecnico`}><IoMdRefresh size={30} /></a>
                <p>tentar novamente</p>
              </div>
            </div>
          ) : isFetching || !data ? (
            <div className="pageboletimtecnico__carregando"><p>Carregando...</p></div>
          ) : (
            <div className="pageboletimtecnico__content">
              {data.catalog.map((catalogItem) => {
                let productIndex = 0
                return catalogItem.line.map((lineItem) => (
                  <table key={lineItem._id.$oid}>
                    <thead>
                      <tr className='pageboletimtecnico__tabletop'>
                        <th>{lineItem.name}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {lineItem.category.flatMap((categoryItem) =>
                        categoryItem.product.map((product) => {
                          const rowClass = productIndex % 2 === 0 ? 'tablerowlight' : 'tablerowdark'
                          productIndex++
                          return (
                            <tr className={`pageboletimtecnico__tablecontent ${rowClass}`} key={product._id.$oid}>
                              <td className='pageboletimtecnico__tablecontent--name'>{product.name}</td>
                              <td>
                                <ButtonAtv link={product.fispq} target="_blank" largura="" nome="fispq" />
                                <ButtonAtv link={product.boletim} target="_blank" largura="" nome="boletim tecnico" />
                              </td>
                            </tr>
                          )
                        })
                      )}
                    </tbody>
                  </table>
                ))
              })}
            </div>
          )
        }
      </div>
    </>
  )
}