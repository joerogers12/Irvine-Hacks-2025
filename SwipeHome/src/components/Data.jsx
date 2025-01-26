import React, { useState, useEffect } from 'react';

export default function Data() {
    const [property, setProperty] = useState({
        askingPrice: '',
        predictedValue: '',
        state: '',
        city: '',
        sqft: '',
        yearBuilt: '',
        bedrooms: '',
        PropertyAddress:''
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/property');
                const data = await response.json();
                console.log(data.random_samples[0].askingPrice)
                setProperty({
                    SalesPriceFromAssessment: data.random_samples[0].SalesPriceFromAssessment,
                    PredictedPrice: data.random_samples[0].PredictedPrice.toFixed(2),
                    state: data.state,
                    city: data.city,
                    sqft: data.random_samples[0].LotSizeOrArea,
                    YearBuilt: data.random_samples[0].YearBuilt,
                    bedrooms: data.random_samples[0].NumberOfBedrooms,
                    Address: data.random_samples[0].Address
                });
            } catch (error) {
                console.error('Error fetching property data:', error);
            }
        };

        fetchData();

    }, []); // Empty dependency array ensures this runs only once on component mount

    return (
        <div className="data-container">
            <div className="row1">
                <div className="AskingValue">
                    <h2 className="category">Asking Price</h2>
                    <h3 className="value">${property.SalesPriceFromAssessment}.00</h3>
                </div>
            </div>
            <div className="row2">
                <div className="PredictedValue">
                    <h2 className="category">Predicted Value</h2>
                    <h3 className="value">${property.PredictedPrice}</h3>
                </div>
            </div>
            <div className="row3">
                <div className="State">
                    <h4 className="category">State</h4>
                    <h4 className="value">{property.state}</h4>
                </div>
                <div className="City">
                    <h4 className="category">City</h4>
                    <h4 className="value">{property.city}</h4>
                </div>
            </div>
            <div className="row4">
                <div className="SQFT">
                    <h5 className="category">Square footage</h5>
                    <h5 className="value">{property.sqft}</h5>
                </div>
                <div className="YearBuilt">
                    <h5 className="category">House Built</h5>
                    <h5 className="value">{property.YearBuilt}</h5>
                </div>
                <div className="Bedrooms">
                    <h5 className="category">Number of Bedrooms</h5>
                    <h5 className="value">{property.bedrooms}</h5>
                </div>
            </div>
        </div>
    );
}
