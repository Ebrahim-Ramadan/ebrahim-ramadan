'use client'
import React, { useEffect , useState} from 'react'
import Image from 'next/image';
import {Chip} from "@nextui-org/react";
import avatar from '@/public/thumbnail.jpeg';
import { getDataFromGithub } from '@/services/Repos.js'
import ShadcnLikeAnimation from '@/components/global/shadcnLikeAnimation'
import { Tooltip } from "@nextui-org/react";
import {manuals} from './langs-manual'
const languageBasicColors = {
  JavaScript: "yellow",
  Python: "#0090FF",
  "C++": "#F34B7D",
  Go: "#0597BB",
  C: "#555555",
  Astro:"#FF5A03",
  'C#':"#178600",
};
const languageToolTipColors = {
  JavaScript: "warning",
  Python: "primary",
  Astro:"danger",
};


const About = () => {
  const [repos, setrepos] = useState([]);
  const [fetching, setfetching] = useState(false);
useEffect(() => {
  const gethubReposFetching = async () => {
    setfetching(true)
    //working on better caching layers
    try {
      const MyRepos = await getDataFromGithub("ebrahim-ramadan");
      setrepos(MyRepos); //local
    } catch (error) {
      console.log(error);
    }
    setfetching(false)


    //fetching the collabs for the repo
    // import { GetCollab } from '@/services/GetCollab.js'
// import { Octokit, App } from "octokit";
    
    // const targetRepo = MyRepos.find(repo => repo.name === 'Video_Capturer_and_Recorder');
    //   const octokit = new Octokit({
    //     auth: bat,
        
    //   });
  
    //   try {
    //     const collabsResponse = await octokit.rest.repos.listCollaborators({
    //       owner: 'ebrahim-ramadan',
    //       repo: targetRepo, 
    //     });
  
    //     const collabs = collabsResponse.data;
    //     console.log('Found repository with name "Video_Capturer_and_Recorder":', targetRepo, 'collabs', collabs);
    //   } catch (error) {
    //     console.error('Error fetching collaborators:', error);
    //   }
    
  }
  gethubReposFetching()
}, []);
const onMob= /Mobile|Android|iPhone|iPad|iPod|Windows Phone|IEMobile/i.test(navigator.userAgent)
  return (
    <div className='p-2 text-gray-200 flex flex-col gap-y-2 max-w-full' >

      <a href='https://github.com/ebrahim-ramadan' target='_blank' className='flex  cursor-pointer flex-row items-center gap-x-2'>
      <Image src={avatar} width='40' height='40' alt='shamrojj' className='text-gray-200 rounded-full border-2 border' />
        <div>
        <p className='text-base md:text-lg text-gray-200 font-bold'>Ebrahim Ramadan</p>
        <p className='text-gray-400 md:text-[10px] text-[10px]/[12px]'>LOVES learning/doing cool stuff</p>
      </div>
      
      </a>
      <div>
      ramadanebrahim791@gmail.com
        </div>
      <div className='flex flex-col px-2 gap-y-1 mb-4'>
        <div>
          CS Sophomore Student at <span className='text-blue-400 font-bold'><a target='_blank' href='https://www.ejust.edu.eg/'>E-JUST</a></span>
        </div>
        <div>
          Current Position: Front-End developet at <span className='text-red-500 font-bold'><a target='_blank' href='https://www.eyedias.co/'>Eyedias</a></span>
        </div>
        <p className='text-lg font-bold mt-4'>
          My projects in
          <br/>
          <div className='text-xs px-2 py-1 inline-block rounded-lg'>
          {manuals.map((lang, key) => (
    <span key={key} style={{ color: `${languageBasicColors[lang.label]} ` }}>
              {lang.lang}
              {key < manuals.length - 1 ? ' ' : ''}
    </span>
          ))}
            </div>
      </p>
      </div>
      
      <div className='flex flex-row gap-2 max-w-full flex-wrap p-2'>
        {fetching &&
<ShadcnLikeAnimation/>
        
        }
        {repos?.map((repo, idx) => (
          <Tooltip key={idx} content={repo.name+' | '+(repo.language || 'JS || TS')} className="capitalize px-2 py-1 rounded-xl backdrop-blur-sm backdrop-grayscale backdrop-blur-md text-sm">
            <a href={repo.svn_url} target='_blank'>
              <Chip size="sm" color={languageToolTipColors[repo.language] || 'white'}
                className='backdrop-blur-sm backdrop-grayscale backdrop-blur-md p-1'
            style={{color:`${languageBasicColors[`${repo.language}`]}`||'white', fontWeight:'bold',fontSize:'15px'}}
                variant="bordered" >
                {repo.name.length > 10 ? repo.name.substring(0, !onMob?25:10) + '...' : repo.name} {/* substrining on mobile */}
              </Chip>
            </a>
        
        </Tooltip>
        ))}
</div>
    </div>
  )
}
export default About;