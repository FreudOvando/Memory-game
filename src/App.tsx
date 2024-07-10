import React, { useState } from 'react';
import StartScreen from './component/StartScreen';
import GameBoard from './component/GameBoard';
import EndScreen from './component/EndScreen';
import Footer from './component/Footer';
import Header from './component/Header';

const App: React.FC = () => {
  const [started, setStarted] = useState<boolean>(false);
  const [gameComplete, setGameComplete] = useState<boolean>(false);
  const [won, setWon] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [difficulty, setDifficulty] = useState<string>('easy');

  const handleStart = (userName: string, userDifficulty: string) => {
    setName(userName);
    setDifficulty(userDifficulty);
    setStarted(true);
    setGameComplete(false);
  };

  const handleGameComplete = (won: boolean) => {
    setWon(won);
    setGameComplete(true);
    setStarted(false);
  };

  const handleRestart = () => {
    setStarted(false);
    setGameComplete(false);
  };

  return (
    <div className="flex items-center flex-col">
      <Header />
      {gameComplete ? (
        <EndScreen onRestart={handleRestart} won={won} />
      ) : started ? (
        <GameBoard 
          name={name} 
          difficulty={difficulty} 
          onGameComplete={handleGameComplete}
        />
      ) : (
        <StartScreen onStart={handleStart} />
      )}
      <Footer />
    </div>
  );
};

export default App;
