import React from 'react'
import { BackToBlogs, Badge, BlogFooter, BlogHeader, CMD,  HeadingTitle, HighLight, LinkComponent, ListElement, Quote } from '../Globals'

export const NextJsApi = () => {
  const NextjsAPILinks = [
    {
        url: 'https://medium.com/@sharmojj/managing-large-files-with-git-lfs-1472e886591c',img: '/Blogs/medium.png'
    },
    {
        url: 'https://app.daily.dev/posts/managing-large-files-with-git-lfs-qvcmriucv',img: '/Blogs/daily.dev.jpg'
},
    {
        url: 'https://dev.to/ebrahimramadan/managing-large-files-with-git-lfs-3327',img: '/Blogs/dev.jpg'
},
]
  return (
    <div className="flex w-full py-16 p-4 md:p-24 lg:px-96 flex-col  gap-8 text-lg">
       <BlogHeader
              imgPath='/Blogs/nextjs.jpg'
              title='Next.js Routes (The FullStack)'
              desc='Why I Love Nextjs'
      />
          <BlogFooter textToCopy='https://ebrahim-ramadan.vercel.app/blogs/NextJsApi' BlogLinks={NextjsAPILinks} />
      
    </div>
  )
}
