import express from 'express';
import { MongoClient } from 'mongodb'; // MongoDB connection
import { Profile } from './profile';
const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware to parse JSON

// MongoDB connection URI
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

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
    const profile = Profiel(budget,income,occupation,purchase_goal,city);

    try {
        // const result = await db.collection('users').insertOne({ name, email, password });
        Profile.addProfileToDb();
        res.status(201).json({ message: 'User added', user: result.ops[0] });
    } catch (err) {
        console.error('Error inserting user:', err);
        res.status(500).json({ error: 'Failed to insert user' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
