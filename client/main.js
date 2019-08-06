$(document).ready(startApp);

function startApp(){
    getData();
    getFood();
    
}

function getData(){
    var settings = {
        url: "http://localhost:3001/names",
        method: "GET",
        dataType: "json",
        success: handleDataFromServer
    }
    $.ajax(settings);
        
}

function handleDataFromServer(response){
    console.log(response);
    for(var index = 0; index < response.length; index++){
        var nameDiv = $("<div>").text(response[index].name);
        $("body").append(nameDiv);
    }
}

function getFood(){
    var settings = {
        url: "http://localhost:3001/favfoods",
        method: "GET",
        dataType: "json",
        success: handleFoodFromServer

    }
    $.ajax(settings);

}

function handleFoodFromServer(response){
    console.log(response);
    

    
}