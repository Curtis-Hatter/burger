const express = require("express");
const burger = require("../models/burger");

const router = express.Router();
router.get("/", (req, res) => {
    burger.all((data) => {
        const hbsObject = {
            Burgers: data,
        };
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

    burger.update(id, req.body.devoured, (response) => {
        if (response.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});
module.exports = router;