
var model = document.querySelector("#cardModel")

recipes.forEach(element => {

    var clone = model.cloneNode(true);

    document.querySelector("#mainContent").appendChild(clone);

    clone.querySelector(".titleRecipies").innerHTML = element["name"];
    clone.querySelector(".pRecipes").innerHTML = element["description"];
    clone.querySelector(".timeRecipes").innerHTML = element["time"]
    clone.id = element["name"];
    
    for ( let i = 0; i < element["ingredients"].length; i++){

        var ing = document.createElement("LI");
        
        if ( element["ingredients"][i]["quantity"] == undefined){ ingg2 = "" }
        else {ingg2 = element["ingredients"][i]["quantity"]}
        if (element["ingredients"][i]["unit"] == undefined ){ ingg3 = ""}
        else{ingg3 = element["ingredients"][i]["unit"];}
        
       ing.innerHTML = element["ingredients"][i]["ingredient"] + ": " + ingg2 + " " + ingg3 
       clone.querySelector(".listIngredients").appendChild(ing)
        
    }

})

var jsF = document.createElement("script");
jsF.src = "js/filtre.js";

var tag = document.createElement("script");
tag.src = "js/tag.js";

document.body.appendChild(jsF);
document.body.appendChild(tag);