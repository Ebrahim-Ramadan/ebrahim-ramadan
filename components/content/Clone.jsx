import { useRouter } from 'next/navigation';
import React from 'react'
import {Snippet} from "@nextui-org/react";
 const Clone = ({ onCopy }) => {
   const onMob = /Mobi/.test(navigator.userAgent)
  return (
    <div className='text-blue-200 text-xs p-2 font-bold'
          >
       
      {onMob ? (
           <kbd className='border rounded border-gray-200 py-1 px-2' > 
         <a href='https://github.com/Ebrahim-Ramadan/ebrahim-ramadan' target='_blank'>Github src code</a></kbd>
          ): (
            <Snippet className='text-gray-200' size="sm" color="default">git clone https://github.com/Ebrahim-Ramadan/ebrahim-ramadan.git</Snippet>
          )}
         
          </div>
  )
}
export default Clone;