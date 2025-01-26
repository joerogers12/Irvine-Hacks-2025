const { Pool } = require('pg');
require('dotenv').config(); // Load environment variables from .env file

// Create a connection pool using .env configuration
const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// Test the database connection
(async () => {
    try {
        console.log('Testing database connection...');
        // Run a simple query to check the connection
        const result = await pool.query('SELECT NOW() AS current_time');
        console.log('Connection successful! Current time from DB:', result.rows[0].current_time);

        // Example: Fetch data from a table (replace 'profile' with your table)
        const tableTestQuery = `
            SELECT * FROM profile LIMIT 1;
        `;
        const tableResult = await pool.query(tableTestQuery);
        console.log('Sample data from the "profile" table:', tableResult.rows);

        // Close the pool when done
        await pool.end();
        console.log('Database connection closed.');
    } catch (error) {
        console.error('Error connecting to the database:', error.message);
        process.exit(1);
    }
})();
