//import expresss module
import * as express from "express";
import * as mongodb from "mongodb";

let vaish_insert:any = mongodb.MongoClient;

let insert:any = express.Router();

insert.post("/", (req:any, res:any):any=>{
    vaish_insert.connect("mongodb+srv://vaishpadre:JGNwtwvn34JRtdVk@miniprojectdb.nzphu.mongodb.net/vaish_nodejs/?retryWrites=true&w=majority",
    (err:any, connection:any):any=>{
        if (err) throw err;
        else{
            let db = connection.db("vaish_nodejs");
            //insertOne is a fuction in mongodb to insert data.
            db.collection("products").insertOne({"id": `${req.body.id}`,
                                                 "name" :`${req.body.name}`,
                                                 "quantity": `${req.body.quantity}`,
                                                 "price": `${req.body.price}`,
                                                 "category": `${req.body.category}`},
                (err:any, result:any):any=>{
                    if (err) throw err;
                    else{
                        res.send({message: "record inserted successfully!!"});
                    }

            });
        }
    });
});

export default insert;