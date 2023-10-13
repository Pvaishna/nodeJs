//server.ts to collabrate custom modules
//import express module
import * as express from "express";
//import cors module
import * as cors from "cors";
import * as bodyparser from "body-parser";

//import cstom modules
import fetch from "./fetch/fetch";
import insert from "./insert/insert";
import update from "./update/update";
import remove from "./remove/remove";


let app:any = express();
app.use(cors());  //enable cors policy

//set MIMEType
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));


app.use("/fetch", fetch);
app.use("/insert", insert);
app.use("/update", update);
app.use("/delete", remove);


app.listen(8082, ()=>{
    console.log("server started successfully!!");
})

