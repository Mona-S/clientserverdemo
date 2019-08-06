$(document).ready(startApp);

function startApp(){
    getData();
    getFood();
    
}

function getData(){
    var settings = {
        url: "../server/getnames.json",
        method: "GET",
        dataType: "json",
        success: handleDataFromServer
    }
    $.ajax(settings);
        
}

function handleDataFromServer(response){
    console.log(response);
}

function getFood(){
    var settings = {
        url: "../server/favfood.json",
        method: "GET",
        dataType: "json",
        success: handleFoodFromServer

    }
    $.ajax(settings);

}

function handleFoodFromServer(response){
    console.log(response);
}