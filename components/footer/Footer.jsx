'use client'
import { SiInstagram, SiLinkedin, SiYoutube, SiTiktok, SiWhatsapp, SiFacebook } from "react-icons/si";
import { SlArrowUpCircle } from "react-icons/sl";
import Image from "next/image";
import './index.scss'
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <div className="indicador"></div>
            <footer>
                <div className="footercontent">
                    <div className="footercontent__footertop">
                        <Image src="/assets/images/logo-footer.png" width={239} height={183} alt=''></Image>
                        <h1>Sua vida com mais cor e intensidade</h1>
                    </div>
                    <div className="footercontent__footermain">
                        <div className="footermain">
                            <div className="footermain__ajuste">
                                <div className="footermain__content">
                                    <div className="footermain__content--box">
                                        <p>INSTITUCIONAL</p>
                                        <ul className="listalinks">
                                            <li><Link href="/institucional">Sobre nós</Link></li>
                                            <li><Link href="/revendedores">Revenda autorizada</Link></li>
                                            <li><Link href="/"><span>Trabalhe conosco</span></Link></li>
                                        </ul>
                                    </div>
                                    <div className="footermain__content--box">
                                        <p>PRODUTOS</p>
                                        <ul className="listalinks">
                                            <li><Link href="/produtos/Linha%20Base%20Água">Linha Base Agua</Link></li>
                                            <li><Link href="/produtos/Linha%20Plastisol">Linha Plastisol</Link></li>
                                            <li><Link href="/produtos/Linha%20Auxiliar">Linha Auxilixar</Link></li>
                                            <li><Link href="/"><span>Exclusividade Silk</span></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="footermain__content">
                                    <div className="footermain__content--box">
                                        <p>SERVIÇOS</p>
                                        <ul className="listalinks">
                                            <li><Link href="/atendimento">Atendimento</Link></li>
                                            <li><Link href="/revenda">Revenda</Link></li>
                                        </ul>
                                    </div>
                                    <div className="footermain__content--box">
                                        <p>APRENDIZAGEM</p>
                                        <ul className="listalinks">
                                            <li><Link href="/padrao-omega">Padrão ÔMEGA</Link></li>
                                            <li><Link href="/estampador-de-sucesso">Estampador de sucesso</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="footermain__content">
                                    <div className="footermain__content--box">
                                        <p>NOSSOS CANAIS</p>
                                        <ul className="listalinks">
                                            <li><Link href="https://www.instagram.com/omegascreen.ind/" target="_blank"><SiInstagram size={20} />Instagram</Link></li>
                                            <li><Link href="https://www.linkedin.com/company/%C3%B4mega-ind%C3%BAstria-e-com%C3%A9rcio-de-tintas-ltda/" target="_blank"><SiLinkedin size={20} />Linkedin</Link></li>
                                            <li><Link href="https://www.youtube.com/channel/UCwd1QoM-ApQ0c1cBZXpJMKQ" target="_blank"><SiYoutube size={20} />Youtube</Link></li>
                                            <li><Link href="https://www.tiktok.com/@omegascreen.ind?is_from_webapp=1&sender_device=pc" target="_blank"><SiTiktok size={20} />Tiktok</Link></li>
                                            <li><Link href="https://wa.me/5581982810058" target="_blank"><SiWhatsapp size={20} />Whatsapp</Link></li>
                                            <li><Link href="https://www.facebook.com/profile.php?id=100086183216972" target="_blank"><SiFacebook size={20} />Facebook</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="footermain__content">
                                <div className="footermain__content--map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d586.912542208539!2d-35.9917155675996!3d-8.276778967093847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a98b23871ee9f7%3A0x665fdd55ce80590f!2s%C3%94mega%20Ind%C3%BAstria%20e%20Com%C3%A9rcio%20de%20Tinta!5e0!3m2!1spt-BR!2sbr!4v1698845339408!5m2!1spt-BR!2sbr" width="400" height="250" loading="lazy"></iframe>
                                    <div className="ajuste__map">
                                        <h1>ÔMEGA SCREEN INDUSTRIA</h1>
                                        <div className="ajuste__map--text"></div>
                                        <p>Rua Ayrton Senna 65 - Boa Vista - Caruaru - PE</p>
                                        <p>CEP 55038-730</p>
                                        <p>CNPJ 43.434.708/0001-63</p>
                                        <p><strong>TELEFONE: (81) 2161-1330</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footercontent__footerbottom">
                        <div className="footerbottom">
                            <div className="footerbottom__btnvoltar">
                                <div onClick={(e) => {
                                    e.preventDefault()
                                    window.scrollTo({top: 0, behavior: 'smooth'})
                                }}>voltar ao início<SlArrowUpCircle size={24} /></div>
                            </div>
                            <div className="footerbottom__termos">
                                <Link className="footerbottom__termos--link" href="/">Termos</Link> | <Link className="footerbottom__termos--link" href="/">Privacidade</Link>
                            </div>
                            <p className="footerbottom__direitos">© 2021 - 2023 ÔmegaScreen. Todos os direitos reservados</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}