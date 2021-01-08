
var model = document.querySelector("#cardModel")

for ( let i = 0 ; i < recipes.length; i++){

    var clone = model.cloneNode(true);

    document.querySelector("#mainContent").appendChild(clone);


    clone.querySelector(".titleRecipes").innerHTML = recipes[i]["name"];
    clone.querySelector(".pRecipes").innerHTML = recipes[i]["description"];
    clone.querySelector(".timeRecipes").innerHTML = recipes[i]["time"]
    clone.id = "recipe"+i;
    clone.classList.add("recipe")
    
    recipes[i]["ingredients"].forEach(element => {
        
        var ingQuanitty = document.createElement("LI");
        var ing = document.createElement("p");
        var quantity = document.createElement("p");
        
        
        if ( element["quantity"] == undefined){ ingg2 = "" }
        else {ingg2 = element["quantity"]}
        if (element["unit"] == undefined ){ ingg3 = ""}
        else{ingg3 = element["unit"];}
    

        ing.innerHTML = element["ingredient"]
        ing.classList.add("ingredient")
        quantity.innerHTML = " : " + ingg2 + " " + ingg3 
        quantity.classList.add("quantity")

        ingQuanitty.appendChild(ing)
        ingQuanitty.appendChild(quantity)
        clone.querySelector(".listIngredients").appendChild(ingQuanitty)
        
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