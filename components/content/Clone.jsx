import { useRouter } from 'next/navigation';
import React from 'react'

 const Clone = ({ onCopy }) => {
const router =useRouter()
      const copyTextToClipboard = () => {
    const cloneCopy = "git clone https://github.com/Ebrahim-Ramadan/ebrahim-ramadan.git"; 
    navigator.clipboard.writeText(cloneCopy)
      .then(() => {
        onCopy()
      })
      .catch(error => {
        console.error('Failed to copy text: ', error);
      });
   };
   const onMob = /Mobi/.test(navigator.userAgent)
  return (
    <div className='text-blue-200 text-xs'
          onClick={copyTextToClipboard}>
            <p>
        {'>'} <kbd className='px-1 border rounded p-1/2 border-white'>
          {onMob ? (
        <a href='https://github.com/Ebrahim-Ramadan/ebrahim-ramadan' target='_blank'>gh src code</a>
          ): (
            <a href="vscode:">click here to `git clone`` and open on vscode
            </a>
          )}
          </kbd>
            </p>
          </div>
  )
}
export default Clone;