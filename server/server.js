const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const creds = require("./mysqlcredentials.js");
const db = mysql.createConnection(creds);

const server = express();

const names = [{
	"name": "Mona"
}, {
	"name": "Ruby"
}, {
	"name": "Mike"
}];

const favfoods = [{
	"food": "chicken",
	"age": 10
}, {
	"food": "fries",
	"age": 15
}, {
	"food": "rice",
	"age": 12
}];


server.use(cors());

server.get("/favfoods", (request,response) => {
    response.send(favfoods);

});

server.get("/names", (request,response) => {
    db.connect( ()=>{
        db.query("SELECT * FROM `names`", (error, data, fields)=>{
            if(!error){
                response.send(data);
            }
        })
    } )
    

});

server.listen(3001,() =>{ 
    console.log("carrier has arrived");
});