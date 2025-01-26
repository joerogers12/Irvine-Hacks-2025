import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

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

class Profile {
    constructor(budget, income, occupation, purchase_goal, city) {
        this.liked_list = [];
        this.budget = budget;
        this.income = income;
        this.occupation = occupation;
        this.purchase_goal = purchase_goal;
        this.city = city;
    }

    async addProfileToDb() {
        try {
            if (!db) {
                throw new Error('Database not initialized');
            }
            const result = await db.collection('profiles').insertOne(this);
            console.log('Profile added:', result.ops[0]);
        } catch (err) {
            console.error('Error adding profile:', err);
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

export { Profile, Seller, Buyer };
