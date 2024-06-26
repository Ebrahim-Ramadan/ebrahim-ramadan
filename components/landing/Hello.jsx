'use client'
import React, { Suspense, useEffect, useState } from 'react';
import Subtle3DCarousel from './Subtle3DCarousel';
import { Separator, Loader, Copy } from "../globals/Icons";
import { Projects } from '../Components/Projects';

import { WebComponents } from '../Components/WebComponents';
import {LazyLoad} from '@/utils/LazyLoad';
import { Repos } from '../Repos/Repos';
import { copyToClipboard } from '@/utils/Copy';

export const Hello = () => {

  return (
    <div className=''>
     
      <div className='flex flex-col group  w-full h-full'>
          <p className='font-medium '>About Me</p>
          <p className='text-xs md:text-sm [&>*]:leading-none text-gray-300'>
          I am a web developer and a Computer Science student at Egypt-Japan University of Science and Technology (E-Just). My projects cover a range of topics including automation scripts, frontend/ backend logic, and some descent UIs.

        </p>
       
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
