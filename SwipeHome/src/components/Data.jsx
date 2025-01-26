export default function Data(){
    return(
        <div className="data-container">
            <div className="row1">
                <div className="AskingValue">
                    <h2 className="category">Asking Price</h2>
                    <h3 className="value">$800,000</h3>
                </div>
            </div>
            <div className="row2">
                <div className="PredictedValue">
                    <h2 className="category">Predicted Value</h2>
                    <h3 className="value">$850,000</h3>
                </div>
            </div>
            <div className="row3">
                <div className="State">
                    <h4 className="category">State</h4>
                    <h4 className="value">California</h4>
                </div>
                <div className="City">
                    <h4 className="category">City</h4>
                    <h4 className="value">Rancho Santa Margarita</h4>
                </div>
            </div>
            <div className="row4">
                <div className="SQFT">
                    <h5 className="category">Square footage</h5>
                    <h5 className="value">858</h5>
                </div>
                <div className="YearBuilt">
                    <h5 className="category">House Built</h5>
                    <h5 className="value">1997</h5>
                </div>
                <div className="Bedrooms">
                    <h5 className="category">Number of Bedrooms</h5>
                    <h5 className="value">2</h5>
                </div>
            </div>
        </div>
    )
}