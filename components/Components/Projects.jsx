import React from 'react';
import { Cube, Github, RightArrow, Zoom } from '../globals/Icons';
import { WorkTogether } from '../globals/WorkTogether';
import { UIs } from './Webs';

export const Projects = () => {

  return (
    <div className='flex flex-col gap-4 w-full py-4'>
      <div className='flex flex-row gap-2 md:gap-4 w-full items-center px-2 group cursor-pointer'>
      <Cube/>

      <p className='font-bold text-center text-lg md:text-xl '>
          Web UIs
        </p>
   </div>

          {UIs.map((UI) => (
            <div
               key={UI.ID} className='transition duration-200 hover:bg-white/20 gap-2 p-4 md:p-6 flex flex-col w-full rounded-lg backdrop-blur-3xl bg-white/10 group cursor-pointer'>
             <div  className='flex flex-row  w-full items-center justify-between'>
             <a href={UI.URL} target='_blank' className='font-bold text-lg md:text-xl'> 
           {UI.Title}
             </a>
       </div>
              <a href={UI.URL} target='_blank'>
              <video width="600" controls={false} autoPlay loop muted
           className=' w-full h-full rounded-lg '
           >
   <source src={UI.Preview}  />
   Your browser does not support the video tag.
         </video>
         </a>
         <a href={UI.Source_Code} target='_blank' className='flex flex-row items-center justify-end gap-2'>
                    <Github />
             </a>
         </div>
            
          ))}

     <WorkTogether/>
    </div>
  )
}
