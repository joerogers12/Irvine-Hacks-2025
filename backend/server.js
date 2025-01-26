import express from 'express';
import { MongoClient } from 'mongodb';
import { Profile } from './profile.js'; 
import dotenv from 'dotenv';
import fs from 'fs';
import csv from 'csv-parser';
dotenv.config();
const app = express();
const PORT = 3000;
let seenHouses = []


app.use(express.json()); // Middleware to parse JSON

// MongoDB connection URI
const uri = process.env.MONGODB_URL;
const client = new MongoClient(uri);

let db;

async function connect() {
    try {
        await client.connect();
        db = client.db('irvine_hacks');
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Failed to connect to MongoDB:', err);
        process.exit(1);
    }
}

connect();

// POST route to insert a user into mongo.db
app.post('/users/buyers', async (req, res) => {

    const {budget,income,occupation,purchase_goal,city} = req.body;
    const profile = new Profile(budget,income,occupation,purchase_goal,city, client);

    try {
        await profile.addProfileToDb(db,false);
        res.status(201).json({ message: 'User added' });
    } catch (error) {
        console.error('Error adding profile:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.post('/users/sellers', async (req, res) => {

    const {budget,income,occupation,purchase_goal,city} = req.body;
    const profile = new Profile(budget,income,occupation,purchase_goal,city, client);

    try {
        await profile.addProfileToDb(db,true);
        res.status(201).json({ message: 'User added' });
    } catch (error) {
        console.error('Error adding profile:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

async function choose_real_estate() {
    return new Promise((resolve, reject) => {
        const houses = [];
        fs.createReadStream('housetinder/static/prop.csv')
            .pipe(csv())
            .on('data', (row) => {
                houses.push(row);
            })
            .on('end', () => {
                if (houses.length === 0) {
                    reject(new Error('No houses found in CSV file'));
                } else {
                    let unseenhouses = houses.filter(house => !seenHouses.includes(house));
                    const randomIndex = Math.floor(Math.random() * unseenhouses.length);
                    seenHouses.push(unseenhouses[randomIndex]);
                    resolve(unseenhouses[randomIndex]);
                }
            })
            .on('error', (error) => {
                reject(error);
            });
    });
}

app.get('/picture', async (req, res) => {
    try{
        const house = await choose_real_estate();
        res.status(200).json(house);
    }catch(error){
        console.error('Error selecting random house:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});