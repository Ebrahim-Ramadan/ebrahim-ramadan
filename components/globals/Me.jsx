import Image from 'next/image'
import { Redirects, Socials } from '../landing/Links'

export const Me = () => {
  return (
    <>
    <div className='flex flex-row gap-2 md:gap-4 items-center justify-center w-full h-full'>
        <Image
              src='https://avatars.githubusercontent.com/u/65041082?s=400&u=cb58112cd92067eb53afe77fc7beb1573aab869d&v=4'
              width={200}
              height={200}
              alt='pfp'
              className='rounded-full aspect-square w-16 border border-2  bg-black/80 backdrop-blur-3xl'
      />
      
        <div className='flex flex-col   w-full h-full'>
          <div className='flex flex-row items-center'>
              <h1 className='text-lg md:text-xl font-bold'>Ebrahim Ramadan</h1>
            

            
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
       <a key={Social.id} href={Social.URL}>
          {Social.icon}
      </a>
     ))}
     
     
      </div>
     <div className='flex flex-row items-center justify-center w-full h-full px-2 gap-2 [&>*]:cursor-pointer'>
     {Redirects.map((Redirect) => (
       <a className='text-lg' key={Redirect.id} href={Redirect.URL}>
          {Redirect.icon}
      </a>
     ))}
     
     
      </div>
     
    
    </>
  )
}
