import './index.scss'

export default function CardRevendedores({ src, nome, rua, cidade, tel}) {
  return (
    <>
      <div className="cardrevendedores">
        <div className="cardrevendedores__content">
          <img src={src} alt="Logo do revendedor" />
        </div>
        <h1>{nome}</h1>
        <p>{rua}</p>
        <p>{cidade}</p>
        <p>{tel}</p>
      </div>
    </>
  )
}


//  componente de ser chamado da forma abaixo
//
//  <CardRevendedores src="" nome="" rua="" cidade="" tel=""/>