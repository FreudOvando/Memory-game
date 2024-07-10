import React, { useEffect, useState } from 'react';
import { cardData } from '../utils/cardData';

interface Card {
  id: number;
  image: string;
  matched: boolean;
}

interface GameBoardProps {
  name: string;
  difficulty: string;
  onGameComplete: () => void;
}

const GameBoard: React.FC<GameBoardProps> = ({ name, difficulty, onGameComplete }) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<number>(0);
  const [attemptsLeft, setAttemptsLeft] = useState<number>(0);

  useEffect(() => {
    const duplicateCards = cardData.map(card => ({ ...card, matched: false }));
    setCards(shuffleArray([...duplicateCards, ...duplicateCards]));

    switch (difficulty) {
      case 'easy':
        setAttemptsLeft(10);
        break;
      case 'medium':
        setAttemptsLeft(5);
        break;
      case 'hard':
        setAttemptsLeft(3);
        break;
      default:
        setAttemptsLeft(10);
        break;
    }
  }, [difficulty]);

  useEffect(() => {
    if (matchedPairs === cardData.length) {
      onGameComplete();
    }
  }, [matchedPairs, onGameComplete]);

  const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleCardClick = (index: number) => {
    if (flippedCards.length === 2 || cards[index].matched || flippedCards.includes(index)) {
      return;
    }

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      const [firstIndex, secondIndex] = newFlippedCards;
      if (cards[firstIndex].id === cards[secondIndex].id) {
        const newCards = cards.map((card, i) =>
          i === firstIndex || i === secondIndex ? { ...card, matched: true } : card
        );
        setCards(newCards);
        setMatchedPairs(matchedPairs + 1);
      } else {
        setAttemptsLeft(attemptsLeft - 1);
      }

      setTimeout(() => setFlippedCards([]), 2000);
    }
  };

  return (
    <div className="font-serif bg-opacity-50 flex items-center flex-col">
      <div className="flex items center flex-col text-center my-10 rounded-2xl bg-slate-300 dark:bg-violet-300 bg-opacity-50 text-slate-900 max-sm:w-[20rem] " >
        <div className='text-2xl m-1 p-1'> Player : <span  className='text-xl'>{name}</span> </div>
        <div className='text-2xl m-1 p-1'>successes: <span className='text-xl'>{matchedPairs}</span></div>
        <div className='text-2xl m-1 p-1'>lives: <span className='text-xl'>{attemptsLeft}</span></div>
      </div>
      <div className="grid grid-cols-4 gap-4 w-[10rem] mx-auto max-sm:grid-cols-2 ">
        {cards.map((card, index) => (
          <div key={index} className="flex items-center pointer bg-[#000] dark:bg-violet-300 " onClick={() => handleCardClick(index)}>
            {flippedCards.includes(index) || card.matched ? (
              <img className='max-w-[100%] max-h-[100%] w-[100%] h-[100%] ' src={card.image} alt={`Card ${card.id}`} />
            ) : (
              <div className="h-[120px]" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameBoard;
