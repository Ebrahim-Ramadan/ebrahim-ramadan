'use client'
import React from 'react'
import {GhIcon} from "../public/github";
import {Chip} from "@nextui-org/react";
 const Header = ({classes}) => {
  
  return (
  
    <div className={` items-center text-sm flex-row flex justify-end ${classes} font-bold p-2 gap-2`}>
      <a 
        href='https://drive.google.com/file/d/1PZT7XO83HSmS2X5BmTjWntBAc7lTf9M1/view'
        className='bg-gray-600 hover:opacity-100 hover:bg-gray-800 py-1 px-2 font-bold opacity-80 transition-all duration-30 ease-in-out flex flex-row rounded-full items-center'
        target='_blank'
        
        >
        My Resume
        <svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" viewBox="0 0 512 512" ><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg>
          </a>
         <a href='https://github.com/ebrahim-Ramadan' target='_blank'>
        <Chip color="default" variant="bordered" startContent={<GhIcon />}
        className='flex flex-row  bg-gray-600 hover:opacity-100 hover:bg-gray-800 py-1 px-2 font-bold opacity-80 transition-all duration-30 ease-in-out' 
          style={{ color: '#EEE' }}
      >Github</Chip>
      
      </a>

 </div>
  )
}
export default Header