'use client';

import { Drawer } from 'vaul';

export function ProjectDrawer({children, trigger}) {
  return (
   
    <div className=" ">
       
    <div className="flex gap-4 ">
      <Drawer.Root shouldScaleBackground>
        <Drawer.Trigger asChild>
        {trigger}
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content className="bg-gray-100 flex flex-col rounded-t-[10px] h-full mt-24 max-h-[96%] fixed bottom-0 left-0 right-0">
            <div className="p-4 bg-white rounded-t-[10px] flex-1">
              <Drawer.Handle className="bg-gray-300 mb-8" />
              <div className="max-w-md mx-auto">
                <Drawer.Title className="font-medium mb-4">Drawer for React.</Drawer.Title>
               </div>
            </div>
            
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
     
    </div>
  </div>
  );
}