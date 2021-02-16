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
        connection.query("INSERT INTO ??(??) VALUES( ? )", [table, column, valuePassed], (err, res) => {
            if (err) throw err;
            cb(res);
        });
    },
    updateOne(table, id, valuePassed, cb) {
        connection.query("UPDATE ?? SET devoured = ? WHERE id = ?", [table, valuePassed, id], (err, res) => {
            if (err) throw err;
            cb(res);
        });
    },
}

module.exports = orm;