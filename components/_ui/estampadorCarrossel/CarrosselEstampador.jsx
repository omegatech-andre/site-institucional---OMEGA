import './index.scss'
import Image from "next/image"
import { data } from '../../mocks/carrosselEstampador'

export default function CarrosselEstampador() {
    return (
        <>
            <section className="carrosselestampador">
                <div className="carrosselestampador__content">
                    <div className="carrosselestampador__content--slide">
                        {data.map((item) => (
                            <Image
                                key={item.id}
                                src={item.image}
                                width={500}
                                height={500}
                                alt="turma estampador de sucesso"
                            />
                        ))}
                    </div>
                    <div className="carrosselestampador__content--slide">
                        {data.map((item) => (
                            <Image
                                key={item.id}
                                src={item.image}
                                width={500}
                                height={500}
                                alt="turma estampador de sucesso"
                            />
                        ))}
                    </div>
                    <div className="carrosselestampador__content--slide">
                        {data.map((item) => (
                            <Image
                                key={item.id}
                                src={item.image}
                                width={500}
                                height={500}
                                alt="turma estampador de sucesso"
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}