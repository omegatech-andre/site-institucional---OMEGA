'use client'
import useFetch from "@/components/hooks/useFetch";
import CardCategoria from "../cardCategoria/CardCategoria";
import './index.scss'
import { IoMdRefresh } from "react-icons/io";

export default function BuscaCategoria() {
    const { data, isFetching, error } = useFetch("https://site-institucional-omega-data.vercel.app/dataProducts")

    if (error) {
        return (
            <>
                <div className="buscacategoria__carregando">
                    <p>Não foi passível encontrar os dados</p>
                    <div>
                        <a href="/produto"><IoMdRefresh size={30} /></a>
                        <p>tentar novamente</p>
                    </div>
                </div>
            </>
        )
    }

    if (isFetching || !data) {
        return <div className="buscacategoria__carregando"><p>Carregando...</p></div>
    }

    const line = data.catalog[0].line;

    console.log('data', data)

    return (
        <>
            <div className="buscacategoria">
                <div className="buscacategoria__content">
                    <p className="buscacategoria__content--paragrafo">Confira as nossas linhas de produto</p>
                    <div className="buscacategoria__content--secbtn">
                        {
                            line.map((line, index) => (
                                <CardCategoria
                                    key={index}
                                    link={`/produtos/${encodeURIComponent(line.name)}`}
                                    image={line.image}
                                    titulo={line.name}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

// {`/produtos/${encodeURIComponent(linha.name)}`}