"use client";
import React from "react";
import { motion, useInView } from 'framer-motion';
import '../styles/problem.css';

function MainComponent() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div className="font-sans">
      <header className="bg-gray-900 bg-opacity-90 fixed w-full z-[1000] shadow-lg header-animation">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-3xl font-bold text-white font-serif" style={{ fontFamily: '"Playfair Display", serif', letterSpacing: '0.05em' }}>Zero.</div>
        </div>
      </header>

      <section id="hero" className="relative w-full h-screen">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/image/speakers/toptop.png"
            alt="Hero Image"
            className="w-full h-full object-cover object-left"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-transparent opacity-60"></div>
        </div>

        <div className="relative z-10 flex items-start md:items-center justify-end md:justify-center h-full container mx-auto px-4 pt-32 md:pt-0">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-right md:text-center max-w-xl md:max-w-4xl mx-auto p-6 md:rounded-lg md:shadow-2xl md:backdrop-blur-md md:bg-black md:bg-opacity-50"
          >
            <motion.h1 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-bold text-white mb-4 font-serif" 
              style={{ fontFamily: '"Playfair Display", serif', letterSpacing: '0.05em' }}
            >
              Zero.
            </motion.h1>
            <div className="space-y-2">
              {["高めた『技術』", "届けないと意味ないよね。", "『届ける』を学ぶ", "美容師向け無料オンラインサロン"].map((text, index) => (
                <motion.h2 
                  key={index}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 + index * 0.2, duration: 0.6, ease: "easeOut" }}
                  className="text-lg md:text-2xl lg:text-3xl font-bold text-white"
                >
                  {text}
                </motion.h2>
              ))}
            </div>
            <motion.a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSeusYuPuvTWpu08R4QiFZviVClkEQRj9zPuZnsnBf_D-sQjzA/viewform" 
              className="inline-block mt-6" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="text-black px-8 py-3 rounded-full text-lg md:text-xl font-semibold transition duration-300 bg-gradient-to-r from-yellow-500 via-amber-500 to-amber-600 hover:from-yellow-600 hover:via-amber-600 hover:to-amber-700 shadow-lg">
                今すぐ参加する
              </button>
            </motion.a>
          </motion.div>
        </div>
      </section>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 text-center"
      >
        <p className="text-lg sm:text-xl mb-6 text-gray-800">
          次回新規メンバー受付は1/3です。それまでこちらに入り、アナウンスをお待ちください
        </p>
        <motion.a 
          href="https://line.me/ti/g2/YN2zfW0efjtUFiJIO5OY3sAh34GWIka0OgbdCA?utm_source=invitation&utm_medium=link_copy&utm_campaign=default"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <button className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
            LINEオープンチャットに参加
          </button>
        </motion.a>
      </motion.div>

      {/* Problem Section */}
      <section id="problem" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 sm:mb-12 text-center text-gray-700"
          >
            こんな悩みはありませんか？
          </motion.h2>

          <div className="problem-container">
            {[
              "求人がこない・・きてもすぐにやめちゃう・・",
              "せっかく新規が来ても、リピート率が低い・・",
              "新規顧客がホットペッパーに依存していて危機感",
              "単価を上げたい、店販率を上げたい",
              "インスタのフォロワーを増やしたい、影響力をもっとつけたい",
              "クローズドな安全な場所で仲間と繋がりたい",
              "美容師以外の収入の柱を持っておきたい"
            ].map((problem, index) => (
              <motion.div 
                key={index} 
                className="problem-item"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img 
                  src="/image/speakers/aikon.jpg" 
                  alt={`アイコン${index + 1}`} 
                  className="problem-icon"
                />
                <div className="problem-bubble">
                  <p className="problem-text">{problem}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" ref={ref} className="bg-gradient-to-r from-gray-800 to-gray-900 py-16">
        <div className="container mx-auto px-4">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl font-bold mb-8 text-center text-white leading-tight"
          >
            マーケティングとは、
            <span className="block mt-2">お客様と知り合ってから</span>
            <span className="block mt-2">購入されるまでを言います</span>
          </motion.h3>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 p-10 rounded-xl shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10">
              <motion.h4 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600"
              >
                <span className="block mb-2">マーケティングを活用すると</span>
                <span className="block">こんな世界観に突入します</span>
              </motion.h4>
              
              <motion.div 
                initial={{ width: 0 }}
                animate={isInView ? { width: "6rem" } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="h-1 bg-gradient-to-r from-yellow-400 to-amber-600 mx-auto mb-12"
              ></motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "求人コストの削減",
                    description: "インスタグラムを活用した無料求人で、コストを大幅に削減します。",
                    icon: "👤"
                  },
                  {
                    title: "売上アップの実現",
                    description: "新規顧客獲得、リピート率向上、単価アップの戦略を学びます。",
                    icon: "⤴️"
                  },
                  {
                    title: "SNSを操れるようになる",
                    description: "あなたの強力な味方をあなた自身が操れるようになります。",
                    icon: "📱"
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                    className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-center mb-4">
                      <div className="text-4xl mr-4 text-gold">{item.icon}</div>
                      <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white">{item.title}</h4>
                    </div>
                    <p className="text-gray-300 text-left">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
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
            Zero.でやること
          </h2>
          <div className="space-y-8">
            <div className="bg-white border border-gray-300 shadow-lg overflow-hidden">
              <div className="bg-gray-200 p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 bg-gray-700 p-4 text-white">
                  1. メンバーだけが見ることができるインスタ鍵垢ライブによるQ＆A、講義
                </h3>
                <div className="mt-4 flex justify-center">
  <img
    src="/image/speakers/kouigi.png"
    alt="インスタ鍵垢ライブイメージ"
    className="w-1/2 md:w-1/2 lg:w-2/6 h-auto rounded-lg shadow-md"
  />
</div>
              </div>
            </div>
            <div className="bg-white border border-gray-300 shadow-lg overflow-hidden">
              <div className="bg-gray-200 p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 bg-gray-700 p-4 text-white">
                  2. 属性別zoom勉強会
                </h3>
                <div className="flex justify-start">
                  <div className="flex flex-col text-left">
                    <span>月に1回の属性別zoom勉強会</span>
                    <span>例）オーナー回：求人のマーケティングや社内教育のテーマ</span>
                    <span>アシスタント回：アシスタントで売上を上げる方法　など</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-300 shadow-lg overflow-hidden">
              <div className="bg-gray-200 p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 bg-gray-700 p-4 text-white">
                3. 地域別オフライン研修＆交流会
                </h3>
            
                <h4 className="font-bold mb-2 text-left">＜目安＞</h4>
                <div className="flex justify-start">
                  <div className="flex flex-col text-left">
                    <span>・不定期開催</span>
                    <span>・サロン生による企画</span>
                    <span>・参加費目安: 外部50,000円、サロン生5,500円（3時間）</span>
                    <span>・最低開催人数: 20名以上から。</span>
                    
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-300 shadow-lg overflow-hidden">
              <div className="bg-gray-200 p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 bg-gray-700 p-4 text-white">
                4. 年1回のビッグイベント
                </h3>
            
                <p className="p-4 text-left">・サロン生による企画運営</p>
              </div>
            </div>
            <div className="bg-white border border-gray-300 shadow-lg overflow-hidden">
              <div className="bg-gray-200 p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 bg-gray-700 p-4 text-white">
                5. サロン別カスタム研修（ご要望により提案します）
                </h3>
            
                <p className="p-4 text-left">・例：3時間25万円～　店販トークスタッフ研修　等</p>
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
                <div className="w-full md:w-1/3 bg-white bg-opacity-75 p-4 md:p-8 flex flex-col justify-center items-center">
                  <h3 className="text-4xl md:text-6xl font-bold mb-2 md:mb-4 text-black text-center">あげ妻</h3>
                  <div className="mb-4 md:mb-8">
                    <p className="text-xl md:text-2xl text-black text-center">マーケティングクイーン</p>
                    <ul className="list-disc list-inside text-sm md:text-base text-black mt-2 text-left mx-auto">
                      <li>顔出しせずに月400万収益化のマーケティング構築のプロ</li>
                      <li>Instagramフォワー1.2万人以上</li>
                      <li>kindle本39冊</li>
                      <li>現在70事業者のマーケティングコンサル</li>
                      <li>コミュニティ20個のアドバイザー</li>
                      <li>インスタ求人4ヶ月で4名0円採用</li>
                      <li>店販トークレクチャー1ヶ月で店販率＋25%へ</li>
                    </ul>
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
                <div className="w-full md:w-1/3 bg-white bg-opacity-75 p-4 md:p-8 flex flex-col justify-center items-center">
                  <h3 className="text-4xl md:text-6xl font-bold mb-2 md:mb-4 text-black text-center">エリ</h3>
                  <div className="mb-4 md:mb-8">
                    <p className="text-xl md:text-2xl text-black text-center">次回予約のプロ</p>
                    <ul className="list-disc list-inside text-sm md:text-base text-black mt-2 text-left mx-auto">
                      <li>月15日で月商100万越え現役美容師</li>
                      <li>ヘアキャンプ講師</li>
                      <li>ビジネススクール/北原の精神と時の部屋講師</li>
                      <li>次回予約に特化したコンサル、現在20社</li>
                      <li>次回予約率100%の生徒11名輩出</li>
                    </ul>
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
      <section id="success" className="relative py-24 bg-cover bg-center" style={{ backgroundImage: "url('/image/speakers/hasami.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center text-white shadow-text font-serif" style={{ fontFamily: '"Playfair Display", serif' }}>
            実際に成果を出した美容師の声
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl shadow-2xl backdrop-blur-lg transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <img
                  src="/image/speakers/koe2.png"
                  alt="成功した美容師1"
                  className="w-20 h-20 rounded-full border-4 border-amber-400 shadow-lg"
                />
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-amber-400">Sさん</h3>
                  <p className="text-gray-400"></p>
                </div>
              </div>
              <p className="text-gray-200 text-lg italic leading-relaxed">
                「コンサルたった<span className="text-amber-400 font-bold">1ヶ月</span>で次回予約率<span className="text-amber-400 font-bold">0%→100%</span>になりました！
                コンサル開始<span className="text-amber-400 font-bold">2ヶ月</span>で<span className="text-amber-400 font-bold">売上3倍</span>に。
                スタイリストデビュー<span className="text-amber-400 font-bold">4ヶ月</span>で次回予約率<span className="text-amber-400 font-bold">90%</span>」
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl shadow-2xl backdrop-blur-lg transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <img
                  src="/image/speakers/koe1.png"
                  alt="成功した美容師2"
                  className="w-20 h-20 rounded-full border-4 border-amber-400 shadow-lg"
                />
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-amber-400">Kさん</h3>
                  <p className="text-gray-400"></p>
                </div>
              </div>
              <p className="text-gray-200 text-lg italic leading-relaxed">
                「たった<span className="text-amber-400 font-bold">3ヶ月</span>で平均月商<span className="text-amber-400 font-bold">20万円アップ</span>！
                セミナーで教わったことを意識した結果、<span className="text-amber-400 font-bold">9割</span>のお客様が次回予約をしてくださってます！！！」
              </p>
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
              <p className="p-4 flex flex-col">
                <span>美容師免許保持者（＆美容学生）：無料</span>
                <span>その他：1500円／月額
                </span>
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">参加条件</h3>
              <p className="p-4 flex flex-col">
                <span>マーケティングに課題を感じ、学びたい意欲のある方</span>
                <span>サロンルールが守れる方</span>
                <span>リピート、次回予約に課題を感じる方</span>
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2"></h3>
              <p>
                
              </p>
              <h3 className="text-xl font-bold mb-2">時間的コミットメント</h3>
              <p className="p-4 flex flex-col">
                <span>基本的に自由参加ですが、月1回のライブ配信への参加をおすすめします。</span>
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">期待できる成果</h3>
              <p className="p-4 flex flex-col">
                <span>個人差はありますが、多くの参加者が売上アップや求人コスト削減などの成果を実感しています。</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 text-white text-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/image/speakers/cta.jpg')" }}></div>
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 font-serif" style={{ fontFamily: '"Playfair Display", serif', letterSpacing: '0.05em' }}>
            今すぐ無料で参加する
          </h2>
          <p className="text-xl md:text-2xl mb-8 md:mb-10 font-light">限定50名様まで</p>
          <motion.a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSeusYuPuvTWpu08R4QiFZviVClkEQRj9zPuZnsnBf_D-sQjzA/viewform" 
            className="inline-block" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="text-black px-10 py-4 rounded-full text-xl font-semibold transition duration-300 bg-gradient-to-r from-yellow-500 via-amber-500 to-amber-600 hover:from-yellow-600 hover:via-amber-600 hover:to-amber-700 shadow-lg">
              無料で参加する
            </button>
          </motion.a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold mb-6">お問い合わせ</h3>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
              <a href="https://www.instagram.com/agezuma_/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:text-amber-400 transition-colors duration-300">
                <span className="font-medium">あげ妻:</span>
                <span className="font-medium">Instagram</span>
                <img src="/image/speakers/insta.jpg" alt="Instagram" className="w-6 h-6 rounded-full" />
              </a>
              <a href="https://www.instagram.com/hitomi.eri0916/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:text-amber-400 transition-colors duration-300">
                <span className="font-medium">エリ:</span>
                <span className="font-medium">Instagram</span>
                <img src="/image/speakers/insta.jpg" alt="Instagram" className="w-6 h-6 rounded-full" />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Zero. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MainComponent;