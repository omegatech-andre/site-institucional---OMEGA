import Link from 'next/link'
import './index.scss'

export default function ButtonAtv({ link, target, largura, nome }) {
    return (
        <>
            {link ? (
                <Link href={`${link}`} target={target}>
                    <button style={{width: largura}} className='buttonatv' type='button'>{nome}</button>
                </Link>
            ) : (
                <button style={{width: largura}} className='buttonatv__disabled' type='button' disabled>{nome}</button>
            )}
        </>
    )
}
//
//
//  componente de ser chamado da forma abaixo
//
//  <ButtonAtv link="" target="" largura="" nome=""/>