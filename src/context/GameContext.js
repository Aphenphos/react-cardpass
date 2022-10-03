import { createContext, useState } from 'react';
import initialCards from '../cards-data';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [deck, setDeck] = useState(initialCards);
  const [selectedCard, setSelectedCard] = useState();
  const [from, setFrom] = useState('deck');
  const [to, setTo] = useState(1);

  return <GameContext.Provider value={{
    deck, setDeck, selectedCard, setSelectedCard, from, setFrom, to, setTo
  }}>
    {children}
  </GameContext.Provider>;
};

export { GameProvider, GameContext };

