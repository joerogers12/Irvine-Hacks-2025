const express = require('express');
const pool = require('./db'); // Database connection
const app = express();
const POSTGRE_PORT = 5432;
const PORT = 3000;

// app.use(express.json()); // Middleware to parse JSON

// POST route to insert a user
app.post('/users', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const query = `
            INSERT INTO users (name, email, password)
            VALUES ($1, $2, $3)
            RETURNING *;
        `;
        const values = [name, email, password];

        const result = await pool.query(query, values);
        res.status(201).json({ message: 'User added', user: result.rows[0] });
    } catch (err) {
        console.error('Error inserting user:', err);
        res.status(500).json({ error: 'Failed to insert user' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
