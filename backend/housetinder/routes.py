from flask import render_template, url_for, request, Response, jsonify 
import json
from housetinder import app
import os
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
from sklearn import linear_model
from sklearn.model_selection import train_test_split
from flask_cors import CORS

CORS(app)

@app.route("/", methods=["GET","POST"])
@app.route("/home", methods=["GET","POST"])
def home():
    df = pd.read_csv('.\housetinder\\static\\prop.csv')

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
    
    # Add predicted prices to the result
    selected_columns['PredictedPrice'] = predicted_prices

    # Convert selected rows to a list of dictionaries
    result = selected_columns.to_dict(orient='records')

    return jsonify({'random_samples': result})