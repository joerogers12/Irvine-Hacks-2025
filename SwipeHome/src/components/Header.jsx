import React, { useState, useEffect } from "react";
import Data from "./Data";

export default function Header() {
    const googleMapsApiKey = "AIzaSyCDm-kHtEIsMQMo_VkGQ3pWDz_eu7S9O-0";

    const [imageUrl, setImageUrl] = useState("");
    const [address, setAddress] = useState(""); 

    const getStreetViewImageUrl = (address) => {
        const baseUrl = "https://maps.googleapis.com/maps/api/streetview";
        const size = "300x200"; 
        const formattedAddress = encodeURIComponent(address);
        return `${baseUrl}?size=${size}&location=${formattedAddress}&key=${googleMapsApiKey}`;
    };

    useEffect(() => {
        const fetchAddress = async () => {
            try {
                const response = await fetch("http://localhost:5000/property"); 
                const data = await response.json();
                const fetchedAddress = data.random_samples[1]?.Address || "Address not found";
                console.log(fetchedAddress)
                setAddress(fetchedAddress);

                // Generate the Street View image URL
                const url = getStreetViewImageUrl(fetchedAddress);
                setImageUrl(url);
            } catch (error) {
                console.error("Error fetching address:", error);
            }
        };

        fetchAddress();
    }, []);

    return (
        <div className="Screen">
        <img className="HouseImage" src={imageUrl} alt="Street View" />
            <Data />
        </div>
    );
}
