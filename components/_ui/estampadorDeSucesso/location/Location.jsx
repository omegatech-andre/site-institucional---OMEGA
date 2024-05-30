import Image from 'next/image'
import './index.scss'
import ButtonAtv from '../../buttonAtv/ButtonAtv'

export default function Location() {
  return (
    <>
      <div className="location">
        <div className="location__content">
          <Image
            src='/assets/images/turmas.png'
            width={635}
            height={547}
            alt='location'
          ></Image>
          <div className="location__info">
            <h1><span>Onde</span> vai acontecer?</h1>
            <p>O curso <strong><span>Estampador de Sucesso</span></strong> acontece na Indústria Ômega, onde temos um espaço exclusivo para realizar treinamentos para clientes e alunos, em nosso C.T.</p>
            <p><strong><span>Rua Ayrton Senna, 65 - Maria Auxiliadora - Caruaru PE</span></strong></p>
            <div className="info__btn">
              <ButtonAtv link="https://maps.app.goo.gl/TA7Kv7GLcRcYRo8w9" target="_blank" largura="35rem" nome="Localize o time ÔMEGA" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}