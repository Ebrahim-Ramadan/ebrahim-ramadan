'use client'
import React, { Suspense, useEffect, useState } from 'react';
import Image from 'next/image';
import Subtle3DCarousel from './Subtle3DCarousel';
import { Separator, Loader } from "../globals/Icons";
import { Projects } from '../Components/Projects';
import { Socials } from './Links';

import { WebComponents } from '../Components/WebComponents';
import {LazyLoad} from '@/utils/LazyLoad';
import { Repos } from '../Repos/Repos';
export const Hello = () => {

  return (
    <div className='mx-auto mb-14 w-full max-w-screen-sm flex-1 p-4 md:p-24 space-y-8'>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-row gap-2 md:gap-4 items-center justify-center w-full h-full'>
        <Image
              src='https://avatars.githubusercontent.com/u/65041082?s=400&u=cb58112cd92067eb53afe77fc7beb1573aab869d&v=4'
              width={200}
              height={200}
              alt='pfp'
              className='rounded-full aspect-square w-16 border border-2  bg-black/80 backdrop-blur-3xl'
      />
      
        <div className='flex flex-col   w-full h-full'>
          <div className='flex flex-row items-center'>
              <h1 className='text-lg md:text-xl font-bold'>Ebrahim Ramadan</h1>
            

            
          </div>
          <div className='text-xs md:text-sm [&>*]:leading-none text-gray-300'>
          <p>
           Frontend Engineer
          

          </p>
          <p>
            Programming Instructor at <a href='https://www.ischooltech.com/' target='_blank' rel='noreferrer' className='font-bold underline cursor-pointer'> iSchool</a>.
            </p>
           
          </div>
        </div>
     </div>
        <div className='flex flex-row items-center justify-end w-full h-full px-4 gap-2 [&>*]:cursor-pointer'>
          {Socials.map((Social) => (
            <a key={Social.id} href={Social.URL}>
               {Social.icon}
           </a>
          ))}
          
          
       </div>
      </div>
      <div className='flex flex-col group  w-full h-full'>
          <p className='font-medium '>About Me</p>
          <p className='text-xs md:text-sm [&>*]:leading-none text-gray-300'>
          I am a web developer and a Computer Science student at Egypt-Japan University of Science and Technology (E-Just). He has a presence on GitHub, where he shares various coding projects and snippets. His projects cover a range of topics including solving first-order ODEs using MATLAB, converting images to PDFs using Next.js, and creating a human-readable timestamp component in React.js.

        </p>
        <a href='https://chatgpt.com/share/96818346-989d-4dff-b2a8-df312ef48ff6' target='_blank' rel='noreferrer' className='text-end text-gray-400 font-medium text-sm group-hover:text-gray-300'>@ ChatGPT 4</a>
      </div>
      
      <div className='w-full flex flex-row items-center justify-center'>
      <Subtle3DCarousel/>
      </div>
      <Separator/>
      <LazyLoad>
      <Suspense fallback={
          <Loader/>
        }>
          <Projects/>
    </Suspense>
      </LazyLoad>
      <Separator/>
      
      <LazyLoad>
      <Suspense fallback={
          <Loader/>
        }>
          <WebComponents/>
    </Suspense>
      </LazyLoad>
      <Separator/>
      
      <LazyLoad>
      <Suspense fallback={
          <Loader/>
        }>
          <Repos/>
    </Suspense>
</LazyLoad>
      
      
      {/* when scrolled */}
    </div>
  );
};

export default Hello;
