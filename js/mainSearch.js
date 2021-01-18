
/** Gestion de la Recherche */



document.querySelector("#inputSearchBar").addEventListener("keyup", function(e){

    document.querySelectorAll(".recipe").forEach(recipe => {
        recipe.classList.remove("recipeHidden")
    })

    e.preventDefault();

    let value = document.querySelector('#inputSearchBar').value.toLowerCase()
    
    if ( value.length > 2){
        compareToRecipe(value)
    }

    else{
        document.querySelectorAll(".recipe").forEach(recipe => {
            recipe.classList.remove("recipeHidden")
        })
    }

});



/** Comparaison de Value au recette   */

function compareToRecipe(value){
    document.querySelectorAll(".recipe").forEach(recipe => 
        {
            paraRecipes = recipe.querySelector(".pRecipes").innerHTML.toLowerCase()
            title = recipe.dataset.title.toLowerCase()
            app = recipe.dataset.app.toLowerCase()
            ust = recipe.dataset.ust.toLowerCase()
            ing = recipe.dataset.ing.toLowerCase()

            if (title.includes(value) || paraRecipes.includes(value) || ing.includes(value) || app.includes(value) || ust.includes(value) ){}
            else{
                recipe.classList.add("recipeHidden")
            }
        }
    )}




/** data-set en list */

/** Ajout des Tags */
    
['click', 'keyup'].forEach(type => {
	if (type === 'click' ||  type === 'keyup') {
        window.addEventListener(type, function(e)
        {
            e.preventDefault()
            var appTagedList = []  
            var ustTagedList = []

            document.querySelectorAll(".recipe").forEach(recipe => 
                {

                    recipe.classList.remove("recipeHidden")

                    var ingRecipe = recipe.dataset.ing.toLowerCase()
                    string = document.querySelector("#currentTags").dataset.tags;
                    var ingTagedList = string.split(",");

                    var appRecipe = recipe.dataset.app.toLowerCase()
                    document.querySelectorAll(".appTag").forEach( appTaged => {appTagedList.push(appTaged.innerHTML.toLowerCase())})

                    var ustRecipe = recipe.dataset.ust.toLowerCase()
                    document.querySelectorAll(".ustTag").forEach( ustTaged => {ustTagedList.push(ustTaged.innerHTML.toLowerCase())})

                    let checker = (arr, target) => target.every(v => arr.includes(v));
                
                    if ( checker( ingRecipe, ingTagedList) === true && checker(appRecipe, appTagedList) === true && checker(ustRecipe, ustTagedList) === true ){
                        recipe.classList.remove("recipeHidden")
                    }
                    else {
                        recipe.classList.add("recipeHidden")
                    }
                })

        });
	}
       
});
