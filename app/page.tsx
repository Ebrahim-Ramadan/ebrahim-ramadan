// page.tsx

import Link from "next/link";

type blogsDataTypes = {
  id: number;
  title: string;
  date: string;
  slug: string;
  views: string;
};
const blogsData: blogsDataTypes[] = [
  { id: 1, title: 'Git LFS (large file system) hell',  date: 'May 12, 2024', slug: 'Git-LFS' , views:"265"},
  { id: 4, title: 'Github API, How Cool It Is',  date:'June 19, 2023', slug:'Github-api', views:"421"},
  { id: 2, title: 'Next.js Routes (The FullStack)',  date:'September 15, 2023', slug:'NextJs-api', views:"368"},
  { id: 3, title: 'I am a tailwind guy, best thing I ever did',  date: 'July 15, 2023', slug: 'iam-a-tailwind-guy-thank-god' , views:"502"},
]
export const revalidate = 60000000000000000000000000000;


export default async function Home() {
  return <main className="max-w-7xl font-mono m-auto mb-10 text-sm md:text-base">
  <ul>
    {blogsData.map((post: any, i: number) => {
      return (
        <li key={post.id}>
          <Link href={`/${post.slug}`}>
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
  <div className="flex w-full justify-center mt-4 pt-4 ">
  <a href="https://drive.google.com/file/d/1PZT7XO83HSmS2X5BmTjWntBAc7lTf9M1/view" target="_blank" className="flex flex-row items-center text-neutral-200 hover:text-neutral-400 hover:underline gap-2 group transition-all duration-200">
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50" fill="gray" className="group-hover:fill-neutral-500 transition-all duration-200 group-hover:text-neutral-500">
<path d="M45.58 31H32.61L19.73 6h10.754c.726 0 1.394.393 1.747 1.027L45.58 31zM23.37 17.43L9.94 43.2 3.482 33.04c-.395-.622-.417-1.411-.055-2.053L17.48 6 23.37 17.43zM45.54 33l-6.401 10.073C38.772 43.65 38.136 44 37.451 44H11.78l5.73-11H45.54z"></path>
</svg>
 <span> View CV</span></a>

  </div>
</main>;
}