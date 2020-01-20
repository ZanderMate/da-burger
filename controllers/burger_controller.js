var express = require("express");

var router = express.Router();

var Burger = require("../models/burger-model.js");

router.get("/", function (req, res) {
    Burger.findAll().then(function (result) {
        var hbsObject = {
            burger: result
        };
        // console.log(hbsObject.burger)
        res.render("index", hbsObject);
    })
})

router.post("/api/burgers", function (req, res) {
    console.log("Burger Data:");
    console.log(req.body);
    Burger.create({
        burger_name: req.body.burger_name,
        devoured: req.body.devoured
    }).then(function(result) {
        res.json({ id: result.insertId })
    })
});

router.put("/api/burgers/:id", function (req, res) {
   
    console.log("?" + req.params.id);
    Burger.update({
        devoured: true
    }, {
        where: {
            id: req.params.id
        }
    }).then(function(result) {
        res.json(result)
    })
    
})

router.delete("/api/burgers/:id", function (req, res) {
    Burger.destroy({
        where: {
            id: req.params.id
        }
    })
})

module.exports = router;