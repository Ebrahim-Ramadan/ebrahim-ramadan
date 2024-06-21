import Image from 'next/image';
import React from 'react';
import { blogsData } from './BlogsData';

export const Blog = () => {
  return (
    <div className="gap-4">
      <div className='py-2'>
        <p className='text-lg md:text-xl font-bold'>
        My Blogs
        </p>
        <p className='text-gray-100 text-xs md:text-sm'>
        I write about what happened and how exactly it did, (way away from tech twt. )
        </p>
      </div>
      <div className='flex  gap-4 w-full h-full justify-end items-center mb-4'>
        <a href='https://dly.to/t4Rn84xWiW4' target='_blank' rel='noreferrer' className='border border-2 border-white/10 backdrop-blur-3xl transition duration-200 bg-white/10 hover:bg-white/20 rounded-full px-2 py-1 md:px-4 md:py-2 text-end text-white font-medium text-xs md:text-sm'>
          Join My Squad
</a>
      </div>
      <div className='flex flex-col gap-4 w-full h-full'>
      {blogsData.map((blog) => (
        <a href={`blogs/${blog.slug}`} key={blog.id} className="border border-2 border-white/10 backdrop-blur-3xl transition duration-200 bg-white/10 hover:bg-white/20 rounded-lg h-full w-full overflow-hidden">
          <Image
            src={blog.bg}
            width={500}
            height={500}
            alt={blog.title}
            className="bg-white/20 inset-0 w-full h-full -z-10"
          />
          <div className="  flex flex-col justify-end p-4 z-10">
            <p className="md:text-xl text-lg font-bold">{blog.title}</p>
            <p className="text-gray-300 text-end text-xs mt-4">{blog.date}</p>
          </div>
        </a>
      ))}
     </div>
    </div>
  );
};
