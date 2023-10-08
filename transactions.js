"use strict";
exports.__esModule = true;
//import express module
var express = require("express");
//create sub module
//Router() is a predefined function avilable in express module. to create any sub module
var transactions = express.Router();
//create a REST service. i.e., GET request
transactions.get('/', function (req, res) {
    res.status(200).json({ message: "Welcome to a transaction Module." });
});
transactions.get('/vaish', function (req, res) {
    res.status(200).json({ message: "Welcome to vaish Transaction!" });
});
//Export module
exports["default"] = transactions;
