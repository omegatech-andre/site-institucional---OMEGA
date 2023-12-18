import Link from 'next/link'
import './index.scss'

export default function ButtonAtv({ link, target, largura, nome }) {
    return (
        <>
            <Link href={`${link}`} target={target}>
                <button style={{width: largura}} className='buttonatv' type='button'>{nome}</button>
            </Link>
        </>
    )
}



//  componente de ser chamado da forma abaixo
//
//  <ButtonAtv link="" target="" largura="" nome=""/>