'use client'
import Image from "next/image"
import './index.scss'
import Form from "../form/Form"
import { useState } from "react"

export default function Revenda() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <section className="revenda">
                <div className="revenda__content">
                    <div className="revenda__content--img">
                        <Image
                            src="/assets/icons/revenda.png"
                            width={500}
                            height={500}
                            alt="erro"
                        >
                        </Image>
                    </div>
                    <div className="revenda__content--text">
                        <h1>Quer revender o padrão mais intenso?</h1>
                        <p>Clique no botão abaixo</p>
                        <button onClick={() => setOpen(!open)}>Tenha mais cor e intensidade</button>
                    </div>
                </div>
            </section>
            {open && <Form />}
        </>
    )
}