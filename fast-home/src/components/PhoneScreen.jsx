import React from "react";
import SwipingCardContainer from "./SwipingCardContainer";
import MenuToolbar from "./components/MenuToolbar";

export default function PhoneScreen() {
    const handleSwipe = (direction) => {
        console.log(`Swiped ${direction}`);
        // Add logic here, e.g., fetch the next card, update state, etc.
      };
  
      return (
        <div className="phone-screen">
          {/* Swipeable cards go here */}
          <div className="swiping-card-container">
            <SwipingCardContainer onSwipe={handleSwipe}>
              <div className="card-content">
                <h2>User Name</h2>
                <p>Some information about this user</p>
              </div>
            </SwipingCardContainer>
          </div>
    
          {/* Toolbar at the bottom */}
          <MenuToolbar />
        </div>
      );
}