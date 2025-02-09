import Link from "next/link";

export function Posts({ posts }: { posts: any }) {
  return (
    <main className="max-w-7xl font-mono m-auto mb-10 text-sm md:text-base">
    <ul>
      {posts.map((post: any, i: number) => {
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
