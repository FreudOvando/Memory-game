import React from 'react';

interface EndScreenProps {
  onRestart: () => void;
}

const EndScreen: React.FC<EndScreenProps> = ({ onRestart }) => {
  return (
    <div className="my-10 p-10 w-[20rem] h-[20rem] rounded-xl flex items-center flex-col bg-slate-300 dark:bg-violet-300 dark:text-slate-900">
      <h1 className='text-2xl '>¡Game complete!</h1>
      <button className='text-md my-10 bg-slate-600 bg-opacity-50 w-[8rem] h-[2rem] dark:bg-violet-200' onClick={onRestart}>try again</button>
    </div>
  );
};

export default EndScreen;
