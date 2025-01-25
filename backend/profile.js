const {Pool} = require('pg')
require('dotenv').config();
const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Database connected:', res.rows);
    }
    pool.end(); // Close the connection
});

class Profile {
    constructor(budget, income, occupation, purchase_goal, city) {
        this.liked_list = []; 
        this.budget = budget;
        this.income = income;
        this.occupation = occupation;
        this.purchase_goal = purchase_goal;
    }
    addLikedList(house){
        this.liked_list.push(house)
    }

    async addProfileToDb() {
        try {
            const query = `INSERT INTO profile (id,budget,income,occupation,purchse
                            VALUES ($self)`
            const res = await pool.query('SELECT * FROM users');
        } catch (err) {
            console.error('Error fetching users:', err);
        }
    }
}

class Seller extends Profile {
    constructor(budget, income, occupation, purchase_goal, city) {
        super(budget, income, occupation, purchase_goal, city); 
    }
    matchWithBuyer(buyer) {
        console.log("Matching seller with buyers...");
    }
}

class Buyer extends Profile {
    constructor(budget, income, occupation, purchase_goal, city) {
        super(budget, income, occupation, purchase_goal, city);
    }

    matchWithSeller(seller){
        return seller.matchWithBuyer(this);
    }
}