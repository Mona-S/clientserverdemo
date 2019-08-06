const express = require("express");
const cors = require("cors");

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
    response.send(names);
});

server.listen(3001,() =>{ 
    console.log("carrier has arrived");
});