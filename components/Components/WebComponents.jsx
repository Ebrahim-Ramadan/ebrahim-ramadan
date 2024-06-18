import React from 'react'
import { Component, Github, RightArrow,  Zoom } from '../globals/Icons'
import { Webs } from './Webs'
import { ProjectDrawer } from '../ProjectDrawer/ProjectDrawer'
import { WorkTogether } from '../globals/WorkTogether'
export const  WebComponents = () => {
  return (
    <div className='flex flex-col gap-4 w-full py-4'>
      <div className='flex flex-row gap-2 md:gap-4 w-full items-center px-2 group cursor-pointer'>
      <Component/>

      <p className='font-bold text-center text-lg md:text-xl '>
          Web Components
        </p>
   </div>

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

     <WorkTogether/>
    </div>
  )
}

export default WebComponents