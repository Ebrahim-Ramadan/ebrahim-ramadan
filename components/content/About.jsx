'use client'
import React, { useEffect , useState} from 'react'
import Image from 'next/image';
import Chip from '@mui/material/Chip';
import avatar from '@/public/thumbnail.jpeg';
import { useRouter } from 'next/navigation';
import { getDataFromGithub } from '@/services/Repos.js'

const languageColors = {
  JavaScript: "yellow",
  Python: "#0090FF",
  "C++": "#F34B7D",
  Go: "#0597BB",
  C: "#555555",
  Astro:"#FF5A03",
};


const About = () => {
  const [repos, setrepos] = useState([]);
useEffect(() => {
  const gethubReposFetching = async () => {
    const MyRepos = await getDataFromGithub("ebrahim-ramadan");
    setrepos(MyRepos);


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

      <div className='flex   flex-row items-center gap-x-2'>
      <Image src={avatar} width='40' height='40' alt='shamrojj' className='text-gray-200 rounded-full border-2 border' />
        <div>
        <p className='text-base md:text-lg text-gray-200 font-bold'>Ebrahim Ramadan</p>
        <p className='text-gray-400 md:text-[10px] text-[10px]/[12px]'>CS Sophomore Student who LOVES learning/doing cool stuff</p>
      </div>

</div>

      <div className='flex flex-row gap-2 max-w-full flex-wrap p-2'>

        {repos?.map((repo, idx) => (
          <Chip label={repo.name} key={idx} size="small" color="info"
            style={{color:`${languageColors[`${repo.language}`]}`}}
            variant="outlined" onClick={() => router.push(`${repo.svn_url}`)} />
          
        ))}
</div>
    </div>
  )
}
export default About;