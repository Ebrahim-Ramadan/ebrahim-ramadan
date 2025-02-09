
import { Analytics } from "@vercel/analytics/react"
import { GeistSans } from 'geist/font/sans';
import { Metadata } from "next";
import { ViewTransitions } from 'next-view-transitions'
import { Footer } from "./footer";
import "./globals.css";
import { Header } from "./header";




export const metadata :Metadata= {
  description: "Infrastructure and Full-Stack Engineer",
  title: {
    default: 'Ebrahim Ramadan | software blogs',
    template: `%s - Ebrahim Ramadan`,
  },
  keywords: [
    "Ebrahim Ramadan",
    "software engineer",
    "frontend engineer",
  ],
  creator: "Sharmo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: 'https://ebrahim-ramadan.vercel.app/',
    title: 'Ebrahim Ramadan',
    description: 'Ebrahim Ramadan',
    siteName: 'Ebrahim Ramadan',
    images: [
      {
        url: 'https://avatars.githubusercontent.com/u/65041082?s=400&u=cb58112cd92067eb53afe77fc7beb1573aab869d&v=4',
        width: 1200,
        height: 630,
        alt: 'Ebrahim Ramadan',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: 'Ebrahim Ramadan',
    description: 'Ebrahim Ramadan',
    images: 'https://avatars.githubusercontent.com/u/65041082?s=400&u=cb58112cd92067eb53afe77fc7beb1573aab869d&v=4',
    creator: "@scoopsahoykid",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

};

export default function RootLayout({ children }:{children:React.ReactNode}) {
  return (
    <ViewTransitions>
<html lang="en">
        <body className={`min-h-screen p-6 pt-3 md:pt-6 max-w-2xl m-auto ${GeistSans.className}`}>
        <Header />
          {children}

        <Footer />
          <Analytics />
        </body>
    </html>
    </ViewTransitions>
    
  );
}