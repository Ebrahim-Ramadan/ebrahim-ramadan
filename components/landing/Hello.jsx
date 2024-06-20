'use client'
import React, { Suspense, useEffect, useState } from 'react';
import Subtle3DCarousel from './Subtle3DCarousel';
import { Separator, Loader } from "../globals/Icons";
import { Projects } from '../Components/Projects';

import { WebComponents } from '../Components/WebComponents';
import {LazyLoad} from '@/utils/LazyLoad';
import { Repos } from '../Repos/Repos';

export const Hello = () => {

  return (
    <div className=''>
      <div className='flex flex-col gap-4'>

        
        
       
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
      
    </div>
  );
};

export default Hello;
