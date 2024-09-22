"use client";
import React from "react";

function MainComponent() {
  return (
    <div className="font-sans">
    {/* Header */}

    <header className="bg-gray-900 bg-opacity-75 fixed w-full z-10">
  <div className="container mx-auto px-4 py-2 flex justify-between items-center">
    <div className="text-2xl font-bold text-white" style={{ fontFamily: '"Playfair Display", serif', letterSpacing: '0.05em' }}>Zero.</div>

    <nav>
      <ul className="flex space-x-4">
        <li className="border-r border-gold pr-4">
          <a href="#hero" className="hover:text-gold text-white">
            ホーム
          </a>
        </li>
        <li className="border-r border-gold pr-4">
          <a href="#service" className="hover:text-gold text-white">
            サービス
          </a>
        </li>
        <li className="pr-4">
          <a href="#contact" className="hover:text-gold text-white">
            お問い合わせ
          </a>
        </li>
      </ul>
    </nav>
  </div>
</header>

<section id="hero" className="relative w-full h-screen">
  <div className="absolute inset-0 w-full h-full">
    <img
      src="/image/top.png"
      alt="Hero Image"
      className="w-full h-full object-cover object-left"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-transparent opacity-50"></div>
  </div>

<div className="relative z-10 flex items-center justify-end h-full container mx-auto px-4">
  <div className="text-right max-w-2xl">
    <h1 className="text-6xl font-bold text-white mb-4" style={{ fontFamily: '"Playfair Display", serif', letterSpacing: '0.05em' }}>Zero.</h1>
    <div className="space-y-2">
  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
    高めた『技術』 届けないと意味ないよね。
  </h2>
  <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
    『届ける』を学ぶ美容師向け無料オンラインサロン
  </p>
  </div>
<button className="text-white px-8 py-3 rounded-full text-xl transition duration-300 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 mt-5">
      今すぐ参加する
    </button>
  </div>
</div>

</section>

      {/* Problem Section */}
      <section id="problem" className="bg-white py-16">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-8 text-center">
      こんな悩みはありませんか？
    </h2>
    <div className="space-y-4 max-w-2xl mx-auto">
      {[
        "求人がこない・・きてもすぐに辞めちゃう・・",
        "せっかく新規が来ても、リピート率が低い・・",
        "新規顧客がホットペッパーに依存していて危機感",
        "単価を上げたい、店販率を上げたい",
        "インスタのフォロワーを増やしたい、影響力をもっとつけたい",
        "クローズドな安全な場所で仲間と繋がりたい",
        "美容師以外の収入の柱を持っておきたい"
      ].map((problem, index) => (
        <div key={index} className="flex items-start space-x-3">
          <img 
            src="/image/speakers/aikon.jpg" 
            alt={`アイコン${index + 1}`} 
            className="w-10 h-10 rounded-full flex-shrink-0"
          />
          <div className="bg-gray-200 p-3 rounded-lg rounded-tl-none flex-1">
            <p className="text-sm">{problem}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

             {/* Solution Section */}
      <section id="solution" className="bg-gray-700 py-16">
      <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center text-white">
            『届ける』マーケティングで、あなたのサロンが変わる
          </h2>
          <h3 className="text-2xl mb-8 text-center text-gold italic" style={{ color: 'gold' }}>
            売上10倍・求人コスト0円の世界へ
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gold">
              <h4 className="text-xl font-bold mb-4 text-white">求人コストの削減</h4>
              <p className="text-white">
                インスタグラムを活用した無料求人で、コストを大幅に削減します。
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gold">
              <h4 className="text-xl font-bold mb-4 text-white">売上アップの実現</h4>
              <p className="text-white">新規顧客獲得、リピート率向上、単価アップの戦略を学びます。</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gold">
              <h4 className="text-xl font-bold mb-4 text-white">キャリア拡大の機会</h4>
              <p className="text-white">
                同業者ネットワーキングや副業支援で、キャリアの幅を広げます。
              </p>
            </div>
          </div>
        </div>
      </section>


      <section id="service" className="relative bg-white py-16">
  <div 
    className="absolute inset-0 bg-cover bg-center z-0" 
    style={{ backgroundImage: "url('/image/speakers/kasoku.jpg')" }}
  ></div>
  <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
  <div className="container mx-auto px-4 relative z-20">
    <h2 className="text-3xl font-bold mb-8 text-center text-white">
      あなたのキャリアを加速させる4つのコンテンツ
          </h2>
          <div className="space-y-8">
            <div className="bg-white border border-gray-300 shadow-lg overflow-hidden">
              <div className="bg-gray-200 p-6">
              <h3 className="text-2xl font-bold mb-4 bg-gray-700 p-4 text-white">
                    1. インスタグラムを活用したオンラインコンサルティング
                  </h3>
                <ul className="list-disc list-inside p-4">
                  <li>クローズド: 月1回90分の鍵アカウントLive配信</li>
                  <li>オープン: 公開Q&Aセッション、実績紹介</li>
                </ul>
              </div>
            </div>
            <div className="bg-white border border-gray-300 shadow-lg overflow-hidden">
              <div className="bg-gray-200 p-6">
              <h3 className="text-2xl font-bold mb-4 bg-gray-700 p-4 text-white">
                  2. 地域別オフライン研修
                </h3>
                <ul className="list-disc list-inside p-4">
                  <li>2ヶ月に1回開催</li>
                  <li>サロン生による企画</li>
                  <li>参加費: 外部50,000円、サロン生5,500円（3時間）</li>
                  <li>最低開催人数: 50名</li>
                </ul>
              </div>
            </div>
            <div className="bg-white border border-gray-300 shadow-lg overflow-hidden">
              <div className="bg-gray-200 p-6">
              <h3 className="text-2xl font-bold mb-4 bg-gray-700 p-4 text-white">
                  3. 年1回のビッグイベント
                </h3>
                <p className="p-4">サロン生による企画運営</p>
              </div>
            </div>
            <div className="bg-white border border-gray-300 shadow-lg overflow-hidden">
              <div className="bg-gray-200 p-6">
              <h3 className="text-2xl font-bold mb-4 bg-gray-700 p-4 text-white">
                  4. サロン別カスタム研修
                </h3>
                <p className="p-4">3時間25万円～</p>
              </div>
            </div>
          </div>
        </div>
      </section>

                 {/* 講師紹介セクション */}
                 <section id="instructors" className="bg-white py-16 mb-32">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">講師紹介</h2>
          <div className="space-y-16">
            {/* 講師1 */}
            <div className="bg-white border border-gray-300 shadow-lg overflow-hidden">
              <div className="flex flex-col md:flex-row relative h-auto md:h-96 bg-cover bg-center" style={{ backgroundImage: "url('/image/speakers/haikei.png')" }}>
                <div className="w-full md:w-1/3 bg-white bg-opacity-75 p-4 md:p-8 flex flex-col justify-center">
                  <h3 className="text-4xl md:text-6xl font-bold mb-2 md:mb-4 text-black">あげ妻</h3>
                  <div className="mb-4 md:mb-8">
                    <p className="text-xl md:text-2xl text-black">マーケティングクイーン</p>
                  </div>
                </div>
                <div className="w-full md:w-2/3 relative">
                  <div className="flex justify-center md:justify-end space-x-2 md:space-x-4 md:absolute md:bottom-0 md:right-0">
                    <img
                      src="/image/speakers/age.png"
                      alt="あげ妻"
                      className="w-36 h-60 md:w-48 md:h-80 object-cover"
                    />
                    <img
                      src="/image/speakers/age2.PNG"
                      alt="あげ妻2"
                      className="w-36 h-60 md:w-48 md:h-80 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 講師2 */}
            <div className="bg-white border border-gray-300 shadow-lg overflow-hidden">
              <div className="flex flex-col md:flex-row relative h-auto md:h-96 bg-cover bg-center" style={{ backgroundImage: "url('/image/speakers/haikei.png')" }}>
                <div className="w-full md:w-1/3 bg-white bg-opacity-75 p-4 md:p-8 flex flex-col justify-center">
                  <h3 className="text-4xl md:text-6xl font-bold mb-2 md:mb-4 text-black">えり</h3>
                  <div className="mb-4 md:mb-8">
                    <p className="text-xl md:text-2xl text-black">次回予約のプロ</p>
                  </div>
                </div>
                <div className="w-full md:w-2/3 relative">
                  <div className="flex justify-center md:justify-end space-x-2 md:space-x-4 md:absolute md:bottom-0 md:right-0">
                    <img
                      src="/image/speakers/eri.png"
                      alt="えり"
                      className="w-36 h-60 md:w-48 md:h-80 object-cover"
                    />
                    <img
                      src="/image/speakers/eri2.png"
                      alt="えり2"
                      className="w-36 h-60 md:w-48 md:h-80 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 768px) {
          .container > div > div > div {
            flex-direction: column;
          }
          .container > div > div > div > div:first-child {
            width: 100%;
            margin-bottom: 2rem;
            text-align: center;
          }
          .container > div > div > div > div:last-child {
            width: 100%;
          }
        }
      `}</style>

      <style jsx>{`
        @media (max-width: 768px) {
          .container > div > div {
            flex-direction: column;
          }
          .container > div > div > div:first-child {
            width: 100%;
            margin-bottom: 2rem;
            text-align: center;
          }
          .container > div > div > div:last-child {
            width: 100%;
          }
        }
      `}</style>

      <style jsx>{`
        .clip-path-diagonal {
          clip-path: polygon(0 0, 70% 0, 100% 100%, 0% 100%);
        }
      `}</style>
      

      {/* Success Stories */}
      <section id="success" className="relative py-16 bg-cover bg-center" style={{ backgroundImage: "url('/image/speakers/hasami.jpg')" }}>
  <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70"></div>
  <div className="container mx-auto px-4 relative z-10">
    <h2 className="text-4xl font-bold mb-8 text-center text-white shadow-text">
      実際に成果を出した美容師の声
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg backdrop-blur-sm">
        <img
          src="/image/hairdresser1.jpg"
          alt="成功した美容師1"
          className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-white"
        />
        <h3 className="text-xl font-bold mb-2 text-white text-center">山田 花子さん</h3>
        <p className="text-gray-200 text-center">「このサロンに参加して半年で売上が2倍になりました！」</p>
      </div>
      <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg backdrop-blur-sm">
        <img
          src="/image/hairdresser2.jpg"
          alt="成功した美容師2"
          className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-white"
        />
        <h3 className="text-xl font-bold mb-2 text-white text-center">佐藤 太郎さん</h3>
        <p className="text-gray-200 text-center">「求人コストが0円になり、優秀なスタッフが集まるようになりました。」</p>
      </div>
    </div>
  </div>
</section>

<style jsx>{`
  .shadow-text {
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  }
`}</style>

      {/* FAQ Section */}
      <section id="faq" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            よくある質問（FAQ）
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold mb-2">参加費用について</h3>
              <p>
                オンラインサロンへの参加は美容師さんは無料です。ただし、美容師さん以外は料金かかります。
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">
                参加に必要なスキルレベル
              </h3>
              <p>
                美容師としての経験があれば、スキルレベルに関係なく参加いただけます。
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">時間的コミットメント</h3>
              <p>
                基本的に自由参加ですが、月1回のライブ配信への参加をおすすめします。
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">期待できる成果</h3>
              <p>
                個人差はありますが、多くの参加者が売上アップや求人コスト削減などの成果を実感しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-700 py-16 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: '"Playfair Display", serif', letterSpacing: '0.05em' }}>今すぐ無料で参加する</h2>
          <p className="text-xl mb-8">限定50名様まで</p>
          <button className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white px-8 py-3 rounded-full text-xl hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 transition duration-300">
            無料で参加する
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-2">会社情報</h3>
              <p>美容師向け無料オンラインサロン運営会社</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">リンク</h3>
              <ul>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    プライバシーポリシー
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    利用規約
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">問い合わせ</h3>
              <p>Email: info@example.com</p>
              <p>電話: 03-1234-5678</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">SNS</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-2xl hover:text-blue-400">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-2xl hover:text-blue-400">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-2xl hover:text-blue-400">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>
              &copy; 2024 美容師向け無料オンラインサロン. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MainComponent;