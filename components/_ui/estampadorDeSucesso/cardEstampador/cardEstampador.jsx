import Image from 'next/image'
import './index.scss'

export default function CardEstampador() {
  const card = [
    {
      id: 1,
      img: '/assets/icons/relogio.png',
      alt: 'relogio',
      text: 'Do zero ao avançado',
      description: 'A capacitação totaliza 30 horas. São 02 vezes na semana (terças e quintas) no horario: 9h até 12h.'
    },
    {
      id: 2,
      img: '/assets/icons/chapeu-de-graduacao.png',
      alt: 'chapeu-de-graduacao',
      text: 'Certificado grátis',
      description: `Após a conclusão do curso o aluno recebe um certificado que participou da Capacitação - Estampador de Sucesso.`
    },
    {
      id: 3,
      img: '/assets/icons/marcador.png',
      alt: 'marcador',
      text: 'Aprenda na prática',
      description: 'Todas as aulas são presenciais em nosso Centro de Treinamento (C.T.)'
    },
  ]

  return (
    <>
      <div className="cardestampador">
        {card.map((card) => (
          <div className="cardestampador__card" key={card.id}>
            <Image src={card.img} width={80} height={80} alt={card.alt}></Image>
            <h2>{card.text}</h2>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </>
  )
}