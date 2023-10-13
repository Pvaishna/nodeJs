"use strict";
exports.__esModule = true;
//import expresss module
var express = require("express");
var mongodb = require("mongodb");
var vaish_insert = mongodb.MongoClient;
var insert = express.Router();
insert.post("/", function (req, res) {
    vaish_insert.connect("mongodb+srv://vaishpadre:JGNwtwvn34JRtdVk@miniprojectdb.nzphu.mongodb.net/vaish_nodejs/?retryWrites=true&w=majority", function (err, connection) {
        if (err)
            throw err;
        else {
            var db = connection.db("vaish_nodejs");
            //insertOne is a fuction in mongodb to insert data.
            db.collection("products").insertOne({ "id": "" + req.body.id,
                "name": "" + req.body.name,
                "quantity": "" + req.body.quantity,
                "price": "" + req.body.price,
                "category": "" + req.body.category }, function (err, result) {
                if (err)
                    throw err;
                else {
                    res.send({ message: "record inserted successfully!!" });
                }
            });
        }
    });
});
exports["default"] = insert;
