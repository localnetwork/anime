import '@/styles/globals.css'
import Layout from '@/components/misc/Layout'

export default function MyApp({ Component, pageProps }) {
  console.log(Layout)
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}  