//import express module.
import * as express from "express";

//import body-parser module. used to read post parameters.
import * as bodyparser from "body-parser";

//create rest object. used to develop REST services
let app:any = express();

//set the MIME Type
app.use(bodyparser.json()); //it sets that the communication lang between client and server is json

//receive form data from client and parse it (extened ex., uname, upwd, etc..)
app.use(bodyparser.urlencoded({extended: false}));


//authorization code
let auth:any = (req:any, res:any, next:any):any => {
    let allHeaders:any = req.headers;
    let token:any = allHeaders.token;
    if(token === "nodeJs"){
        next();
    }
    else{
        res.status(401).json({auth: "failed"});
    }
};


//post request
app.post('/login', [auth], (req:any, res:any):any => {
    if(req.body.uname == "admin" && req.body.upwd == "admin"){
        res.status(200).json({login:"sucess!!"});
    }
    else{
        res.status(401).json({login:"failed!!"});
    }
});

app.listen(8082, ()=>{
    console.log("server started successfully!!");
});
