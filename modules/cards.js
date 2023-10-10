"use strict";
exports.__esModule = true;
var express = require("express");
var cards = express.Router();
cards.post("/", function (req, res) {
    res.status(200).json({ "message": "Welcome to cards module!!" });
});
exports["default"] = cards;
