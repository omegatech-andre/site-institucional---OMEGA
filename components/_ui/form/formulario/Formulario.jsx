"use client";
import "./index.scss";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import axios from "axios";
import { schema } from "@/components/schema/schema";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Formulario({ isSubmiting }) {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
    defaultValues: {
      cep: "",
      uf: "",
      cidade: "",
      endereco: "",
    },
  });

  const [isPosting, setIsPosting] = useState(false);
  const cep = watch("cep");

  useEffect(() => {
    const sanitizedCep = cep?.replace(/\D/g, "");

    if (sanitizedCep?.length === 8) {
      axios
        .get(`https://viacep.com.br/ws/${sanitizedCep}/json/`)
        .then(({ data }) => {
          setValue("uf", data.uf || "");
          setValue("cidade", data.localidade || "");
          setValue("endereco", data.logradouro || "");
        });
    }
  }, [cep, setValue]);

  const submitForm = async (data) => {
    setIsPosting(true);
    try {
      await axios.post(
        "https://api.sheetmonkey.io/form/u897mG5kWchHKrjADKioeZ",
        {
          ...data,
          created_at: new Date().toISOString().split("T")[0],
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      isSubmiting(true);
      reset();
    } catch (error) {
      console.error("Erro ao enviar:", error);
    } finally {
      setIsPosting(false);
    }
  };

  return (
    <div className="formulario">
      <h2>
        Envie o formulário abaixo com suas informações e entraremos em contato
      </h2>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="input__unico">
          <input
            {...register("razaoSocial")}
            type="text"
            placeholder="Razão Social / Nome"
          />
          {errors.razaoSocial && <span>{errors.razaoSocial.message}</span>}
        </div>

        <div className="input__duplo">
          <div>
            <input
              {...register("cnpj")}
              type="text"
              placeholder="CNPJ / CPF"
              maxLength={14}
            />
            {errors.cnpj && <span>{errors.cnpj.message}</span>}
          </div>
          <div>
            <input
              {...register("telFixo")}
              type="tel"
              placeholder="Telefone Fixo"
              maxLength={10}
            />
          </div>
        </div>

        <div className="input__unico">
          <input {...register("email")} type="email" placeholder="E-mail" />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div className="input__unico">
          <input {...register("nome")} type="text" placeholder="Nome" />
        </div>

        <div className="input__duplo">
          <div>
            <input
              {...register("whatsapp")}
              type="tel"
              placeholder="Telefone Whatsapp"
              maxLength={11}
            />
            {errors.whatsapp && <span>{errors.whatsapp.message}</span>}
          </div>
          <div>
            <input
              {...register("telSecundario")}
              type="tel"
              placeholder="Telefone Secundário"
              maxLength={10}
            />
          </div>
        </div>

        <div className="input__triplo">
          <input
            {...register("cep")}
            type="text"
            placeholder="CEP"
            maxLength={9}
          />
          {errors.cep && <span>{errors.cep.message}</span>}

          <input
            {...register("uf")}
            type="text"
            placeholder="UF"
            list="estados"
            autoComplete="off"
          />
          <datalist id="estados">
            {[
              "AC",
              "AL",
              "AP",
              "AM",
              "BA",
              "CE",
              "ES",
              "GO",
              "MA",
              "MT",
              "MS",
              "MG",
              "PA",
              "PB",
              "PR",
              "PE",
              "PI",
              "RJ",
              "RN",
              "RS",
              "RO",
              "RR",
              "SC",
              "SP",
              "SE",
              "TO",
            ].map((uf) => (
              <option key={uf} value={uf} />
            ))}
          </datalist>

          <input {...register("cidade")} type="text" placeholder="Cidade" />
        </div>

        <div className="input__duplo input__duplo--mod">
          <input {...register("endereco")} type="text" placeholder="Endereço" />
          <input {...register("numero")} type="text" placeholder="Número" />
        </div>

        <div className="input__btn">
          <input
            className={isPosting ? "btnenviar__disabled" : "btnenviar"}
            type="submit"
            value={isPosting ? "Enviando..." : "Enviar"}
            disabled={isPosting}
          />
        </div>
      </form>
    </div>
  );
}
