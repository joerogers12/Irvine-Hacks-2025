const { Pool } = require('pg');
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
        console.log('Database connected at:', res.rows[0].now);
    }
});

class Profile {
    constructor(budget, income, occupation, purchase_goal, city) {
        this.liked_list = [];
        this.budget = budget;
        this.income = income;
        this.occupation = occupation;
        this.purchase_goal = purchase_goal;
        this.city = city;

        this.addProfileToDb();
    }

    // Method to add a house to the liked list
    async addLikedList(house) {
        try {
            const query = `
                INSERT INTO Liked (house_id,profile_id)
                VALUES ($1, $2)
                RETURNING *;
            `;
            const values = [house.id,self.id];

            const result = await pool.query(query, values);
            console.log('Profile added to database:', result.rows[0]);
        } catch (err) {
            console.error('Error adding profile to database:', err);
        }

    }

    // Method to insert profile into the database
    async addProfileToDb() {
        try {
            const query = `
                INSERT INTO profile (budget, income, occupation, purchase_goal, city)
                VALUES ($1, $2, $3, $4, $5)
                RETURNING *;
            `;
            const values = [this.budget, this.income, this.occupation, this.purchase_goal, this.city];

            const result = await pool.query(query, values);
            console.log('Profile added to database:', result.rows[0]);
        } catch (err) {
            console.error('Error adding profile to database:', err);
        }
    }
}

class Seller extends Profile {
    constructor(budget, income, occupation, purchase_goal, city) {
        super(budget, income, occupation, purchase_goal, city);
    }

    matchWithBuyer(buyer) {
        console.log(`Matching seller with buyer: ${buyer}`);
    }
}

class Buyer extends Profile {
    constructor(budget, income, occupation, purchase_goal, city) {
        super(budget, income, occupation, purchase_goal, city);
    }

    matchWithSeller(seller) {

        
        console.log(`Matching buyer with seller: ${seller}`);
        return seller.matchWithBuyer(this);
    }
}


c = Profile(1,1,"a",1,"a");
c.addProfileToDb();