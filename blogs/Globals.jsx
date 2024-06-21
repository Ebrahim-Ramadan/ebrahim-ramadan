import React from 'react'

export const CodeSnippet = ({code, lang}) => {
    return (
        <div className="mt-5 mb-8 first:mt-0 last:mb-0 from-indigo-500 to-blue-400 relative -mx-4 pt-6 pl-4 bg-gradient-to-b sm:mx-0 sm:rounded-2xl sm:pt-12 sm:pl-12">
        <div className="rounded-tl-xl overflow-hidden sm:rounded-br-xl">
            <div className="pt-2 bg-slate-800 shadow-lg group">
                <div className="flex text-slate-400 text-xs leading-6">
                    <div className="flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center">{lang}</div><div className="flex-auto flex items-center bg-slate-700/50 border border-slate-500/30 rounded-tl"></div>
                </div>
                <div className="children:my-0 children:!shadow-none children:bg-transparent">
                    <pre className="language-jsx">
                        <code className="language-jsx">
                            {code}
                        </code>
                    </pre>
                </div>
            </div>
      </div>
  </div>
   
  )
}
export const CMD = ({ cmd }) => {
    return (
        <div className='backdrop-blur-lg  py-4 flex flex-col items-center justify-center'>
            <pre className="  rounded-lg bg-white/10 text-white p-4 w-fit">
        {cmd}
        </pre>
        </div>
    )
}


export const HighLight = ({  text }) => {
    return (
        <span   className='px-2 py-1 font-bold text-blue-400 hover:text-blue-600 '>
            {text}
        </span>
    )
}

export const Link = ({ text , href}) => {
    return (
        <a href={href}  rel="noopener noreferrer" className=' mx-1 custom-underline font-medium'>
            {text}
        </a>
    )
}
export const Quote = ({ text }) => {
    return (
        <blockquote className="p-4 my-4 w-fit text-center border-s-4 border-gray-300 bg-white/10 ">
        <p className="text-base md:text-lg italic font-medium leading-relaxed text-slate-200">"{text}"</p>
    </blockquote>
    )
}
export const HeadingTitle = ({ text , ID}) => {
    return (
        <div className='w-fit px-2 text-start scroll-mt-12 scroll-smooth' id={ID}>
            
            <a href={`#${ID}`} className="text-3xl  font-bold "
           
            ># {text}
             
            </ a>
       </div>
    )
}
export const ListElement = ({ children}) => {
    return (
        <div className='px-2 py-1 font-medium'>
           {children}
       </div>
    )
}

export const BlogLinks = ({ links }) => {
    return (
        <div className='flex flex-row items-center justify-end'>
        {links.map((link, index) => (
            <Link
                key={index}
                text={link.text}
                href={link.href}
            />
        ))}
        </div>
    )
}



export const Badge = ({href, text}) => {
    return (
      <a href={href} target='_blank' rel='noopener noreferrer' className='px-2 py-1 font-medium w-fit rounded-full border border-white/10 bg-blue-400 text-xs'>
        
       {text}
        
      </a>
    );
  };
  