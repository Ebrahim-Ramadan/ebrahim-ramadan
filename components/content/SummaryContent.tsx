import React from 'react';
import { Chip } from "@nextui-org/react";
import { useRouter } from 'next/navigation';
const SummaryContent = () => {
  const router = useRouter()
  return (
    <div className='summaryResponse text-blue-200 text-xs w-auto'>
      <br />
      <p>Iam Ebrahim Ramadan</p>
      <p>Front-End developer</p>
      <br />
      <p>AND I FREAKING LOVE CATS</p>
      <br />
      <br />
      <p>see:</p>
      <br />
      <a href='https://www.linkedin.com/in/ebrahim-ramadan-a9a9991a6/' target='_blank'>
        { '>'} LinkedIn.Ebrahim-Ramadan <span>&nbsp;</span>
      </a>
      <br />
      <br />
      <a href='https://github.com/Ebrahim-Ramadan' target='_blank'>
        { '>'} Github.Ebrahim-Ramadan <span>&nbsp;</span>
      </a>
      <br />
      <br />
      <a href='https://gist.github.com/Ebrahim-Ramadan' target='_blank'>
        { '>'} Gists.Github.Ebrahim-Ramadan <span>&nbsp;</span>
      </a>
      <br />
      <br />
      <a href='https://twitter.com/scoopsahoykid' target='_blank'>
        { '>'} twt.Ebrahim-Ramadan <span>&nbsp;</span>
      </a>
      <br />
      <br />
      
      <Chip color="primary" size="sm" radius="lg" variant="flat" endContent={ <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff"  height="0.85em" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg>} style={{ color: '#EEE' }}
        className='transition-all  duration-300 ease-in-out hover:opacity-75 p-2 flex flex-row justify-center items-center h-8 gap-x-1 cursor-pointer'
        onClick={()=>router.push('https://drive.google.com/file/d/1PZT7XO83HSmS2X5BmTjWntBAc7lTf9M1/view?usp=sharing')}
        >
        my resume
          </Chip>
      
    </div>
  );
};

export default SummaryContent;
