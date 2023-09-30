import React from 'react';
import {External} from "/public/External";
import { Chip } from "@nextui-org/react";
import { useRouter } from 'next/navigation';
const SummaryContent = () => {
  const router = useRouter()
  return (
    <div className='summaryResponse text-blue-200 text-xs'>
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
      
      <Chip color="primary" size="sm" radius="lg" variant="flat" endContent={<External />} style={{ color: '#EEE' }}
        className='transition-all  duration-300 ease-in-out hover:opacity-75 p-2 flex flex-row justify-center items-center h-8 gap-x-1 cursor-pointer'
        onClick={()=>router.push('https://drive.google.com/file/d/15sF0Clw9svljEaltBY_mRYzh22ExZf5K/view?usp=drive_link')}
        >
        my resume
          </Chip>
      
    </div>
  );
};

export default SummaryContent;
