//import express module
import * as express from "express";

//Create REST object
let app:any = express();
//app obj used to develop REST services
//any is dataType

//GET request
app.get('/vaishGET', (req:any, res:any):any => {
    res.status(200).json({"message": "Welcome to Typescrit with nodeJs."});
});

app.listen(8082, () => {
    console.log('Server started successfully.');
});