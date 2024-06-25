import { GitLFS } from "@/blogs/Git LFS/GitLFS";

export default async function Home() {
    return (
        <GitLFS/>

        )
}
export const metadata = {
    title: "Git LFS",
    description: "Git Large File Storage",
    openGraph: {
        images: ['https://avatars.githubusercontent.com/u/65041082?s=400&u=cb58112cd92067eb53afe77fc7beb1573aab869d&v=4'],
        title: 'Git LFS',
        description: 'Git Large File Storage',
    },
    title: {
        default: 'Git LFS',
        template: `%s - Git LFS`,
    }, 
    keywords: [
        "Ebrahim Ramadan",
        "software engineer",
        "frontend engineer",
        "software blogs",
        "Git LFS",
        "large file storage",
    ],
    description: 'Git LFS',
    creator: "Sharmo",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: 'https://ebrahim-ramadan.vercel.app/',
        title: 'Git LFS',
        description: ' Git LFS',
        siteName: 'Git LFS',
        images: [
            {
                url: 'https://ebrahim-ramadan.vercel.app/og',
                width: 1200,
                height: 630,
                alt: 'Git LFS',
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: 'Git LFS',
        description: 'Git LFS',
        images: 'https://ebrahim-ramadan.vercel.app/og',
        creator: "@scoopsahoykid",
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.png",
        apple: "/favicon.png",
    },
}