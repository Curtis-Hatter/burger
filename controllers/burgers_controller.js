const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

router.get("/", (req, res) => {
    burger.all((data) => {
        // console.log(data);
        const hbsObject = {
            Burgers: data,
        };
        // console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post("/api/burgers", (req, res) => {
    burger.create('burger_name', req.body.burger_name, (result) => {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", (req, res) => {
    const id = req.params.id;

    // console.log(id);
    burger.update(id, req.body.devoured, (response) => {
        if (response.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

module.exports = router;