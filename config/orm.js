const connection = require("../config/connection");

const orm = {
    selectAll(queryInput, cb) {
        const queryString = `SELECT * FROM ${queryInput};`;
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            };
            cb(result);
        });
    },
    insertOne(table, column, valuePassed, cb) {
        // console.log("Insert code goes here");
        // let queryString = `INSERT INTO ${table}`;
        // console.log(table + column + valuePassed);
        connection.query("INSERT INTO ??(??) VALUES( ? )", [table, column, valuePassed], (err, res) => {
            if (err) throw err;
            cb(res);
        });
    },
    updateOne() {
        console.log("Update goes code here");
    }
}

module.exports = orm;