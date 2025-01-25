export default function Data(){
    return(
        <div className="data-container">
            <div className="AskingValue">
                <h2>Asking Value</h2>
                <h3>$800,000</h3>
            </div>
            <div className="PredictedValue">
                <h2>Predicted Value</h2>
                <h3>$850,000</h3>
            </div>
            <div className="State">
                <h4>State</h4>
                <h4 className="value">CA</h4>
            </div>
            <div className="City">
                <h4>City</h4>
                <h4 className="value">Rancho San Margaritta</h4>
            </div>
            <div className="SQFT">
                <h5>Square footage</h5>
                <h5 className="value">858</h5>
            </div>
            <div className="YearBuilt">
                <h5>House Built</h5>
                <h5 className="value">1997</h5>
            </div>
            <div className="Bedrooms">
                <h5>Number of Bedrooms</h5>
                <h5 className="value">2</h5>
            </div>
        </div>
    )
}