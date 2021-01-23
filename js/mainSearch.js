
/** Function de vérificayion appelé ci dessous */
function isEmpty(tag) {
    return tag == ""
}
let checker = (arr, target) => target.every(v => arr.includes(v));

var mainSearch = function (event) {

    /** Récupération des dataSets */

    let value = document.querySelector('#inputSearchBar').value.toLowerCase()
    let taged = document.querySelector("#currentTags").dataset.tags

    /** Ajout tag attachés dans une liste */

    var allTags = []

    if ( taged !== undefined && taged !== ""){
        allTags.push(taged)
    }
    
    /** Lance la fonction si le champ de recherche fait au moins 3 caractere ou si un tag est activé */

    if ( value.length >= 3 || allTags.every(isEmpty) === false ){
        compareToRecipe(value, allTags)
    }

    else{
        document.querySelectorAll(".recipe").forEach(recipe => {
            recipe.classList.remove("recipeHidden")
        })
    }
};

/** Comparaison de Value au recette   */

function compareToRecipe(value, allTags){

    document.querySelectorAll(".recipe").forEach( recipe => { recipe.classList.add("recipeHidden")})

    const displayedRecipe = []
    const result = recipes.filter(function(recipe){

        recipeTags = []
        recipeTags.push(recipe.appliance)

        /** Atribution du contenu de la recette dans une string */
        ing = []
        recipe.ingredients.forEach(ings => {ing.push(ings.ingredient.toLowerCase()); recipeTags.push(ings.ingredient.toLowerCase()) })
        app = []
        recipe.ustensils.forEach(ust => {app.push(ust); recipeTags.push(ust) })
        app = app.toString().toLowerCase()
        recipeContent = ing.toString()

        recipeContent +=  "," + recipe.name.toLowerCase() + "," + recipe.appliance.toLowerCase() + "," + app

       

        /** Comparaison de la recette a la value */
        if( recipeContent.includes(value) && checker(recipeTags, allTags) === true ) {
            displayedRecipe.push(recipe.id)
            displayedRecipe.forEach( nb => {
                console.log(nb)
                number = nb-1
                id =  "#recipe" + number
                document.querySelector(id).classList.remove("recipeHidden")
                
            })
        }

    })
    
}



document.querySelector("#inputSearchBar").addEventListener('keyup', mainSearch, false);
window.addEventListener('click', mainSearch, false);