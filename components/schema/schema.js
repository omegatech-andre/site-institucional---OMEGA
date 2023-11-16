import * as yup from 'yup';

export const schema = yup.object().shape({
  razaoSocial: yup.string().lowercase().required('Campo obrigatóio'),
  cnpj: yup.string().min(14, 'CNPJ deve contar 14 numeros, sem caracteres especiais').required('Campo obrigatóio'),
  telFixo: yup.string().min(10, 'Telefone deve conter 10 numeros, sem caracteres espaciais').required('Campo obrigatóio'),
  email: yup.string().lowercase(),
  nome: yup.string().lowercase(),
  whatsapp: yup.string(),
  telSecundario: yup.string(),
  cep: yup.string(),
  uf: yup.string(),
  cidade: yup.string().lowercase(),
  endereco: yup.string().lowercase()
})