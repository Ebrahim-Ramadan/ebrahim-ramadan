import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head';
import { NextSeo } from 'next-seo';

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <NextSeo
        title="My Page Title"
        description="Description of my page"
        openGraph={{
          title: 'My Page Title',
          description: 'Description of my page',
          images: [
            {
              url: 'https://images.pexels.com/photos/14130600/pexels-photo-14130600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
              width: 1200, 
              height: 630, 
              alt: 'My Thumbnail',
            },
          ],
        }}
        twitter={{
          handle: '@scoopsahoykid', // Optional: Your Twitter handle
          cardType: 'summary_large_image',
        }}
      />
       <head>
        <link rel="icon" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <title>ebrahim-ramadan.portfolio</title> 
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
