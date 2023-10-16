import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { GenderSymbols, HeartList, MusicSymbol, SimilyFaceEmoji, TechnicalSymbol, ToolSymbol, strSymbols, symbolList } from '../components/symbols';
import Footer from "@/components/footer";
import Navigation from "@/components/navigation";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  function handleSymbolClick(symbolItem) {
    navigator.clipboard.writeText(symbolItem);
  }
  return (
    <>
      <Head>
        <title>Symbol Copy and Paste for Threads App</title>
        <meta name="description" content="Symbole Copier et Coller pour Threads App 📋 Coller 👌" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <Navigation />
        <div className="container" >
          <div className="mt-5">
            <h1>More then 10000+ Text Faces for Threads App You Can Copy And Paste 〵(^ o ^)〴</h1>
            {
              symbolList.map((symbolItem) => (<span key={symbolItem} className='symbol-size' onClick={() => handleSymbolClick(symbolItem)}>
                {symbolItem}
              </span>))
            }
          </div>
          <div className="">
            <h2></h2>
            {
              HeartList.map((symbolItem) => (<span key={symbolItem} className='symbol-size' onClick={() => handleSymbolClick(symbolItem)}>
                {symbolItem}
              </span>))
            }
          </div>
          <div className="">
            <h2>Star Symbols</h2>
            {
              strSymbols.map((symbolItem) => (<span key={symbolItem} className="symbol-size" onClick={() => handleSymbolClick(symbolItem)}>
                {symbolItem}
              </span>))
            }
          </div>
          <div className="">
            <h2>Simly Faces Symbols</h2>
            {
              SimilyFaceEmoji.map((symbolItem) => (<span key={symbolItem} className="symbol-size" onClick={() => handleSymbolClick(symbolItem)}>
                {symbolItem}
              </span>))
            }
          </div>
          <div className="">
            <h2>Gender Symbols</h2>
            {
              GenderSymbols.map((symbolItem) => (<span key={symbolItem} className="symbol-size" onClick={() => handleSymbolClick(symbolItem)}>
                {symbolItem}
              </span>))
            }
          </div>
          <div className="">
            <h2>Technical Symbols</h2>
            {
              TechnicalSymbol.map((symbolItem) => (<span key={symbolItem} className="symbol-size" onClick={() => handleSymbolClick(symbolItem)}>
                {symbolItem}
              </span>))
            }
          </div>
          <div className="">
            <h2>Musical Symbols</h2>
            {
              MusicSymbol.map((symbolItem) => (<span key={symbolItem} className="symbol-size" onClick={() => handleSymbolClick(symbolItem)}>
                {symbolItem}
              </span>))
            }
          </div>

          <div className="mt-5">
            <p>Friends, you must be aware that Meta, the company formerly known as Facebook and Instagram, launched a new app called Threads on July 6, 2023, in response to the growing demand for social media platforms, of which Twitter is one. primary competitor. space. The upcoming app that is closely integrated with Instagram has already made its presence felt on both the Apple App Store and Play Store, increasing the anticipation of its official launch.</p>
            <p>This emoji /face for Threads App,where commonly referred to as emojis, are tiny images or symbols with the purpose of conveying emotions or concepts for better communication. These graphical elements find frequent emotion in text messages, across various social media networks, and within other modes of online interaction. Instances of text faces encompass :-) (indicating a smiling face), :-( (representing a sad face), and ;-) (denoting a winking expression). The assortment of text faces is extensive, offering a means to infuse textual communication with individuality and sentiment.</p>
          </div>
          <ul>
            <li>Text Messages:You can Embedding text faces within text messages or chat dialogues serves to infuse emotions and individuality into your written exchanges.</li>
            <li>Social Media: Various social media platforms, including Twitter, Facebook, and Instagram, facilitate the utilization of text faces. Such symbols can be integrated into your posts, comments, and private messages across these platforms.</li>
            <li>you can live with Enliven your emails with text faces, thereby imparting a distinctive personal flair to your correspondencesEnliven your emails with text faces, thereby imparting a distinctive personal flair to your correspondences.</li>
            <li>Instant Messaging: Instant messaging applications like Zoom, Google meet and Micosoft chat can add with text faces, enabling you to infuse your conversations with nuanced emotions.</li>
          </ul>
          <h2>Where can i use text faces ?</h2>

          <Image
            src="/Text-Faces-for-threads-App.webp"
            alt="Text Faces threads App"
            //   loader={imageLoader}
            width={600}
            className="image-responsive"
            height={300}
            priority
          />
        </div>
    
      <Footer />
    </main >
    </>
  )
}
