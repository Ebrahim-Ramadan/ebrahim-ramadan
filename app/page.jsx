'use client'

import { SessionProvider } from "next-auth/react"
import Head from 'next/head'
import {NextUIProvider} from "@nextui-org/react";
import { HeroParticles  } from '@/components/Particles/HeroParticles';
export default function Home(
  {
    Component,
    // pageProps: { session, ...pageProps },
  }
) {
  return (
    // <SessionProvider session={session}>

    <NextUIProvider>
            <Head>
        <title>Ebrahim.Ramadan.portfolio</title>
        
        <meta name="description" content='Js. Software developer'/>

        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
        <HeroParticles {...pageProps}/>
    </NextUIProvider>
    // </SessionProvider>

      
  )
}
