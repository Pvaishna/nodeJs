//import express module
import * as express from "express";

//import mongodb module
import * as mongodb from "mongodb";

//create client
let vaish_delete:any = mongodb.MongoClient;

//create module
let remove:any = express.Router();


//Create delete request
remove.delete("/", (req:any, res:any):any=>{
    vaish_delete.connect("mongodb+srv://vaishpadre:JGNwtwvn34JRtdVk@miniprojectdb.nzphu.mongodb.net/vaish_nodejs/?retryWrites=true&w=majority",
    (err:any, connection:any):any=>{
        if (err) throw err;
        else{
            let db = connection.db("vaish_nodejs");
            //deleteOne is the fuction in mongodb to delete the record
            db.collection("products").deleteOne({"id":req.body.id}, (err, res)=>{
                if (err) throw err;
                else{
                    res.status(200).json({message: `${req.body.id} record deleted successfully`});
                }
            });
        }
    })
});

export default remove;
