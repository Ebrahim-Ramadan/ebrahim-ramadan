'use client'
import TerminalSearch from '../components/TerminalSearch'
import Header from '../components/Header'
import Head from 'next/head'
import {NextUIProvider} from "@nextui-org/react";
export default function Home() {
  return (
    <NextUIProvider>
            <Head>
        <title>Ebrahim.Ramadan.portfolio</title>
        
        <meta name="description" content='Js. Software developer'/>

        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
        <Header/>
      <TerminalSearch />
    </NextUIProvider>

  )
}
