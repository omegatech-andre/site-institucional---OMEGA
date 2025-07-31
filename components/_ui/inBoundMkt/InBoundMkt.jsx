"use client";
import React, { useEffect, useState } from "react";
import "./index.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schemaManual } from "@/components/schema/schemaManual";
import Link from "next/link";

export default function InBoundMkt() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schemaManual),
  });

  const [isVisible, setIsVisible] = useState(false);
  const [posted, setPosted] = useState(false);
  const [data, setData] = useState(null);
  const [isPosting, setIsPosting] = useState(false);
  const [isPosted, setIsPosted] = useState(false);
  const [error, setError] = useState(null);

  const submitForm = (formData) => {
    setData(formData);
    setPosted(true);
  };

  const resetPage = () => {
    setTimeout(() => window.location.reload(), 1000);
  };

  useEffect(() => {
    if (posted && data) {
      const postData = async () => {
        try {
          setIsPosting(true);
          setError(null);

          const payload = {
            ...data,
            created_at: new Date().toISOString().split("T")[0],
          };

          const response = await fetch(
            "https://sheetdb.io/api/v1/tfzirgx9wvfk1",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(payload),
            }
          );

          if (!response.ok) throw new Error("Erro ao enviar dados");
          setIsPosted(true);
        } catch (err) {
          console.error(err);
          setError(err);
        } finally {
          setIsPosting(false);
          setPosted(false);
        }
      };

      postData();
    }
  }, [posted, data]);

  if (error) {
    return (
      <div className="inboundmkt">
        <img
          className={isVisible ? "btnvisible" : "btnhidden"}
          onClick={() => setIsVisible(!isVisible)}
          src={
            isVisible
              ? "/assets/icons/inboundmkton.png"
              : "/assets/icons/inboundmktoff.png"
          }
          alt=""
        />
        {isVisible && (
          <div className="inboundmktmodal">
            <div className="inboundmktmodal__content">
              <p>Não foi possível completar o download</p>
              <input
                className="btnenviar"
                type="button"
                value="tentar novamente"
                onClick={resetPage}
              />
            </div>
          </div>
        )}
      </div>
    );
  }

  if (isPosting) {
    return (
      <div className="inboundmkt">
        <img
          className={isVisible ? "btnvisible" : "btnhidden"}
          onClick={() => setIsVisible(!isVisible)}
          src={
            isVisible
              ? "/assets/icons/inboundmkton.png"
              : "/assets/icons/inboundmktoff.png"
          }
          alt=""
        />
        {isVisible && (
          <div className="inboundmktmodal">
            <div className="inboundmktmodal__content">
              <p>Só um momento...</p>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (isPosted) {
    return (
      <div className="inboundmkt">
        <img
          className={isVisible ? "btnvisible" : "btnhidden"}
          onClick={() => setIsVisible(!isVisible)}
          src={
            isVisible
              ? "/assets/icons/inboundmkton.png"
              : "/assets/icons/inboundmktoff.png"
          }
          alt=""
        />
        {isVisible && (
          <div className="inboundmktmodal">
            <div className="inboundmktmodal__content">
              <p>Receba o Manual clicando no botão abaixo</p>
              <Link
                href="https://raw.githubusercontent.com/omegatech-andre/site-institucional---OMEGA-data/835f62b7491c85d98066589a306427bff1ed45d0/public/dataProducts/manual-das-tintas---OMEGA.pdf"
                target="_blank"
              >
                <input
                  className="btnenviar"
                  type="submit"
                  value="baixar manual"
                  onClick={resetPage}
                />
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="inboundmkt">
      <img
        className={isVisible ? "btnvisible" : "btnhidden"}
        onClick={() => setIsVisible(!isVisible)}
        src={
          isVisible
            ? "/assets/icons/inboundmkton.png"
            : "/assets/icons/inboundmktoff.png"
        }
        alt=""
      />
      {isVisible && (
        <div className="inboundmktmodal">
          <div className="inboundmktmodal__content">
            <p>Conheça o Manual das Tintas Ômega</p>
            <form onSubmit={handleSubmit(submitForm)}>
              <input {...register("nome")} type="text" placeholder="Nome" />
              {errors.nome && <span>{errors.nome.message}</span>}

              <input
                {...register("telefone")}
                type="text"
                placeholder="Telefone"
                minLength={11}
                maxLength={11}
              />
              {errors.telefone && <span>{errors.telefone.message}</span>}

              <input {...register("email")} type="email" placeholder="E-mail" />
              {errors.email && <span>{errors.email.message}</span>}

              <input
                className="btnenviar"
                type="submit"
                value="quero o manual"
              />
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
