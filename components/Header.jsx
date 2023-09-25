'use client'
import React from 'react'
import Image from 'next/image'
import GitHubIcon from '@mui/icons-material/GitHub';
import Chip from '@mui/material/Chip';
 const Header = () => {
  
  return (
    <div className='flex justify-end p-1'>
            <a  href='https://github.com/ebrahim-Ramadan' target='_blank' className='p-1'>
            <Chip icon={<GitHubIcon />} label="Github" variant="filled" color="info"/>
      </a>
</div>
  )
}
export default Header