CREATE DATABASE profile;
    -- constructor(budget, income, occupation, purchase_goal, city) {
    --     this.liked_list = []; 
    --     this.budget = budget;
    --     this.income = income;
    --     this.occupation = occupation;
    --     this.purchase_goal = purchase_goal;
    --     this.city = city;
    -- }
CREATE TABLE profile(
    id SERIAL PRIMARY KEY,
    budget INTEGER,
    income INTEGER,
    occupation VARCHAR(100),
    purchase INTEGER,   
);

CREATE TABLE Liked(
    house_id SERIAL,
    id INTEGER,
    PRIMARY KEY(house_id,id)
    FOREIGN KEY id REFERENCES profile(id)
)