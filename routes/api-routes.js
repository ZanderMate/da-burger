var Burger = require("../models/burger.js");

module.exports = function (app) {

    app.get("/api/all", function (req, res) {
        Burger.findAll({})
            .then(function (result) {
                res.render("index", result)
            });
    });
}