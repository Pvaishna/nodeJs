//Express is a third party module in nodeJs. (Framework or REST framework)
//Express framework used to develop the REST services. Ex., GET, POST, PUT, HEAD, DELETE, etc...
//Downloaded express module using yarn or npm tool.
//All modules are downloaded to node_modules folder in current path

//Import Express module
let express = require("express");

//create the REST object
let app = express();
//where app object is the REST object. i.e., app object is used to develop REST object

//create GET request 
app.get("/", (req, res) => {
    res.status(200).json({"message": "default get request .....!"});
});

app.get("/demo", (req, res) => {
    res.status(200).json({"message" : "data from mongodb data soon .....!"});
});

app.post("/", (req, res)=>{
    res.status(200).json({"message": "default post request .....!"});
});

app.post("/demo", (req, res)=> {
    res.status(200).json({"message" : "data from cassandradb data soon ...!"});
});

app.listen(8082, ()=> {
    console.log("server is ready at port 8082");
});