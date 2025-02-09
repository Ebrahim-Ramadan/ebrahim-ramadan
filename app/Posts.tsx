import Link from "next/link";
export const blogsData = [
  { id: 1, title: 'Git LFS (large file system) hell',  date: 'May 12, 2024', slug: 'GitLFS' , views:"50"},
  { id: 4, title: 'Github API, How Cool It Is',  date:'June 19, 2023', slug:'GithubApi', views:"50"},
  { id: 2, title: 'Next.js Routes (The FullStack)',  date:'September 15, 2023', slug:'NextJsApi', views:"50"},
  { id: 3, title: 'I am a tailwind guy, best thing I ever did',  date: 'July 15, 2023', slug: 'Tailwind' , views:"50"},
]
export function Posts() {
  return (
    <main className="max-w-7xl font-mono m-auto mb-10 text-sm md:text-base">
    <ul>
      {blogsData.map((post: any, i: number) => {
        return (
          <li key={post.id}>
            <Link href={`/${post.id}`}>
              <div className="flex flex-row items-center justify-between border-b border-neutral-600 py-3 px-4 hover:bg-neutral-100 hover:bg-neutral-900 gap-2">
                <div className="flex flex-col items-start">
                  <div className="text-neutral-200 ">
                    {post.title}
                    </div>
                    <div className=" text-neutral-500  text-xs">
                      {post.date}
                      </div>
                </div>
                <span className="text-neutral-600 ml-2 text-sm">
                  {post.views}
                </span>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  </main>
  );
}
