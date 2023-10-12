import React from 'react';
import { Snippet } from "@nextui-org/react";
import ToolTipTemp from '../global/ToolTipTemp';

interface CloneProps {
  onCopy: () => void;
}

const Clone: React.FC<CloneProps> = () => {
  const onMob = /Mobi/.test(navigator.userAgent);

  return (
    <div className='text-blue-200 text-xs p-2 font-bold'>
      {onMob ? (
        <kbd className='border rounded border-gray-200 py-1 px-2'>
          <a href='https://github.com/Ebrahim-Ramadan/ebrahim-ramadan' target='_blank'>Github src code</a>
        </kbd>
      ) : (
        <ToolTipTemp
          content="Copy command"
          disableAnimation={true}
          placement="right"
          SnippetText="git clone https://github.com/Ebrahim-Ramadan/ebrahim-ramadan.git"
          symbol={null}        // Provide a default value for 'symbol'
          closeDelay={null}    // Provide a default value for 'closeDelay'
        />
      )}
    </div>
  );
}

export default Clone;
