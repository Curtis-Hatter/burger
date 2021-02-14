const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

router.get("/", (req, res) => {
    burger.all((data) => {
        console.log(data);
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
    })
})

module.exports = router;