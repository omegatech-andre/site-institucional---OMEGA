import InBoundMkt from '@/components/_ui/inBoundMkt/InBoundMkt'
import '../styles/globals.scss'

export const metadata = {
  title: 'Ômega Screen | Tintas Serigráficas',
  description: 'Indústria especializada em tintas serigráficas, produzindo um padrão de qualidade desde 2021 é referência em Pernambuco.'
}

export default function RootLayout({ children }) {

  return (
    <html lang="pt-BR">
      <body className='raiz'>
        {children}
        <InBoundMkt />
        {'<!--Esse projeto está na v.1.0 e foi desenvolvido por André Campos (https://github.com/DDR23)-->'}
      </body>
    </html>
  )
}