import Image from "next/image";
import './index.scss'

export default function CarrosselEstampador() {
    return (
        <>
            <section className="carrosselestampador">
                <div className="carrosselestampador__content">
                    <div className="carrosselestampador__content--slide">
                        <Image
                            src="/assets/images/carrossel-foto1.png"
                            width={500}
                            height={500}
                            alt="turma estampador de sucesso"
                        ></Image>
                        <Image
                            src="/assets/images/carrossel-foto2.png"
                            width={500}
                            height={500}
                            alt="turma estampador de sucesso"
                        ></Image>
                        <Image
                            src="/assets/images/carrossel-foto3.png"
                            width={500}
                            height={500}
                            alt="turma estampador de sucesso"
                        ></Image>
                        <Image
                            src="/assets/images/carrossel-foto4.png"
                            width={500}
                            height={500}
                            alt="turma estampador de sucesso"
                        ></Image>
                        <Image
                            src="/assets/images/carrossel-foto5.png"
                            width={500}
                            height={500}
                            alt="turma estampador de sucesso"
                        ></Image>
                        <Image
                            src="/assets/images/carrossel-foto6.png"
                            width={500}
                            height={500}
                            alt="turma estampador de sucesso"
                        ></Image>
                    </div>
                    <div className="carrosselestampador__content--slide">
                        <Image
                            src="/assets/images/carrossel-foto1.png"
                            width={500}
                            height={500}
                            alt="turma estampador de sucesso"
                        ></Image>
                        <Image
                            src="/assets/images/carrossel-foto2.png"
                            width={500}
                            height={500}
                            alt="turma estampador de sucesso"
                        ></Image>
                        <Image
                            src="/assets/images/carrossel-foto3.png"
                            width={500}
                            height={500}
                            alt="turma estampador de sucesso"
                        ></Image>
                        <Image
                            src="/assets/images/carrossel-foto4.png"
                            width={500}
                            height={500}
                            alt="turma estampador de sucesso"
                        ></Image>
                        <Image
                            src="/assets/images/carrossel-foto5.png"
                            width={500}
                            height={500}
                            alt="turma estampador de sucesso"
                        ></Image>
                        <Image
                            src="/assets/images/carrossel-foto6.png"
                            width={500}
                            height={500}
                            alt="turma estampador de sucesso"
                        ></Image>
                    </div>
                </div>
            </section>
        </>
    )
}