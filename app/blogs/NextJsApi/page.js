import { NextJsApi } from "@/blogs/NextJsApi/NextJsApi";

export default async function Home() {
    return (
        <NextJsApi/>

        )
}
export const metadata = {
    title: "Nextjs API (The FullStack)",
    description: "Git Large File Storage",
    openGraph: {
        images: ['https://avatars.githubusercontent.com/u/65041082?s=400&u=cb58112cd92067eb53afe77fc7beb1573aab869d&v=4'],
        title: 'Nextjs API (The FullStack)',
        description: 'Git Large File Storage',
    },
    title: {
        default: 'Nextjs API (The FullStack)',
        template: `%s - Nextjs API (The FullStack)`,
    }, 
    keywords: [
        "Ebrahim Ramadan",
        "software engineer",
        "frontend engineer",
        "software blogs",
        "Nextjs API (The FullStack)",
        "large file storage",
    ],
    description: 'Nextjs API (The FullStack)',
    creator: "Sharmo",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: 'https://ebrahim-ramadan.vercel.app/',
        title: 'Nextjs API (The FullStack)',
        description: ' Nextjs API (The FullStack)',
        siteName: 'Nextjs API (The FullStack)',
        images: [
            {
                url: 'https://ebrahim-ramadan.vercel.app/og',
                width: 1200,
                height: 630,
                alt: 'Nextjs API (The FullStack)',
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: 'Nextjs API (The FullStack)',
        description: 'Nextjs API (The FullStack)',
        images: 'https://ebrahim-ramadan.vercel.app/og',
        creator: "@scoopsahoykid",
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.png",
        apple: "/favicon.png",
    },
}