'use client'
import './index.scss'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { schema } from '@/components/schema/schema';
import { yupResolver } from '@hookform/resolvers/yup';


export default function Formulario({ isSubmiting }) {
  const [cep, setCep] = useState('')
  const [uf, setUf] = useState('')
  const [cidade, setCidade] = useState('')
  const [endereco, setEndereco] = useState('')
  const [isFetching, setIsFetching] = useState(true)

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  useEffect(() => {
    if (cep.length === 8) {
      axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then(({ data }) => {
          setUf(data.uf)
          setCidade(data.localidade)
          setEndereco(data.logradouro)
        })
    }
  }, [cep])

  const submitForm = (data) => {
    axios.post('https://api.sheetmonkey.io/form/u897mG5kWchHKrjADKioeZ', data, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(
        setIsFetching(!isFetching)

    )
      .finally(() => {
        setCep('')
        setUf('')
        setCidade('')
        setEndereco('')
        isSubmiting(true)
        reset()
      })
  }


  return (
    <>
      <div className='formulario'>
        <h2>Envie o formulário abaixo com suas informações e entraremos em contato</h2>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className='input__unico'>
            <input
              {...register('razaoSocial')}
              type="text"
              placeholder='Razão Social'
            />
            {errors.razaoSocial && (<span>{errors.razaoSocial.message}</span>)}
          </div>
          <div className='input__duplo'>
            <div>
              <input
                {...register('cnpj')}
                type="text"
                placeholder='CNPJ'
                maxLength={14}
              />
              {errors.cnpj && (<span>{errors.cnpj.message}</span>)}
            </div>
            <div>
              <input
                {...register('telFixo')}
                type="tel"
                placeholder='Telefone Fixo'
                maxLength={10}
              />
              {errors.telFixo && (<span>{errors.telFixo.message}</span>)}
            </div>
          </div>
          <div className='input__unico'>
            <input
              {...register('email')}
              type="email"
              placeholder='E-mail'
            />
          </div>
          <div className='input__unico'>
            <input
              {...register('nome')}
              type="text"
              placeholder='Nome'
            />
          </div>
          <div className='input__duplo'>
            <input
              {...register('whatsapp')}
              type="tel"
              placeholder='Telefone Whatsapp'
              maxLength={11}
            />
            <input
              {...register('telSecundario')}
              type="tel"
              placeholder='Telefone Secundario'
              maxLength={10}
            />
          </div>
          <div className='input__triplo'>
            <input
              {...register('cep')}
              type="text"
              placeholder='CEP'
              maxLength={8}
              value={cep}
              onChange={(e) => setCep(e.target.value)}
            />
            {errors.cep && (<span>{errors.cep.message}</span>)}
            <input
              {...register('uf')}
              type="text"
              placeholder='UF'
              list='estados'
              autoComplete='off'
              value={uf}
            />
            <datalist id='estados'>
              <option value="AC"></option>
              <option value="AL"></option>
              <option value="AP"></option>
              <option value="AM"></option>
              <option value="BA"></option>
              <option value="CE"></option>
              <option value="ES"></option>
              <option value="GO"></option>
              <option value="MA"></option>
              <option value="MT"></option>
              <option value="MS"></option>
              <option value="MG"></option>
              <option value="PA"></option>
              <option value="PB"></option>
              <option value="PR"></option>
              <option value="PE"></option>
              <option value="PI"></option>
              <option value="RJ"></option>
              <option value="RN"></option>
              <option value="RS"></option>
              <option value="RO"></option>
              <option value="RR"></option>
              <option value="SC"></option>
              <option value="SP"></option>
              <option value="SE"></option>
              <option value="TO"></option>
            </datalist>
            <input
              {...register('cidade')}
              type="text"
              placeholder='Cidade'
              value={cidade}
            />
          </div>
          <div className='input__duplo input__duplo--mod'>
            <input
              {...register('endereco')}
              type="text"
              placeholder='Endereço'
              value={endereco}
            />
            <input
              {...register('numero')}
              type="text"
              placeholder='Numero'
            />
          </div>
          <div className="input__btn">
            {
              isFetching ? <>
                <input
                  className='btnenviar'
                  type="submit"
                  value="Enviar"
                />
              </> : <>
                <input
                  className='btnenviando'
                  type="submit"
                  value="enviando.."
                />
              </>
            }
          </div>
        </form>
      </div>
    </>
  )
}