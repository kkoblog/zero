import '../styles/globals.css'
import { Playfair_Display, Cormorant_Garamond } from 'next/font/google'
import Head from 'next/head'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
})

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Zero.</title>
      </Head>
      <main className={`${playfair.variable} ${cormorant.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp