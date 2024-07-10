import React, { useState } from 'react';

interface StartScreenProps {
  onStart: (userName: string, userDifficulty: string) => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  const [name, setName] = useState<string>('');
  const [difficulty, setDifficulty] = useState<string>('easy');

  const handleStartClick = () => {
    if (name) {
      onStart(name, difficulty);
    } else {
      alert("Por favor ingrese su nombre.");
    }
  };

  return (
    <div className="flex flex-col rounded-3xl text-center items-center mt-10 p-10 bg-opacity-50 bg-[#888] dark:bg-violet-300 w-[30rem] h-[30rem] mx-auto max-sm:w-[20rem] ">
      <h1 className='text-3xl mb-4'>Memory Game</h1>
      <label className='text-xl'>
        Set Name:
        <input className='m-2 rounded-xl text-center bg-slate-500 text-pink-200' type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label className='m-2 text-xl flex flex-col'>
        Dificult:
        <select className='mt-2 rounded-md w-[6rem] h-18 bg-slate-950 text-slate-100' value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
          <option value="easy">Easy</option>
          <option value="medium">Media</option>
          <option value="hard">Hard</option>
        </select>
      </label>
   
    <div className="w-full h-40 flex items-center justify-center cursor-pointer">
  <div
    className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 dark:bg-gray-700 dark:text-white dark:hover:text-gray-200 dark:shadow-none group"
  >
    <span
      className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"
    ></span>
    <span
      className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke="currentColor"
        fill="none"
        className="w-5 h-5 text-green-400"
      >
        <path
          d="M14 5l7 7m0 0l-7 7m7-7H3"
          stroke-width="2"
          stroke-linejoin="round"
          stroke-linecap="round"
        ></path>
      </svg>
    </span>
    <span
      className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke="currentColor"
        fill="none"
        className="w-5 h-5 text-green-400"
      >
        <path
          d="M14 5l7 7m0 0l-7 7m7-7H3"
          stroke-width="2"
          stroke-linejoin="round"
          stroke-linecap="round"
        ></path>
      </svg>
    </span>
    <span
      className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white dark:group-hover:text-gray-200" onClick={handleStartClick}
      >Start</span>
  </div>
</div>

    </div>
  );
};

export default StartScreen;
