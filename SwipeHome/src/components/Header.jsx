import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Data from "./Data";
import MenuToolbar from "./MenuToolBar";

export default function Header() {
    const googleMapsApiKey = "AIzaSyCDm-kHtEIsMQMo_VkGQ3pWDz_eu7S9O-0";

    const [properties, setProperties] = useState([]); // Holds all property data
    const [currentIndex, setCurrentIndex] = useState(0); // Tracks the current property index

    const getStreetViewImageUrl = (address) => {
        const baseUrl = "https://maps.googleapis.com/maps/api/streetview";
        const size = "300x200"; // Adjust size as needed
        const formattedAddress = encodeURIComponent(address);
        return `${baseUrl}?size=${size}&location=${formattedAddress}&key=${googleMapsApiKey}`;
    };

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await fetch("http://localhost:5000/property");
                const data = await response.json();
                setProperties(data.random_samples || []); // Store all properties
            } catch (error) {
                console.error("Error fetching properties:", error);
            }
        };

        fetchProperties();
    }, []);

    // Navigate to the next property
    const nextProperty = () => {
        if (properties.length > 0) {
            setCurrentIndex((currentIndex + 1) % properties.length); // Loop back to start
        }
    };

    return (
        <div className="Screen" onClick={nextProperty}>
            {/* Update the image */}
            <img
                className="HouseImage"
                src={getStreetViewImageUrl(
                    properties[currentIndex]?.Address || "Address not found"
                )}
                alt="Street View"
            />

            {/* Pass props to the Data component */}
            <Data
                currentIndex={currentIndex}
                properties={properties}
            />
            
            <MenuToolbar />
        </div>
    );
}
