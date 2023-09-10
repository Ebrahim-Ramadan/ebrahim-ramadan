'use client'
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image'
import Link from 'next/link'
const TerminalSearch = () => {

  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);

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
      help: 'Available commands: summary, about, clone, help, clear, greet [name]',
      summary: () => (
        <div
          className='summaryResponse text-blue-200 text-xs'>
          <br />
          
          <p>
            Nmae: Ebrahim Ramadan
          <br />
            ramadanebrahim791@gmail.com

          </p>
          <br />
          <br />

          <a
            href='https://www.linkedin.com/in/ebrahim-ramadan-a9a9991a6/' target='_blank'>
            { '>'} LinkedIn.Ebrahim-Ramadan <span>&nbsp;</span>
        </a>
          <br />
          <br />
<a href='https://github.com/Ebrahim-Ramadan' target='_blank'>
{ '>'} Github.Ebrahim-Ramadan <span>&nbsp;</span>
          </a>
          <br />
          <br />

          <a
            href='https://gist.github.com/Ebrahim-Ramadan' target='_blank'>
           { '>'} Gists.Github.Ebrahim-Ramadan <span>&nbsp;</span>
          </a>
          <br />
          
          <br />
          <br />
          <br />

          
</div>
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
        return <Image src='https://http.cat/501' width={400} height={400} alt='still under maintainence'/>
      },
      clone: () => {
        return (
          <div className='summaryResponse text-blue-200 text-xs'>
            <a href='https://github.com/Ebrahim-Ramadan/ebrahim-ramadan'  target='_blank'>
{ '>'} Source Code <span>&nbsp;</span>
            </a>
          </div>

        )

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
          <div>
            <Image width={400} height={400} src='https://http.cat/404' alt='command not found'/>
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

  useEffect(() => {
    document.addEventListener('click', handleInputRef);

    return () => {
      document.removeEventListener('click', handleInputRef);
    };
  }, []);

  return (
    <div className="w-100 py-4 px-2 bg-black text-gray-400 text-xs rounded font-mono">
      <p> this is a terminal-like window, run `help`</p>
      <pre className="whitespace-pre-wrap">{output}</pre>
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
  );
};

export default TerminalSearch;
