import * as express from "express";
import* as mongodb from "mongodb";

let vaish_update:any = mongodb.MongoClient;

let update:any = express.Router();

update.put("/", (req:any, res:any):any=>{
    vaish_update.connect("mongodb+srv://vaishpadre:JGNwtwvn34JRtdVk@miniprojectdb.nzphu.mongodb.net/vaish_nodejs/?retryWrites=true&w=majority",
    (err:any, connection:any):any=>{
        if (err) throw err;
        else{
            let db = connection.db("vaish_nodejs");
            //updateOne is a function in mongodb to update a record
            db.collection("products").updateOne({id:req.body.id}, {$set:{price:req.body.price, quantity:req.body.quantity}}, (err:any, result:any):any=>{
                if (err) throw err;
                else{
                    res.send({message: "record updated successfully!!!"});
                }
            });
        }
    });
});

export default update;