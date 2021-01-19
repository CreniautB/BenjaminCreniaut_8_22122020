
/** Function de vérificayion appelé ci dessous */
function isEmpty(tag) {
    return tag == ""
}
let checker = (arr, target) => target.every(v => arr.includes(v));



var mainSearch = function (event) {

    document.querySelectorAll(".recipe").forEach(recipe => {
        recipe.classList.remove("recipeHidden")
    })

    /** Récupération des dataSets */

    let value = document.querySelector('#inputSearchBar').value.toLowerCase()
    let ingtags = document.querySelector("#currentTagsIng").dataset.tags
    let usttags = document.querySelector("#currentTagsUst").dataset.tags
    let apptags = document.querySelector("#currentTagsApp").dataset.tags

    /** Ajout des données dans une liste */

    var allTags = []
    if ( ingtags !== undefined && ingtags !== ""){
        allTags.push(ingtags)
    }
    if ( usttags !== undefined && usttags !== ""){
        allTags.push(usttags)
    }
    if ( apptags !== undefined && apptags !== ""){
       allTags.push(apptags)
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
    document.querySelectorAll(".recipe").forEach(recipe => {
    
            /** Récupération des dataSets des Recettes */
            paraRecipes = recipe.querySelector(".pRecipes").innerHTML.toLowerCase()
            title = recipe.dataset.title.toLowerCase()
            app = recipe.dataset.app.toLowerCase()
            ust = recipe.dataset.ust.toLowerCase()
            ing = recipe.dataset.ing.toLowerCase()

            /** Ajout des données a une liste pour la comparer */
            recipeTags = []
            allRecipesTags = app+"," + ust+ "," + ing
            recipeTags.push(allRecipesTags)
            chaine = recipeTags.join(",")
            recipeArray = chaine.split(",")

            console.log(allTags)

            /** Si aucun tag attaché */
            if (allTags.every(isEmpty) === true){

                if (title.includes(value) || paraRecipes.includes(value) || ing.includes(value) || app.includes(value) || ust.includes(value)){}
                else{
                    recipe.classList.add("recipeHidden")
                }
            }
           
            /** Si au moins un tag est attaché */
            else if ( allTags.every(isEmpty) === false )
            {
                recipe.classList.remove("recipeHidden")

                /** Si la barre de recherche contiens au moins 3 caracteres */
                if ( value.length >= 3 )
                {
                    if ( checker(recipeArray, allTags) === true  && (title.includes(value) || paraRecipes.includes(value) || ing.includes(value) || app.includes(value) || ust.includes(value))){
                        recipe.classList.remove("recipeHidden")
                    }
                    else{
                        recipe.classList.add("recipeHidden")
                    }
                }

                /** Si la barre de recherche contient moins de 3 caracteres */
                if (value.length < 3 ){
                   
                    if ( checker(recipeArray, allTags) === true ){
                        recipe.classList.remove("recipeHidden")
                    }
                    else{
                        recipe.classList.add("recipeHidden")
                    }
                }
            }
            else{
                recipe.classList.remove("recipeHidden")
            }
        }
    )}




document.querySelector("#inputSearchBar").addEventListener('keyup', mainSearch, false);
window.addEventListener('click', mainSearch, false);