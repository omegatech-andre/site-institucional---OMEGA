import * as yup from 'yup'

export const schemaManual = yup.object().shape({
  nome: yup.string().lowercase().required('Campo obrigatório'),
  telefone: yup.number().typeError('Campo obrigatório, apenas número').required('Campo obrigatório'),
  email: yup.string().lowercase().required('Campo obrigatório')
})