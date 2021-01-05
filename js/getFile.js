
var model = document.querySelector("#cardModel")

for ( let i = 0 ; i < recipes.length; i++){

    var clone = model.cloneNode(true);

    document.querySelector("#mainContent").appendChild(clone);


    clone.querySelector(".titleRecipies").innerHTML = recipes[i]["name"];
    clone.querySelector(".pRecipes").innerHTML = recipes[i]["description"];
    clone.querySelector(".timeRecipes").innerHTML = recipes[i]["time"]
    clone.id = i;
    
    recipes[i]["ingredients"].forEach(element => {
        
        var ing = document.createElement("LI");
        
        if ( element["quantity"] == undefined){ ingg2 = "" }
        else {ingg2 = element["quantity"]}
        if (element["unit"] == undefined ){ ingg3 = ""}
        else{ingg3 = element["unit"];}
        
       ing.innerHTML = element["ingredient"] + ": " + ingg2 + " " + ingg3 
       clone.querySelector(".listIngredients").appendChild(ing)
        
    })}

var mainS = document.createElement("script")
mainS.src = "js/mainSearch.js"

var jsF = document.createElement("script");
jsF.src = "js/filtre.js";

var tag = document.createElement("script");
tag.src = "js/tag.js";

document.body.appendChild(jsF);
document.body.appendChild(tag);
document.body.appendChild(mainS)