const orm = require("../config/orm");

const burger = {
    //SELECTS ALL BURGERS
    all(cb) {
        orm.selectAll("burgers", (res) => cb(res));
    },
    create(column, valuePassed, cb) {
        //INSERT A BURGER
        orm.insertOne("burgers", column, valuePassed, (res) => cb(res));
    },
    update() {
        //UPDATE A BURGER
        orm.updateOne(/*PARAMETERS HERE*/);
    }
};

module.exports = burger;