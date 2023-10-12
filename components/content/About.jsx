'use client'
import React, { useEffect , useState} from 'react'
import Image from 'next/image';
import {Chip} from "@nextui-org/react";
import avatar from '@/public/thumbnail.jpeg';
import { useRouter } from 'next/navigation';
import { getDataFromGithub } from '@/services/Repos.js'
import ShadcnLikeAnimation from '@/components/global/shadcnLikeAnimation'
import ToolTipTemp from '@/components/global/ToolTipTemp'
import { Tooltip } from "@nextui-org/react";

const languageBasicColors = {
  JavaScript: "yellow",
  Python: "#0090FF",
  "C++": "#F34B7D",
  Go: "#0597BB",
  C: "#555555",
  Astro:"#FF5A03",
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
  const router = useRouter()
  return (
    <div className='p-2 text-gray-200 flex flex-col gap-y-2 max-w-full' >

      <div className='flex  cursor-pointer flex-row items-center gap-x-2' onClick={() => router.push('https://twitter.com/scoopsahoykid')} >
      <Image src={avatar} width='40' height='40' alt='shamrojj' className='text-gray-200 rounded-full border-2 border' />
        <div>
        <p className='text-base md:text-lg text-gray-200 font-bold'>Ebrahim Ramadan</p>
        <p className='text-gray-400 md:text-[10px] text-[10px]/[12px]'>LOVES learning/doing cool stuff</p>
      </div>
      
      </div>
      <div>
        <ToolTipTemp symbol="@" content="Copy my email" disableAnimation={true} placement="right" SnippetText="ramadanebrahim791@gmail.com"/>
        </div>
      <div className='flex flex-col px-2 gap-y-1'>
        <div>
          CS Sophomore Student at <span className='text-blue-400 font-bold'><a target='_blank' href='https://www.ejust.edu.eg/'>E-JUST</a></span>
        </div>
        <div>
          Current Position: Front-End developet at <span className='text-red-500 font-bold'><a target='_blank' href='https://www.eyedias.co/'>Eyedias</a></span>
        </div>
        <p className='text-lg font-bold mt-4'>
        My projects
      </p>
      </div>
      
      <div className='flex flex-row gap-2 max-w-full flex-wrap p-2'>
        {fetching &&
<ShadcnLikeAnimation/>
        
        }
        {repos?.map((repo, idx) => (
          <Tooltip key={idx} color={languageToolTipColors[repo.language] || 'foreground'} content={repo.name+' - '+(repo.language || 'JS || TS')} className="capitalize">
            <a href={repo.svn_url} target='_blank'>
            <Chip  size="small" color={languageToolTipColors[repo.language] || 'white'}
            style={{color:`${languageBasicColors[`${repo.language}`]}`||'white', fontWeight:'bold'}}
                variant="bordered" >
                {repo.name.length > 10 ? repo.name.substring(0, !onMob?25:15) + '...' : repo.name} {/* substrining on mobile */}
              </Chip>
            </a>
        
        </Tooltip>
        ))}
</div>
    </div>
  )
}
export default About;