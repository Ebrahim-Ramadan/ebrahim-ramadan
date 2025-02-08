import { Posts } from "./Posts";

export const revalidate = 60;

export const blogsData = [
  { id: 1, title: 'Git LFS (large file system) hell',  date: 'May 12, 2024', slug: 'GitLFS' , views:"50"},
  { id: 4, title: 'Github API, How Cool It Is',  date:'June 19, 2023', slug:'GithubApi', views:"50"},
  { id: 2, title: 'Next.js Routes (The FullStack)',  date:'September 15, 2023', slug:'NextJsApi', views:"50"},
  { id: 3, title: 'I am a tailwind guy, best thing I ever did',  date: 'July 15, 2023', slug: 'Tailwind' , views:"50"},

]
export default async function Home() {
  return <Posts posts={blogsData} />;
}