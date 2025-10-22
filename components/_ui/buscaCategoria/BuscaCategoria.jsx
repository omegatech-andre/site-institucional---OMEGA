"use client";
import useFetch from "@/components/hooks/useFetch";
import CardCategoria from "../cardCategoria/CardCategoria";
import "./index.scss";
import { IoMdRefresh } from "react-icons/io";

export default function BuscaCategoria() {
  const { data, isFetching, error } = useFetch(
    `${process.env.NEXT_PUBLIC_API_URL}/dataProducts`
  );

  if (error) {
    return (
      <>
        <div className="buscacategoria__carregando">
          <p>Não foi passível encontrar os dados</p>
          <div>
            <a href="/produto">
              <IoMdRefresh size={30} />
            </a>
            <p>tentar novamente</p>
          </div>
        </div>
      </>
    );
  }

  if (isFetching || !data) {
    return (
      <div className="buscacategoria__carregando">
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <>
      <div className="buscacategoria">
        <div className="buscacategoria__content">
          <p className="buscacategoria__content--paragrafo">
            Confira as nossas linhas de produto
          </p>
          <div className="buscacategoria__content--secbtn">
            {data.catalog.map((catalogItem) => {
              return catalogItem.line.map((lineItem, index) => (
                <CardCategoria
                  key={index}
                  link={`/produtos/${encodeURIComponent(lineItem.name)}`}
                  image={lineItem.image}
                  titulo={lineItem.name}
                />
              ));
            })}
          </div>
        </div>
      </div>
    </>
  );
}
