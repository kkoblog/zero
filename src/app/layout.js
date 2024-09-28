import './globals.css'
import { Playfair_Display, Cormorant_Garamond } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'], // 利用可能な重さを指定
  variable: '--font-playfair',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // 重さを指定
  variable: '--font-cormorant',
})

export const metadata = {
  title: 'Your App Title',
  description: 'Your app description',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja" className={`${playfair.variable} ${cormorant.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}