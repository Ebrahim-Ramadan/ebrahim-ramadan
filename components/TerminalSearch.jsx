'use client'
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image'
import SummaryContent from './content/SummaryContent';
import Clone from './content/Clone';

const TerminalSearch = () => {

  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleCopy = () => {
    setCopied(true);
  
    // Clear the "info: copied" message after a delay
    setTimeout(() => {
      setCopied(false);
    }, 500);
  };
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleArrowUp = (e) => {
    if (e.key === 'ArrowUp') {
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    }
    if (e.key === 'Enter') {
      executeCommand();
    }
  };

  const handleArrowDown = (e) => {
    if (e.key === 'ArrowDown') {
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  const executeCommand = () => {
    const commands = {
      ls: 'summary - about - clone - ls - clear - greet [name]',
      summary: () => (
        <SummaryContent />
      ),
      clear: () => {
        setOutput('');
        return 'Terminal cleared.';
      },
      greet: (args) => {
        if (args.length === 0) {
          return 'Hello! Please provide a name: greet [name]';
        } else if (args.length === 1) {
          const name = args[0];
          return <div>Hello, {name}, Iam Ebrahim Ramadan</div>;
        } else {
          return 'Invalid usage. Usage: greet [name]';
        }
      },
      about: () => {
        return <Image src='https://http.cat/501' width={400} height={400} alt='still under maintainence' />
        
      },
      clone: () => {
        return <Clone onCopy={handleCopy} /> 

},
    };

    const args = input.trim().split(' ');
    const command = args[0];
    const commandArgs = args.slice(1);

    if (commands.hasOwnProperty(command)) {
      if (typeof commands[command] === 'function') { 
        const response = commands[command](commandArgs);

        setOutput((prevOutput) => (
          <>
            {prevOutput}
            <div>$ {input}</div>
            {response}
          </>
        ));
      }
      else {
        setOutput((prevOutput) => prevOutput + `$ ${input}\n${commands[command]}\n`);
      }

    } else {
      setOutput((prevOutput) => (
        <>
          {prevOutput}
          <div>$ {input}</div>
          <div className='text-red-400'>
            <Image width={400} height={400} src='https://http.cat/404' alt='command not found' />
            always refer to `ls`
          </div>
        </>
      ));
    }
    setCommandHistory((prevHistory) => [input, ...prevHistory]);
    setInput('');
    setHistoryIndex(-1);
  };

  const handleInputRef = (e) => {
    if (inputRef.current && !inputRef.current.contains(e.target)) {
      inputRef.current.focus();
    }
  };
  const scrollFunction = () => {
    if (window.scrollY > 20) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', scrollFunction);
    document.addEventListener('click', handleInputRef);

    return () => {
      document.removeEventListener('click', handleInputRef);
      window.removeEventListener('scroll', scrollFunction);
    };
  }, []);
  const topFunction = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
        <div className="w-100 py-4 px-2 bg-black text-gray-400 text-xs rounded font-mono">
      <p>run `ls` to list available commands</p>
      <pre className="whitespace-pre-wrap">{output}  {copied &&' info: copied'}</pre>
      <div className="flex mt-2 text-gray-200">
        <span className="mr-2">$</span>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleArrowUp}
          onKeyUp={handleArrowDown}
          autoFocus={true}
          className="bg-transparent border-none outline-none text-gray-200 w-full"
          ref={inputRef}
          
        />
      </div>
      </div>
      {isVisible &&
        (
        
      
    <button onClick={topFunction} className='fixed right-3 bottom-3 p-2'>
            <Image src="/ArrowUp.svg" alt="ArrowUp" width="20" height="20" />


          </button>
        )}
    </>
  );
};

export default TerminalSearch;
