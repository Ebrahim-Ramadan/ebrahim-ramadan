import { NextJsApi } from "@/blogs/NextJsApi/NextJsApi";

export default async function Home() {
    return (
        <NextJsApi/>

        )
}
export const metadata = {
    title: "Nextjs API",
    description: "Git Large File Storage",
    openGraph: {
        images: ['https://avatars.githubusercontent.com/u/65041082?s=400&u=cb58112cd92067eb53afe77fc7beb1573aab869d&v=4'],
        title: 'Nextjs API',
        description: 'Git Large File Storage',
    },
    title: {
        default: 'Nextjs API',
        template: `%s - Nextjs API`,
    }, 
    keywords: [
        "Ebrahim Ramadan",
        "software engineer",
        "frontend engineer",
        "software blogs",
        "Nextjs API",
        "large file storage",
    ],
    description: 'Nextjs API',
    creator: "Sharmo",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: 'https://ebrahim-ramadan.vercel.app/',
        title: 'Nextjs API',
        description: ' Nextjs API',
        siteName: 'Nextjs API',
        images: [
            {
                url: 'https://ebrahim-ramadan.vercel.app/og',
                width: 1200,
                height: 630,
                alt: 'Nextjs API',
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: 'Nextjs API',
        description: 'Nextjs API',
        images: 'https://ebrahim-ramadan.vercel.app/og',
        creator: "@scoopsahoykid",
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.png",
        apple: "/favicon.png",
    },
}