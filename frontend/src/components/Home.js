import React, { useState, useEffect } from 'react';

function Home() {
  const [houses, setHouses] = useState([]); // State to hold the house information

  useEffect(() => {
    // Fetch the house data from the backend
    const fetchHouses = async () => {
      try {
        const response = await fetch('http://localhost:5000'); // Adjust the URL if necessary
        if (response.ok) {
          const data = await response.json();
          setHouses(data['random_samples']); // Access the house data from the JSON response
        } else {
          console.error('Failed to fetch house data');
        }
      } catch (error) {
        console.error('Error fetching house data:', error);
      }
    };

    fetchHouses();
  }, []); // Empty dependency array ensures the fetch runs only once

  return (
    <div>
      <h1>House Listings</h1>
      {houses.length > 0 ? (
        <div>
          {houses.map((house, index) => (
            <div key={index}>
              <p><strong>Sales Price From Assessment:</strong> ${house.SalesPriceFromAssessment.toFixed(2)}</p>
              <p><strong>Lot Size or Area:</strong> {house.LotSizeOrArea} sq ft</p>
              <p><strong>Year Built:</strong> {house.YearBuilt}</p>
              <p><strong>Number of Bedrooms:</strong> {house.NumberOfBedrooms}</p>
              <p><strong>Number of Bathrooms:</strong> {house.NumberOfBaths}</p>
              <p><strong>Predicted Price:</strong> ${house.PredictedPrice.toFixed(2)}</p>
              <hr />
            </div>
          ))}
        </div>
      ) : (
        <p>Loading house data...</p>
      )}
    </div>
  );
}

export default Home;
