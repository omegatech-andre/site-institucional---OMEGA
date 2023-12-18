'use client'
import './index.scss'
import { useEffect, useState } from 'react'
import CardProduto from '@/components/_ui/cardProduto/CardProduto'
import CardCategoria from '@/components/_ui/cardCategoria/CardCategoria'
import useFetch from '@/components/hooks/useFetch'

const FIRST_ELEMENT = 0;

export default function PageProdutos({ params }) {
  const [linhaEscolhida, setLinhaEscolhida] = useState(decodeURIComponent(params.categoria))
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('')
  const [produtoSelecionado, setProdutoSelecionado] = useState('')
  const [produtoParaBuscar, setProdutoParaBuscar] = useState(null)

  const { data, isFetching} = useFetch("http://localhost:8080/dataProducts")

  useEffect(() => {
    setProdutoSelecionado('')
  }, [categoriaSelecionada])
  

  if(isFetching || !data){
    return <div className='pageprodutos__carregando'>aguardando...</div>
  }
  
  const linhaAtual = findLine(data.catalog[FIRST_ELEMENT].line, linhaEscolhida)
  const categoriaAtual = findCategory(linhaAtual?.category, categoriaSelecionada)
  const produtoAtual = findProduct(categoriaAtual?.product, produtoParaBuscar)
  const outrasLinhas = filterOtherLines(data.catalog[FIRST_ELEMENT].line, linhaEscolhida)

  return (
    <>
      <div className="pageprodutos">
        <div className="pageprodutos__bg">
          <div className="pageprodutos__bg--titulo">
            <h1>{linhaAtual.name}</h1>
          </div>
          <img src={linhaAtual.image} alt="" />
        </div>
        <div className="pageprodutos__content">
          <h1>Selecione o produto que deseja</h1>
          <div>
            <select value={categoriaSelecionada} onChange={(e) => setCategoriaSelecionada(e.target.value)}>
              <option disabled style={{ color: '#d9d9d9' }} value=''>selecione uma categoria</option>
              {
                linhaAtual.category.map((category, index) => (
                  <option key={index} value={category.name}>{category.name}</option>
                ))
              }
            </select>
            <select value={produtoSelecionado} onChange={(e) => setProdutoSelecionado(e.target.value)}>
              <option disabled style={{ color: '#d9d9d9' }} value=''>selecione um produto</option>
              {
                categoriaAtual?.product.map((product, index) => (
                  <option key={index} value={product.name}>{product.name}</option>
                ))
              }
            </select>
            <button onClick={() => setProdutoParaBuscar(produtoSelecionado)}>buscar produto</button>
          </div>
        </div>
        {
          !produtoAtual ? (
            <div className="pageprodutos__aguardando">
              <h1>Selecione uma categoria e um produto acima</h1>
            </div>
          ) : (
            <div className="pageprodutos__resposta">
              <CardProduto
                nome={produtoAtual.name}
                description={produtoAtual.description}
                cores={produtoAtual.colors}
                pesos={produtoAtual.sizes}
                images={produtoAtual.image}
                fispq={produtoAtual.fispq}
                boletim={produtoAtual.boletim}
              />
            </div>
          )
        }
        <div className="navegacaolinhas">
          <h2>Confira as nossas linhas de produto</h2>
          <div className="navegacaolinhas__content">
            {
              outrasLinhas.map((line, index) => (
                <CardCategoria
                  key={index}
                  link={`/produtos/${encodeURIComponent(line.name)}`}
                  image={line.image}
                  titulo={line.name}
                />
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

function findLine(lines, chosenLine) {
  return lines.find(line => line.name === chosenLine)
}

function findCategory(categories, chosenCategory) {
  return categories?.find(category => category.name === chosenCategory)
}

function findProduct(products, productToSearch) {
  return products?.find(product => product.name === productToSearch)
}

function filterOtherLines(lines, chosenLine) {
  return lines.filter(line => line.name !== chosenLine)
}