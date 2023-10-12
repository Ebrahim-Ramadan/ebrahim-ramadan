import React from 'react';
import { GhIcon } from "../public/github";
import { Chip } from "@nextui-org/react";

interface HeaderProps {
  classes: string;
}

const Header: React.FC<HeaderProps> = ({ classes }) => {
  return (
    <a href='https://github.com/ebrahim-Ramadan' target='_blank' className={`${classes} flex justify-end p-2`}>
      <Chip
        color="default"
        variant="bordered"
        startContent={<GhIcon  size={20} height={20} width={20}/>}
        className='flex flex-row md:text-md text-sm bg-gray-600 hover:opacity-100 hover:bg-gray-800 py-1 px-2 font-bold opacity-80 transition-all duration-30 ease-in-out'
        style={{ color: '#EEE' }}
      >
        Github
      </Chip>
    </a>
  );
}

export default Header;
