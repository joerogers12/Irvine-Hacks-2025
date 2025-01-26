import React, { useState, useEffect } from "react";

function Home() {
  const [houses, setHouses] = useState([]); // State to hold the house information
  const googleMapsApiKey = "AIzaSyCDm-kHtEIsMQMo_VkGQ3pWDz_eu7S9O-0";

  useEffect(() => {
    // Fetch the house data from the backend
    const fetchHouses = async () => {
      try {
        const response = await fetch("http://localhost:5000"); // Adjust the URL if necessary
        if (response.ok) {
          const data = await response.json();
          setHouses(data["random_samples"]); // Access the house data from the JSON response
        } else {
          console.error("Failed to fetch house data");
        }
      } catch (error) {
        console.error("Error fetching house data:", error);
      }
    };

    fetchHouses();
  }, []); // Empty dependency array ensures the fetch runs only once

  const getStreetViewImageUrl = (address) => {
    const baseUrl = "https://maps.googleapis.com/maps/api/streetview";
    const size = "600x400";
    const formattedAddress = encodeURIComponent(address);
    return `${baseUrl}?size=${size}&location=${formattedAddress}&key=${googleMapsApiKey}`;
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>House Listings</h1>
      {houses.length > 0 ? (
        <div>
          {houses.map((house, index) => (
            <div
              key={index}
              style={{
                marginBottom: "20px",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "10px",
              }}
            >
              <p>
                <strong>Address:</strong> {house.Address}
              </p>
              <p>
                <strong>Sales Price From Assessment:</strong> $
                {house.SalesPriceFromAssessment.toFixed(2)}
              </p>
              <p>
                <strong>Lot Size or Area:</strong> {house.LotSizeOrArea} sq ft
              </p>
              <p>
                <strong>Year Built:</strong> {house.YearBuilt}
              </p>
              <p>
                <strong>Number of Bedrooms:</strong> {house.NumberOfBedrooms}
              </p>
              <p>
                <strong>Number of Bathrooms:</strong> {house.NumberOfBaths}
              </p>
              <p>
                <strong>Predicted Price:</strong> $
                {house.PredictedPrice.toFixed(2)}
              </p>
              <div style={{ marginTop: "10px" }}>
                <h3>Street View:</h3>
                <img
                  src={getStreetViewImageUrl(house.Address)}
                  alt={`Street View of ${house.Address}`}
                  style={{ maxWidth: "100%", borderRadius: "10px" }}
                />
              </div>
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
