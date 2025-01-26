import React from "react";

export default function Data({ properties, currentIndex }) {
    const currentProperty = properties[currentIndex] || {
        SalesPriceFromAssessment: 0,
        PredictedPrice: 0,
        state: "N/A",
        city: "N/A",
        LotSizeOrArea: "N/A",
        YearBuilt: "N/A",
        NumberOfBedrooms: "N/A",
        Address: "Address not found"
    };

    // Determine if it's a "Good Deal" or "Bad Deal"
    const isGoodDeal =
        currentProperty.PredictedPrice > currentProperty.SalesPriceFromAssessment;

    // Calculate percentage difference
    const priceDifference =
        currentProperty.PredictedPrice - currentProperty.SalesPriceFromAssessment;
    const percentageDifference =
        (priceDifference /
            currentProperty.SalesPriceFromAssessment) *
        100;

    return (
        <div className="data-container">
            <div className="row1">
                <h2
                    className="deal"
                    style={{
                        backgroundColor: isGoodDeal ? "green" : "red", // Green for Good Deal, Red for Bad Deal
                        color: "white"
                    }}
                >
                    {isGoodDeal ? "Good Deal!" : "Bad Deal!"}
                </h2>
                <h2
                    className="deal percentage"
                    style={{
                        backgroundColor: isGoodDeal ? "green" : "red", // Same background color as the deal badge
                        color: "white"
                    }}
                >
                    {isGoodDeal
                        ? `+${percentageDifference.toFixed(2)}%`
                        : `${percentageDifference.toFixed(2)}%`}
                </h2>
                <div className="AskingValue">
                    <h2 className="category">Asking Price</h2>
                    <h3 className="value">
                        ${currentProperty.SalesPriceFromAssessment.toFixed(2)}
                    </h3>
                </div>
            </div>
            <div className="row2">
                <div className="PredictedValue">
                    <h2 className="category">Predicted Value</h2>
                    <h3 className="value">${currentProperty.PredictedPrice.toFixed(2)}</h3>
                </div>
            </div>
            <div className="row3">
                <div className="State">
                    <h4 className="category">State</h4>
                    <h4 className="value">{currentProperty.state}</h4>
                </div>
                <div className="City">
                    <h4 className="category">City</h4>
                    <h4 className="value">{currentProperty.city}</h4>
                </div>
            </div>
            <div className="row4">
                <div className="SQFT">
                    <h5 className="category">Square Footage</h5>
                    <h5 className="value">{currentProperty.LotSizeOrArea}</h5>
                </div>
                <div className="YearBuilt">
                    <h5 className="category">House Built</h5>
                    <h5 className="value">{currentProperty.YearBuilt}</h5>
                </div>
                <div className="Bedrooms">
                    <h5 className="category">Number of Bedrooms</h5>
                    <h5 className="value">{currentProperty.NumberOfBedrooms}</h5>
                </div>
            </div>
        </div>
    );
}
