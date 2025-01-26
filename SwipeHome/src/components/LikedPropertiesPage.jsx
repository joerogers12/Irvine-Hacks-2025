import React from "react";

export default function LikedPropertiesPage({ likedProperties }) {
    return (
        <div className="liked-properties-page">
            <h2>Liked Properties</h2>
            {likedProperties.length === 0 ? (
                <p>No properties liked yet.</p>
            ) : (
                <div className="liked-properties-list">
                    {likedProperties.map((property, index) => (
                        <div className="liked-property-card" key={index}>
                            <img
                                src={`https://maps.googleapis.com/maps/api/streetview?size=300x200&location=${encodeURIComponent(
                                    property.Address || "Address not found"
                                )}&key=AIzaSyCDm-kHtEIsMQMo_VkGQ3pWDz_eu7S9O-0`}
                                alt="Property"
                            />
                            <div className="property-details">
                                <h4>{property.Address || "Unknown Address"}</h4>
                                <p>Asking Price: ${property.SalesPriceFromAssessment?.toFixed(2) || "N/A"}</p>
                                <p>Predicted Price: ${property.PredictedPrice?.toFixed(2) || "N/A"}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
