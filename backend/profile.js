class Profile {
    constructor(budget, income, occupation, purchase_goal, city, client) {
        this.liked_list = [];
        this.budget = budget;
        this.income = income;
        this.occupation = occupation;
        this.purchase_goal = purchase_goal;
        this.city = city;
        this.client = client;
    }

    async addProfileToDb(db,is_sellers) {
        try {
            if (!db) {
                throw new Error('Database not initialized');
            }
            // Create a plain object without the client property
            const profileData = {
                liked_list: this.liked_list,
                budget: this.budget,
                income: this.income,
                occupation: this.occupation,
                purchase_goal: this.purchase_goal,
                city: this.city,
                is_seller: is_sellers
            };
            const result = await db.collection('profiles').insertOne(profileData);
            console.log('Profile added with ID:', result.insertedId);
        } catch (err) {
            console.error('Error adding profile:', err);
        }
    }
}

class Seller extends Profile {
    constructor(budget, income, occupation, purchase_goal, city, client) {
        super(budget, income, occupation, purchase_goal, city, client);
    }

    matchWithBuyer(buyer) {
        console.log(`Matching seller with buyer: ${buyer}`);
    }
}

class Buyer extends Profile {
    constructor(budget, income, occupation, purchase_goal, city, client) {
        super(budget, income, occupation, purchase_goal, city, client);
    }

    matchWithSeller(seller) {
        console.log(`Matching buyer with seller: ${seller}`);
        return seller.matchWithBuyer(this);
    }
}

export { Profile, Seller, Buyer };
