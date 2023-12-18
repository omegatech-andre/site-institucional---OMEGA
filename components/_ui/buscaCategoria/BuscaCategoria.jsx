'use client'
import useFetch from "@/components/hooks/useFetch";
import CardCategoria from "../cardCategoria/CardCategoria";
import './index.scss'
import { useEffect, useState } from "react";

export default function BuscaCategoria() {
    const { data, isFetching } = useFetch("http://localhost:8080/dataProducts")
    const [fetchFailed, setFetchFailed] = useState(false);

    useEffect(() => {
        if (isFetching) {
            const timer = setTimeout(() => {
                setFetchFailed(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [isFetching]);

    if (fetchFailed) {
        return <div className="buscacategoria__carregando">Não foi passível encontrar os dados</div>
    }

    if (isFetching || !data) {
        return <div className="buscacategoria__carregando">Carregando...</div>
    }
    const line = data.catalog[0].line;

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