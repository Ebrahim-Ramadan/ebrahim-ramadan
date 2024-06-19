'use client';

import Image from 'next/image';
import { Drawer } from 'vaul';
import { RightArrow } from '../globals/Icons';

export function DrawerComponent() {
  return (
   
    <Drawer.Root shouldScaleBackground>
    <Drawer.Trigger asChild>
        <div className='w-full h-full flex flex-col items-center justify-center'>
        <button className='rounded-full bg-white/80 py-2 px-4 text-black font-medium'>
        Trigger Drawer
   </button>
        </div>
    </Drawer.Trigger>
    <Drawer.Portal>
      <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-black/90 flex flex-col rounded-t-[10px] h-full mt-24 max-h-[96%] fixed bottom-0 left-0 right-0">
          <div className="flex flex-row items-center justify-center w-full h-16 px-4 py-2 bg-black/80">
            <RightArrow className="w-8 h-8 text-white"/>
          </div>
          <div className="flex flex-col gap-4 p-16 w-full">
            <Image
              src='https://raw.githubusercontent.com/Ebrahim-Ramadan/ebrahim-ramadan/main/public/vaul.png'
              width={800}
              height={800}
              alt='pfp'
              className='w-full h-full rounded-t-[10px] '
            />
        </div>
        
      </Drawer.Content>
    </Drawer.Portal>
  </Drawer.Root>
  );
}