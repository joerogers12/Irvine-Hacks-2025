import React, { useState } from "react";


const Images = () => {
  const [address, setAddress] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [error, setError] = useState("");


  const handleInputChange = (e) => {
    setAddress(e.target.value);
  };


  const fetchHouseImage = () => {
    if (!address.trim()) {
      setError("Please enter a valid address.");
      return;
    }


    setError("");
    const apiKey = "AIzaSyCDm-kHtEIsMQMo_VkGQ3pWDz_eu7S9O-0";
    const baseUrl = "https://maps.googleapis.com/maps/api/streetview";
    const size = "600x400";


    const formattedAddress = encodeURIComponent(address);
    const apiUrl = `${baseUrl}?size=${size}&location=${formattedAddress}&key=${apiKey}`;


    setImageUrl(apiUrl);
  };


  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", padding: "20px" }}>
      <h1>House Picture Viewer</h1>
      <input
        type="text"
        placeholder="Enter an address"
        value={address}
        onChange={handleInputChange}
        style={{
          padding: "10px",
          width: "300px",
          marginBottom: "10px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />
      <br />
      <button
        onClick={fetchHouseImage}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Get Picture
      </button>
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
      {imageUrl && (
        <div style={{ marginTop: "20px" }}>
          <h2>Street View:</h2>
          <img src={imageUrl} alt="House Street View" style={{ maxWidth: "100%", borderRadius: "10px" }} />
        </div>
      )}
    </div>
  );
};


export default Images;