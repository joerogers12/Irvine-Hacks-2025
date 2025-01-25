// src/App.jsx
import React, { useState } from 'react';
import SwipingCardContainer from './SwipingCardContainer';
import PhoneScreen from './PhoneScreen';
import './styles/App.css';

const App = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      imageUrl: "/path/to/image1.jpg",
      askingPrice: "$500,000",
      estimatedValue: "$520,000",
      state: "California",
      city: "Los Angeles",
      squareFootage: "2000 sq ft",
      yearBuilt: 2015,
      numberBedrooms: 3,
    },
    {
      id: 2,
      imageUrl: "/path/to/image2.jpg",
      askingPrice: "$750,000",
      estimatedValue: "$780,000",
      state: "New York",
      city: "New York City",
      squareFootage: "1200 sq ft",
      yearBuilt: 2018,
      numberBedrooms: 2,
    },
  ]);

  const handleSwipe = (direction, cardId) => {
    console.log(`Swiped ${direction} on card with ID: ${cardId}`);
    setCards((prevCards) => prevCards.filter((card) => card.id !== cardId));
  };

  const Card = ({ card }) => (
    <div className="card-content">
      <img src={card.imageUrl} alt="Property" className="card-image" />
      <div className="card-info">
        <div className="detail-item">
          <span className="detail-label">Asking Price:</span>
          <span className="detail-value">{card.askingPrice}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Estimated Value:</span>
          <span className="detail-value">{card.estimatedValue}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">State:</span>
          <span className="detail-value">{card.state}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">City:</span>
          <span className="detail-value">{card.city}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Square Footage:</span>
          <span className="detail-value">{card.squareFootage}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Year Built:</span>
          <span className="detail-value">{card.yearBuilt}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Number of Bedrooms:</span>
          <span className="detail-value">{card.numberBedrooms}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="app">
      <PhoneScreen>
        <div className="card-container">
          {cards.map((card) => (
            <SwipingCardContainer
              key={card.id}
              onSwipe={(direction) => handleSwipe(direction, card.id)}
            >
              <Card card={card} />
            </SwipingCardContainer>
          ))}
        </div>
      </PhoneScreen>
    </div>
  );
};

export default App;
