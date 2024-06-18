import React from 'react'
import { Component, RightArrow, Star, Zoom } from '../globals/Icons'
import { Webs } from './Webs'
import { ProjectDrawer } from '../ProjectDrawer/ProjectDrawer'
export const  WebComponents = () => {
  return (
    <div className='flex flex-col gap-4 w-full py-4'>
      <a className='flex flex-row gap-2 md:gap-4 w-full items-center px-2 group cursor-pointer'>
      <Component/>

      <p className='font-bold text-center text-lg md:text-xl '>
          Web Components
        </p>
   </a>

          {Webs.map((component) => (
            <ProjectDrawer 
            key={component.ID}
              trigger={
<div  className='transition duration-200 hover:bg-white/20 gap-2 p-4 md:p-6 flex flex-col w-full rounded-lg backdrop-blur-3xl bg-white/10 group cursor-pointer'>
                  <div className='flex flex-row  w-full items-center justify-between'>
                  <p className='font-bold text-lg md:text-xl'> 
                {component.Title}
                  </p>
                  <Zoom/>
            </div>
              <video width="600" controls={false} autoPlay loop muted
                className=' w-full h-full rounded-lg '
                >
        <source src={component.Preview}  />
        Your browser does not support the video tag.
              </video>
             
              </div>
              }>
              ass
              </ProjectDrawer>
            
          ))}

      <a href='https://www.upwork.com/freelancers/~01186b4e899280824e?viewMode=1' target='_blank' className='bg-white text-black hover:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] group flex flex-row justify-center w-full items-center font-medium cursor-pointer p-2   rounded-3xl'>
         Work Together
        <RightArrow className='group-hover:scale-110 transition-transform duration-200 ease-in-out'/>
      </a>
    </div>
  )
}
