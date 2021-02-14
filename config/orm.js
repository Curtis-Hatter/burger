const connection = require("../config/connection");

const orm = {
    selectAll() {
        const queryString = "SELECT * FROM burgers;";
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            };
            console.log(result);
        });
    },
    insertOne() {
        console.log("Insert code goes here");
    },
    updateOne() {
        console.log("Update goes code here");
    }
}

module.exports = orm;