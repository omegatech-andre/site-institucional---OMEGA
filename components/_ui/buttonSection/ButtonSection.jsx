import Image from "next/image";
import Link from "next/link";
import './index.scss'

export default function ButtonSection({ link, cor, src, alt, titulo }) {
    return (
        <>
            <Link href={`${link}`}>
                <div className="buttonsection">
                    <div className="buttonsection__content">
                        <Image
                            src={src}
                            width={500}
                            height={500}
                            alt={alt}
                        >
                        </Image>
                        <h1>{titulo}</h1>
                    </div>
                    <div className="buttonsection__cor" style={{ backgroundColor: cor }}></div>
                </div>
            </Link>
        </>
    )
}



//  componente de ser chamado da forma abaixo
//
//  <ButtonSection link="" cor="" src="" alt="" titulo=""/>