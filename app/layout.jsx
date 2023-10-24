import '../public/styles/globals.scss'


export const metadata = {
  title: 'Ômega Screen | Tintas Serigráficas',
  description: 'Indústria especializada em tintas serigráficas, produzindo um padrão de qualidade desde 2021 é referência em Pernambuco.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}