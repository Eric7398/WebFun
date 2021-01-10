$(document).ready(function(){

    for(var i=1; i < 152; i++){
        var image = document.createElement("img");
        $(image).attr("src", "http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + i + ".png")
        document.querySelector("#wrapper").appendChild(image);
    }
    
});
