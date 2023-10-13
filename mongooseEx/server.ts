import * as express from "express";
import * as bodyparser from "body-parser";
import * as cors from "cors";
import * as mongoose from "mongoose";

let app:any = express();

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

//connect to database
mongoose.connect("mongodb+srv://vaishpadre:JGNwtwvn34JRtdVk@cluster0.zmt1crm.mongodb.net/?retryWrites=true&w=majority",
{ useNewUrlParser :true});

