// Base class: Profile
class Profile {
    constructor(budget, income, occupation, purchase_goal, city) {
        this.liked_list = []; // Use "this" instead of "self"
        this.budget = budget;
        this.income = income;
        this.occupation = occupation;
        this.purchase_goal = purchase_goal;
        this.city = city;
    }

    addToDb() {
        return;
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

    addLikedList(house){
        
    }

    matchWithSeller(seller){
        return seller.matchWithBuyer(this);
    }
}