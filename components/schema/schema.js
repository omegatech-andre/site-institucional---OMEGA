import * as yup from 'yup'

export const schema = yup.object().shape({
  razaoSocial: yup.string().lowercase().required('Campo obrigatório'),
  cnpj: yup.string().min(11, 'Deve conter pelo menos 11 digitos, sem caracteres especiais').required('Campo obrigatório'),
  telFixo: yup.string(),
  email: yup.string().lowercase().required('Campo obrigatório'),
  nome: yup.string().lowercase(),
  whatsapp: yup.string().min(11, 'Insira um número válido com DDD, sem caracteres especiais').required('Campo obrigatório'),
  telSecundario: yup.string(),
  cep: yup.string(),
  uf: yup.string(),
  cidade: yup.string().lowercase(),
  endereco: yup.string().lowercase()
})