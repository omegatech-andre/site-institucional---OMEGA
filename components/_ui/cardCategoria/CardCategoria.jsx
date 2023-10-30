import Link from 'next/link'
import './index.scss'

export default function CardCategoria({ link, image, titulo }) {
    return (
        <>
            <Link href={`${link}`}>
                <div className="cardcategoria" style={{ backgroundImage: `url(${image})`}}>
                    <h1 className='cardcategoria__titulo'>{titulo}</h1>
                </div>
            </Link>
        </>
    )
}