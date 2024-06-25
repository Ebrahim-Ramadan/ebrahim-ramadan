import { Link } from 'next-view-transitions'
import Image from 'next/image'
import { Redirects, Socials } from '../landing/Links'

export const Me = () => {
  return (
    <>
    <div className='flex flex-row gap-2 md:gap-4 items-center justify-center w-full h-full'>
        
      <Link href='/' >
          <Image
              src='https://avatars.githubusercontent.com/u/65041082?s=400&u=cb58112cd92067eb53afe77fc7beb1573aab869d&v=4'
              width={200}
              height={200}
              alt='pfp'
              className='rounded-full aspect-square w-16 border border-2  bg-black/80 backdrop-blur-3xl'
      />
          
      </Link>
        <div className='flex flex-col   w-full h-full'>
          <div className='flex flex-row items-center'>
            <Link href='/' >
            <h1 className='text-lg md:text-xl font-bold'>Ebrahim Ramadan</h1>
            </Link>
            

            
          </div>
          <div className='text-xs md:text-sm [&>*]:leading-none text-gray-300'>
          <p>
           Frontend Engineer
          

          </p>
          <p>
            Programming Instructor at <a href='https://www.ischooltech.com/' target='_blank' rel='noreferrer' className='font-bold underline cursor-pointer'> iSchool</a>.
            </p>
           
          </div>
        </div>
    </div>
     <div className='flex flex-row items-center justify-end w-full h-full px-4 gap-2 [&>*]:cursor-pointer'>
     {Socials.map((Social) => (
       <a key={Social.id} href={Social.URL} target='_blank' rel='noreferrer'>
          {Social.icon}
      </a>
     ))}
     
     
      </div>
     <div className='flex flex-row items-center justify-center w-full h-full md:px-2 md:gap-2 gap-1 [&>*]:cursor-pointer'>
     {Redirects.map((Redirect) => (
       <Link className='text-[10px] md:text-sm flex flex-row items-center gap-2 text-gray-200 hover:text-gray-50 bg-white/10 hover:bg-white/20 rounded-lg p-2 backdrop-blur-3xl' key={Redirect.id} href={Redirect.URL} target={`${Redirect.text=='My Resume' || Redirect.text=='My Channel'?'_blank':'_self'}`}>
         {Redirect.icon}
         {Redirect.text}
         
      </Link>
     ))}
     
     
      </div>
     
    
    </>
  )
}
