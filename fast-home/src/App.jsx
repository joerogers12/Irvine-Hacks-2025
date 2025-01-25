// src/App.jsx
// we will fix this
import React, { useState } from 'react';
import SwipeableCard from './SwipingCardContainer';
import PhoneScreen from './PhoneScreen';
import './styles/App.css';  // Import the CSS file for styling

const App = () => {
  const [cards, setCards] = useState([
    { id: 1, content: 'Card 1' },
    { id: 2, content: 'Card 2' },
    { id: 3, content: 'Card 3' },
    { id: 4, content: 'Card 4' }
  ]);

  const handleSwipe = (direction, cardId) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== cardId));
    console.log(`Swiped ${direction} on card with ID: ${cardId}`);
  };

  return (
    <div className="app">
      <PhoneScreen>
        <div className="card-container">
          {cards.map((card) => (
            <SwipeableCard key={card.id} onSwipe={(direction) => handleSwipe(direction, card.id)}>
              <div className="card-content">{card.content}</div>
            </SwipeableCard>
          ))}
        </div>
      </PhoneScreen>
    </div>
  );
};

export default App;
