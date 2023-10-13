"use strict";
exports.__esModule = true;
var express = require("express");
var mongodb = require("mongodb");
var vaish_update = mongodb.MongoClient;
var update = express.Router();
update.put("/", function (req, res) {
    vaish_update.connect("mongodb+srv://vaishpadre:JGNwtwvn34JRtdVk@miniprojectdb.nzphu.mongodb.net/vaish_nodejs/?retryWrites=true&w=majority", function (err, connection) {
        if (err)
            throw err;
        else {
            var db = connection.db("vaish_nodejs");
            //updateOne is a function in mongodb to update a record
            db.collection("products").updateOne({ id: req.body.id }, { $set: { price: req.body.price, quantity: req.body.quantity } }, function (err, result) {
                if (err)
                    throw err;
                else {
                    res.send({ message: "record updated successfully!!!" });
                }
            });
        }
    });
});
exports["default"] = update;
