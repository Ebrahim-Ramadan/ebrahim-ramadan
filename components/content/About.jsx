'use client'
import React, { useEffect , useState} from 'react'
import Image from 'next/image';
import {Chip} from "@nextui-org/react";
import avatar from '@/public/thumbnail.jpeg';
import { useRouter } from 'next/navigation';
import { getDataFromGithub } from '@/services/Repos.js'
import ShadcnLikeAnimation from '@/components/global/shadcnLikeAnimation'
import { Tooltip } from "@nextui-org/react";
import secureLocalStorage from "react-secure-storage";
import {Snippet} from "@nextui-org/react";

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
    try {
      const cachedRepos = secureLocalStorage.getItem('cachedRepos'); //storing for a caching layer
        if (cachedRepos) {
          setrepos(cachedRepos);
        } else {
          const MyRepos = await getDataFromGithub("ebrahim-ramadan");
          setrepos(MyRepos); //local
          secureLocalStorage.setItem('cachedRepos', MyRepos)//secured storage for caching
      }
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
        <Snippet symbol="@"
          tooltipProps={{
        color: "foreground",
        content: "Copy my email",
        disableAnimation: false,
        placement: "right",
        closeDelay: 0
        }}
          className='text-gray-100' variant="bordered" size="sm" color="default">ramadanebrahim791@gmail.com</Snippet>
        </div>
      <div className='flex flex-col px-2 gap-y-1'>
        <div>
          CS Sophomore Student at <span className='text-blue-400 font-bold'><a target='_blank' href='https://www.ejust.edu.eg/'>E-JUST</a></span>
        </div>
        <div>
          Current Position: Front-End developet at <span className='text-red-500 font-bold'><a target='_blank' href='https://www.eyedias.co/'>Eyedias</a></span>
        </div>
</div>
      <div className='flex flex-row gap-2 max-w-full flex-wrap p-2'>
        {fetching &&
<ShadcnLikeAnimation/>
        
        }
        {repos?.map((repo, idx) => (
          <Tooltip key={idx} color={languageToolTipColors[repo.language] || 'foreground'} content={repo.name+' - '+(repo.language || 'JS || TS')} className="capitalize">
            <a href={repo.svn_url} target='_blank'>
            <Chip  size="small" color={languageToolTipColors[repo.language] || 'white'}
            style={{color:`${languageBasicColors[`${repo.language}`]}`}}
                variant="bordered" >
                {repo.name.length > 10 ? repo.name.substring(0, 25) + '...' : repo.name} {/* substrining on mobile */}
              </Chip>
            </a>
        
        </Tooltip>
        ))}
</div>
    </div>
  )
}
export default About;