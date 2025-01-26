from flask import render_template, url_for, request, Response, jsonify
import json
from housetinder import app
import os
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
from sklearn import linear_model
from sklearn.model_selection import train_test_split

@app.route("/property", methods=["GET", "POST"])
@app.route("/home", methods=["GET", "POST"])
def home():
    # Load the CSV file
    df = pd.read_csv('.\\housetinder\\static\\prop.csv')

    # Train the model
    model = linear_model.LinearRegression()
    x = df[['TotalAssessedValue', 'LotSizeOrArea', 'YearBuilt', 'NumberOfBedrooms', 'NumberOfBaths', 'NumberOfPartialBaths']]
    y = df['SalesPriceFromAssessment']
    x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.2, random_state=42)
    model.fit(x_train, y_train)

    # Get 10 random rows from the DataFrame
    random_rows = df.sample(n=10, random_state=42)
    selected_columns = random_rows[['SalesPriceFromAssessment', 'LotSizeOrArea', 'YearBuilt', 'NumberOfBedrooms', 'NumberOfBaths']]

    # Predict prices for the selected rows
    selected_features = random_rows[['TotalAssessedValue', 'LotSizeOrArea', 'YearBuilt', 'NumberOfBedrooms', 'NumberOfBaths', 'NumberOfPartialBaths']]
    predicted_prices = model.predict(selected_features)
    selected_columns['PredictedPrice'] = predicted_prices

    # Add formatted address to the selected rows
    random_rows['FormattedAddress'] = random_rows['PropertyAddress'] + ', Rancho Santa Margarita, California'
    selected_columns['Address'] = random_rows['FormattedAddress'].values

    # Convert selected rows to a list of dictionaries
    result = selected_columns.to_dict(orient='records')

    return jsonify({'random_samples': result})
