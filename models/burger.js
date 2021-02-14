const orm = require("../config/orm");

const burger = {
    //SELECTS ALL BURGERS
    all() {
        orm.selectAll(/*PARAMETERS HERE*/);
    },
    create() {
        //INSERT A BURGER
        orm.insertOne(/*PARAMETERS HERE*/);
    },
    update() {
        //UPDATE A BURGER
        orm.updateOne(/*PARAMETERS HERE*/);
    }
};

module.exports = burger;