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
    update(id, isDevoured, cb) {
        //UPDATE A BURGER
        orm.updateOne("burgers", id, isDevoured, (res) => cb(res));
    }
};
module.exports = burger;