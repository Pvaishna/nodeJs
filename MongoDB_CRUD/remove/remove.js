"use strict";
exports.__esModule = true;
//import express module
var express = require("express");
//import mongodb module
var mongodb = require("mongodb");
//create client
var vaish_delete = mongodb.MongoClient;
//create module
var remove = express.Router();
//Create delete request
remove["delete"]("/", function (req, res) {
    vaish_delete.connect("mongodb+srv://vaishpadre:JGNwtwvn34JRtdVk@miniprojectdb.nzphu.mongodb.net/vaish_nodejs/?retryWrites=true&w=majority", function (err, connection) {
        if (err)
            throw err;
        else {
            var db = connection.db("vaish_nodejs");
            //deleteOne is the fuction in mongodb to delete the record
            db.collection("products").deleteOne({ "id": req.body.id }, function (err, res) {
                if (err)
                    throw err;
                else {
                    res.status(200).json({ message: req.body.id + " record deleted successfully" });
                }
            });
        }
    });
});
exports["default"] = remove;
