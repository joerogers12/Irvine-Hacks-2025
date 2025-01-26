import express from 'express';
import { MongoClient } from 'mongodb';
import { Profile } from './profile.js'; 
const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware to parse JSON

// MongoDB connection URI
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

let db;

client.connect(err => {
    if (err) {
        console.error('Failed to connect to MongoDB:', err);
        process.exit(1);
    }
    db = client.db('irvine_hacks');
    console.log('Connected to MongoDB');
});

// POST route to insert a user into mongo.db
app.post('/users', async (req, res) => {

    const {budget,income,occupation,purchase_goal,city} = req.body;
    const profile = new Profile(budget,income,occupation,purchase_goal,city);

    try {
        await profile.addProfileToDb();
        res.status(201).json({ message: 'User added' });
    } catch (error) {
        console.error('Error adding profile:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});