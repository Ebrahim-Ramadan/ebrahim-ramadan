import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Chip, Tooltip } from '@nextui-org/react';
import avatar from '../../public/thumbnail.jpeg';
import { getDataFromGithub } from '../../services/Repos';
import ShadcnLikeAnimation from '../global/ShadcnLikeAnimation';
import ToolTipTemp from '../global/ToolTipTemp';

const languageBasicColors: Record<string, string> = {
  JavaScript: 'yellow',
  Python: '#0090FF',
  'C++': '#F34B7D',
  Go: '#0597BB',
  C: '#555555',
  Astro: '#FF5A03',
};

const languageToolTipColors: Record<string, string> = {
  JavaScript: 'warning',
  Python: 'primary',
  Astro: 'danger',
};

interface Repo {
  name: string;
  language: string;
  svn_url: string;
}

const About: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [fetching, setFetching] = useState<boolean>(false);

  useEffect(() => {
    const getGitHubReposFetching = async () => {
      setFetching(true);
      // Working on better caching layers
      try {
        const MyRepos = await getDataFromGithub('ebrahim-ramadan');
        setRepos(MyRepos);
      } catch (error) {
        console.log(error);
      }
      setFetching(false);
    };
    getGitHubReposFetching();
  }, []);

  const onMob = /Mobile|Android|iPhone|iPad|iPod|Windows Phone|IEMobile/i.test(
    navigator.userAgent
  );


  return (
    <div className="p-2 text-gray-200 flex flex-col gap-y-2 max-w-full">
      <div
        className="flex cursor-pointer flex-row items-center gap-x-2"
        onClick={() => window.open('https://twitter.com/scoopsahoykid', '_blank')}
      >
        <Image src={avatar} width={40} height={40} alt="shamrojj" className="text-gray-200 rounded-full border-2 border" />
        <div>
          <p className="text-base md:text-lg text-gray-200 font-bold">Ebrahim Ramadan</p>
          <p className="text-gray-400 md:text-[10px] text-[10px]/[12px]">LOVES learning/doing cool stuff</p>
        </div>
      </div>
      <div>
        <ToolTipTemp symbol="@" content="Copy my email" disableAnimation={true} placement="right" SnippetText="ramadanebrahim791@gmail.com" closeDelay={undefined} />
      </div>
      <div className="flex flex-col px-2 gap-y-1">
        <div>
          CS Sophomore Student at{' '}
          <span className="text-blue-400 font-bold">
            <a target="_blank" href="https://www.ejust.edu.eg/">
              E-JUST
            </a>
          </span>
        </div>
        <div>
          Current Position: Front-End developer at{' '}
          <span className="text-red-500 font-bold">
            <a target="_blank" href="https://www.eyedias.co/">
              Eyedias
            </a>
          </span>
        </div>
        <p className="text-lg font-bold mt-4">My projects</p>
      </div>
      <div className="flex flex-row gap-2 max-w-full flex-wrap p-2">
        {fetching && <ShadcnLikeAnimation />}

        {repos?.map((repo, idx) => (
  <Tooltip
    key={idx}
    color={(languageToolTipColors[repo.language] as 'warning' | 'primary' | 'danger' | 'default' | 'secondary' | 'success' | undefined) || 'default'}
    content={repo.name + ' - ' + (repo.language || 'JS || TS')}
    className="capitalize"
  >
    <a href={repo.svn_url} target="_blank">
      <Chip
        size="sm"
        color={(languageToolTipColors[repo.language] as 'warning' | 'primary' | 'danger' | 'default' | 'secondary' | 'success' | undefined) || 'default'}
        style={{ color: `${languageBasicColors[repo.language] || 'white'}`, fontWeight: 'bold' }}
        variant="bordered"
      >
        {repo.name.length > 10 ? repo.name.substring(0, !onMob ? 25 : 15) + '...' : repo.name}
      </Chip>
    </a>
  </Tooltip>
))}



      </div>
    </div>
  );
};

export default About;
