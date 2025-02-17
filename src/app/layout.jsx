export const metadata = {
  title: 'Zero. | 美容師向け無料オンラインサロン',
  description: '美容師のためのマーケティングコミュニティ。リピート率向上、求人コスト削減、SNSマーケティングなど、現場で使える実践的なスキルを学べる無料のオンラインサロンです。',
  openGraph: {
    title: 'Zero. | 美容師向け無料オンラインサロン',
    description: '美容師のためのマーケティングコミュニティ。リピート率向上、求人コスト削減、SNSマーケティングなど、現場で使える実践的なスキルを学べる無料のオンラインサロンです。',
    siteName: 'Zero.',
    images: [
      {
        url: 'https://zero-ae.vercel.app/image/speakers/sero.png',
        width: 1200,
        height: 630,
        alt: 'Zero.'
      }
    ],
    locale: 'ja_JP',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
} 