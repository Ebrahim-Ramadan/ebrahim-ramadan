import { GithubApi } from "@/blogs/GithubApi/GithubApi";

export default async function Home() {
    return (
        <GithubApi/>

        )
}
export const metadata = {
    title: "Github API",
    description: "Github API and how cool it is",
    openGraph: {
        images: ['https://avatars.githubusercontent.com/u/65041082?s=400&u=cb58112cd92067eb53afe77fc7beb1573aab869d&v=4'],
        title: 'Github API',
        description: 'Github API and how cool it is',
    },
    title: {
        default: 'Github API',
        template: `%s - Github API`,
    }, 
    keywords: [
        "Ebrahim Ramadan",
        "software engineer",
        "frontend engineer",
        "software blogs",
        "Github API",
        "large file storage",
    ],
    description: 'Github API',
    creator: "Sharmo",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: 'https://ebrahim-ramadan.vercel.app/',
        title: 'Github API',
        description: ' Github API',
        siteName: 'Github API',
        images: [
            {
                url: 'https://ebrahim-ramadan.vercel.app/og',
                width: 1200,
                height: 630,
                alt: 'Github API',
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: 'Github API',
        description: 'Github API',
        images: 'https://ebrahim-ramadan.vercel.app/og',
        creator: "@scoopsahoykid",
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.png",
        apple: "/favicon.png",
    },
}