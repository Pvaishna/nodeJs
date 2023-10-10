"use strict";
//encapsulate transaction, accounts and card module in main module
exports.__esModule = true;
//import all modules
var express = require("express");
var accounts_1 = require("./accounts");
var transactions_1 = require("./transactions");
var cards_1 = require("./cards");
//create REST object
var app = express();
//use all modules
app.use("/accounts", accounts_1["default"]);
app.use("/transactions", transactions_1["default"]);
app.use("/cards", cards_1["default"]);
app.listen(8082, function () {
    console.log("server started");
});
//http://localhost:8082/accounts
//http://localhost:8082/accounts/login
//http://localhost:8082/transactions  (token,wish)
//http://localhost:8082/cards
