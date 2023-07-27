import { Header } from '@/components/utilities/Header'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-[#0E0E0E]'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
