"use client";
import React from "react";

function MainComponent() {
  return (
    <div className="font-sans">
    {/* Header */}
    <header className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-2xl font-bold">Zero.</div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#hero" className="hover:text-blue-600">
                ホーム
              </a>
            </li>
            <li>
              <a href="#service" className="hover:text-blue-600">
                サービス
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-600">
                お問い合わせ
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>

      {/* Hero Section */}
      <section id="hero" className="relative w-full h-screen">
        <img
          src="path/to/your/image.jpg"
          alt="Hero Image"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-6xl font-bold text-white">Zero.</h1>
        </div>
      </section>

      <section id="hero" className="bg-gray-100 pt-20">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            高めた『技術』 届けないと意味ないよね。『届ける』を学ぶ
            美容師向け無料オンラインサロン
          </h1>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-xl hover:bg-blue-700 transition duration-300">
            無料で参加する
          </button>
        </div>
      </section>

      {/* Problem Section */}
<section id="problem" className="bg-white py-16">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-8 text-center">
      こんな悩みはありませんか？
    </h2>
    <div className="space-y-6">
      <div className="flex items-start">
        <img src="/image/speakers/aikon.jpg" alt="アイコン1" className="w-12 h-12 rounded-full mr-4 mt-1" />
        <div className="bg-gray-200 p-4 rounded-lg rounded-tl-none flex-1 relative">
          <div className="absolute w-4 h-4 bg-gray-200 transform rotate-45 -left-2 top-4"></div>
          <p>求人がこない・・きてもすぐに辞めちゃう・・</p>
        </div>
      </div>
      <div className="flex items-start">
        <img src="/image/speakers/aikon.jpg" alt="アイコン2" className="w-12 h-12 rounded-full mr-4 mt-1" />
        <div className="bg-gray-200 p-4 rounded-lg rounded-tl-none flex-1 relative">
          <div className="absolute w-4 h-4 bg-gray-200 transform rotate-45 -left-2 top-4"></div>
          <p>せっかく新規が来ても、リピート率が低い・・</p>
        </div>
      </div>
      <div className="flex items-start">
        <img src="/image/speakers/aikon.jpg" alt="アイコン3" className="w-12 h-12 rounded-full mr-4 mt-1" />
        <div className="bg-gray-200 p-4 rounded-lg rounded-tl-none flex-1 relative">
          <div className="absolute w-4 h-4 bg-gray-200 transform rotate-45 -left-2 top-4"></div>
          <p>新規顧客がホットペッパーに依存していて危機感</p>
        </div>
      </div>
      <div className="flex items-start">
        <img src="/image/speakers/aikon.jpg" alt="アイコン4" className="w-12 h-12 rounded-full mr-4 mt-1" />
        <div className="bg-gray-200 p-4 rounded-lg rounded-tl-none flex-1 relative">
          <div className="absolute w-4 h-4 bg-gray-200 transform rotate-45 -left-2 top-4"></div>
          <p>単価を上げたい、店販率を上げたい</p>
        </div>
      </div>
      <div className="flex items-start">
        <img src="/image/speakers/aikon.jpg" alt="アイコン5" className="w-12 h-12 rounded-full mr-4 mt-1" />
        <div className="bg-gray-200 p-4 rounded-lg rounded-tl-none flex-1 relative">
          <div className="absolute w-4 h-4 bg-gray-200 transform rotate-45 -left-2 top-4"></div>
          <p>インスタのフォロワーを増やしたい、影響力をもっとつけたい</p>
        </div>
      </div>
      <div className="flex items-start">
        <img src="/image/speakers/aikon.jpg" alt="アイコン6" className="w-12 h-12 rounded-full mr-4 mt-1" />
        <div className="bg-gray-200 p-4 rounded-lg rounded-tl-none flex-1 relative">
          <div className="absolute w-4 h-4 bg-gray-200 transform rotate-45 -left-2 top-4"></div>
          <p>クローズドな安全な場所で仲間と繋がりたい</p>
        </div>
      </div>
      <div className="flex items-start">
        <img src="/image/speakers/aikon.jpg" alt="アイコン7" className="w-12 h-12 rounded-full mr-4 mt-1" />
        <div className="bg-gray-200 p-4 rounded-lg rounded-tl-none flex-1 relative">
          <div className="absolute w-4 h-4 bg-gray-200 transform rotate-45 -left-2 top-4"></div>
          <p>美容師以外の収入の柱を持っておきたい</p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Solution Section */}
      <section id="solution" className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">
            『届ける』マーケティングで、あなたのサロンが変わる
          </h2>
          <h3 className="text-2xl mb-8 text-center">
            売上10倍・求人コスト0円の世界へ
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-4">求人コストの削減</h4>
              <p>
                インスタグラムを活用した無料求人で、コストを大幅に削減します。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-4">売上アップの実現</h4>
              <p>新規顧客獲得、リピート率向上、単価アップの戦略を学びます。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-4">キャリア拡大の機会</h4>
              <p>
                同業者ネットワーキングや副業支援で、キャリアの幅を広げます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Section */}
      <section id="service" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            あなたのキャリアを加速させる4つのコンテンツ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">
                1. インスタグラムを活用したオンラインコンサルティング
              </h3>
              <ul className="list-disc list-inside">
                <li>クローズド: 月1回90分の鍵アカウントLive配信</li>
                <li>オープン: 公開Q&Aセッション、実績紹介</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">
                2. 地域別オフライン研修
              </h3>
              <ul className="list-disc list-inside">
                <li>2ヶ月に1回開催</li>
                <li>サロン生による企画</li>
                <li>参加費: 外部50,000円、サロン生5,500円（3時間）</li>
                <li>最低開催人数: 50名</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">
                3. 年1回のビッグイベント
              </h3>
              <p>サロン生による企画運営</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">
                4. サロン別カスタム研修
              </h3>
              <p>3時間25万円～</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section id="success" className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            実際に成果を出した美容師の声
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
              <img
                src="hairdresser1.jpg"
                alt="成功した美容師1"
                className="w-1/3 rounded-full mr-4"
              />
              <div>
                <h3 className="text-xl font-bold mb-2">山田 花子さん</h3>
                <p>「このサロンに参加して半年で売上が2倍になりました！」</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
              <img
                src="hairdresser2.jpg"
                alt="成功した美容師2"
                className="w-1/3 rounded-full mr-4"
              />
              <div>
                <h3 className="text-xl font-bold mb-2">佐藤 太郎さん</h3>
                <p>
                  「求人コストが0円になり、優秀なスタッフが集まるようになりました。」
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                オンラインサロンへの参加は無料です。ただし、一部のイベントやオフライン研修には別途費用がかかります。
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
      <section className="bg-blue-600 py-16 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">今すぐ無料で参加する</h2>
          <p className="text-xl mb-8">限定50名様まで</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full text-xl hover:bg-gray-200 transition duration-300">
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
                    プライバシーポリー
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