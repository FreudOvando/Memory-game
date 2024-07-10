import React from 'react';

interface EndScreenProps {
  onRestart: () => void;
  won: boolean;
}

const EndScreen: React.FC<EndScreenProps> = ({ onRestart, won }) => {
  return (
    <div className="flex items-center flex-col">
<h1 className='text-2xl my-10 ' >¡Game Complete!</h1>
      <h2 className="text-xl my-5">{won ? 'You Win!' : 'You Lose!'}</h2>
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={onRestart}
      >
        Restart Game
      </button>
    </div>
  );
};

export default EndScreen;
