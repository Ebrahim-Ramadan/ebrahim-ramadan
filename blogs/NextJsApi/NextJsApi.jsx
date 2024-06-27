import { Separator } from '@/components/globals/Icons'
import Image from 'next/image'
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
      <div>
        <HeadingTitle
         text='Why Nextjs'
          ID='Why-Nextjs' />
        
        I have been listening to bunch of videos/streams for big chads like
        <HighLight
          text='ThePrimeAgen' />
        and
         <HighLight
              text=' TheoT3' />
           (the big yapper in town) getting around React, theo always supporting the conceptual base of why react team did the thing, while theprime consistenly on react-sucks-btw side.
      </div>
      <div>I LOVE having both front and back logic separated anyway (but I also love what gets things done quick & safe for me without involving my feelings too much). But<HighLight text='hear me out' /> there is so much going on back and forth between the regular (separrated) fornt and back teams. the front guy requiest minor modifications on some endpoint on 3AM random tuesday and the back guy is like "I can't do that, I'm on a lunch break, I'll do it later". I am not a big fan of this kind of situation, but it is what it is. I have been trying to find a way to make this situation better, it is not easy. I will share my experience with you in this blog post.</div>
      <div>
        <LinkComponent
        href='https://vercel.com/home'
        text='Vercel'
        />
        came up with <HighLight text='Vercel Functions'/> where you can write your code in a serverless way, and it will be deployed to a cloud provider (AWS, GCP, Azure, etc) and you can call it from your front end. Vercel also has a <HighLight text='Vercel Edge Functions'/> which is a bit different, it is a function that is deployed on the edge of the internet, so it is faster and cheaper than a normal function. I will talk about Vercel Functions in another blog post.
      </div>
      <div>
        But the main thing to note is that they also made <LinkComponent
                  href='https://nextjs.org/'
                  text='Next.js'
        />, a mainly-backend-designed-in-my-opinion framework that declares it is full stack. well, it IS fullstack let us go thru how.
      </div>


      <div>
        <HeadingTitle
        href='#The-Usuals'
         text='The Usuals'
        />
        we can start with the usuals
        <LinkComponent
        href='https://nextjs.org/docs/app/building-your-application/routing'
        text='(app routing, layouts, streaming, SEO)'
        />,
        just keep in mind some things:
        <div className='flex flex-col gap-8'>

        <ListElement >
            - the (app) dir has
        <HighLight text='RSC components only' />
             where each child dir is a route segment itself (file-system based routing)
          <Image
            width={500}
            height={500}
            className='rounded-lg w-full h-full py-2'
          src='/Blogs/route-segments-to-path-segments.avif'
            />
            with the ability to do dynamic routes (like<HighLight text='`/posts/[postSlugID]`'/>) too
        </ListElement>
        <ListElement>
            - The React team got something nice (Suspense), which btw is not for showing some loadingSkeleton until some data is fetched (well not that simple) 
            <Image
            width={500}
            height={500}
            className='rounded-lg w-full h-full py-2'
          src='/Blogs/loading-overview.avif'
            />
            I like to think of it that way &rarr;
            <HighLight text='managing stale content while fresh content is loading and Preventing already revealed content from hiding'/>
           
        </ListElement>
        <ListElement>
            - One more usual thing to follow is to always have
            <LinkComponent
            href='https://tanstack.com/query/v3'
            text='react-query'
            />
            in your project, OK
            <LinkComponent
              href='https://www.youtube.com/watch?v=OrliU0e09io&t=287s&ab_channel=uidotdev'
              text='uidotdev'
            />
            and
            <LinkComponent
              href='https://www.youtube.com/watch?v=xIflplz925Y&t=1810s&ab_channel=Theo-t3%E2%80%A4gg'
              text='theo'
            />
             talked about it thought well enough. it is pretty cool.
        </ListElement>
        
        </div>
        <Separator/>
        
      </div>
      <div>
        Now we go slightely edger with (middleware, api routeS, auth, etc)
      </div>

          <BlogFooter textToCopy='https://ebrahim-ramadan.vercel.app/blogs/NextJsApi' BlogLinks={NextjsAPILinks} />
      
    </div>
  )
}
