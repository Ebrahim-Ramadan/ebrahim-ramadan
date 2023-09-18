'use client'
import TerminalSearch from '../components/TerminalSearch'
import Header from '../components/Header'
import Head from 'next/head'
import gb from '/public/github.svg'
export default function Home() {
  return (
    <>
            <Head>
        <title>data.title</title>
        
        <meta name="description" content='contentdesc'/>

        <meta property="og:image" content={gb} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
        <Header/>
      <TerminalSearch />
    </>

  )
}
