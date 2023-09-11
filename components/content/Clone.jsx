import React from 'react'

 const Clone = ({ onCopy }) => {

      const copyTextToClipboard = () => {
    const cloneCopy = "git clone https://github.com/Ebrahim-Ramadan/ebrahim-ramadan.git"; 
    navigator.clipboard.writeText(cloneCopy)
      .then(() => {
        onCopy()
        console.log('copied');
      })
      .catch(error => {
        console.error('Failed to copy text: ', error);
      });
  };
  return (
    <div className='p-2 text-blue-200 text-xs'
          onClick={copyTextToClipboard}>
            <p>
{ '>'} <kbd className='border rounded p-1/2 border-white'>click here</kbd> to copy `git clone github.com/Ebrahim-Ramadan/ebrahim-ramadan.git`
            </p>
          </div>
  )
}
export default Clone;