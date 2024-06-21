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
}