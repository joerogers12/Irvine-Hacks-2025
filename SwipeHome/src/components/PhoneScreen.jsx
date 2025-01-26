import React from "react";
import SwipeCard from "./SwipeCard";
import MenuToolbar from "./MenuToolbar";

export default function PhoneScreen() {
    const handleSwipe = (direction) => {
        console.log(`Swiped ${direction}`);
        // Add logic here, e.g., fetch the next card, update state, etc.
      };
  
      return (
        <div className="Screen">
          {/* Swipeable cards go here */}
          <div className="swiping-card-container">
            <SwipeCard onSwipe={handleSwipe}>
              <div className="card-content">
                <Data/>
              </div>
            </SwipeCard>
          </div>
    
          {/* Toolbar at the bottom */}
          <MenuToolbar />
        </div>
      );
}