'use client'
import React from 'react'
import Image from 'next/image'
 const Header = () => {
  return (
    <div className='flex justify-end p-1'>
            <a  href='https://github.com/ebrahim-Ramadan' target='_blank' className='p-1'>
            <Image src="/github.svg" alt="My github" width="30" height="30" />
    </a>
</div>
  )
}
export default Header