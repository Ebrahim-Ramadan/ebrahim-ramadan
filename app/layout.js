
import { GeistSans } from 'geist/font/sans';
import { ViewTransitions } from 'next-view-transitions'
import "./globals.css";




export const metadata = {
  title: "Ebrahim Ramadan",
  description: "Frontend Engineer portfolio",
  openGraph: {
     images: ['https://avatars.githubusercontent.com/u/65041082?s=400&u=cb58112cd92067eb53afe77fc7beb1573aab869d&v=4'],
    title: 'Ebrahim Ramadan',
    description: 'Frontend Engineer portfolio',
  },
  title: {
    default: 'Ebrahim Ramadan | software blogs',
    template: `%s - Ebrahim Ramadan`,
  },
  keywords: [
    "Ebrahim Ramadan",
    "software engineer",
    "frontend engineer",
  ],
  description: 'Ebrahim Ramadan',
  creator: "Sharmo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: 'https://ebrahim-ramadan.vercel.app/',
    title: 'Ebrahim Ramadan',
    description: ' Ebrahim Ramadan',
    siteName: 'Ebrahim Ramadan',
    images: [
      {
        url: 'https://ebrahim-ramadan.vercel.app/og',
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
    images: 'https://ebrahim-ramadan.vercel.app/og',
    creator: "@scoopsahoykid",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

};

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
<html lang="en">
      <body className={GeistSans.className}>
        {children}</body>
    </html>
    </ViewTransitions>
    
  );
}