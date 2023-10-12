//import express module
import * as express from "express";

//import mongodb module, used to connect mongodb database
import * as mongodb from "mongodb";

//create the client
//mongodb follows client server architechture
let vaish:any = mongodb.MongoClient;   //vaish is the client

//Create module
let fetch:any = express.Router();

fetch.get("/", (req:any, res:any):any=>{
    vaish.connect("mongodb+srv://vaishpadre:JGNwtwvn34JRtdVk@miniprojectdb.nzphu.mongodb.net/vaish_nodejs/?retryWrites=true&w=majority",
    (err:any, connection:any):any=>{
        if(err) throw err;
        else{
            let db = connection.db("vaish_nodejs");
            db.collection("products").find().toArray((err, array)=>{
                if (err) throw err;
                else{
                    res.send(array);
                }
            });
        }
    });

})


//export module
export default fetch;