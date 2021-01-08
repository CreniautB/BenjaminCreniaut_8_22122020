document.querySelector("#inputSearchBar").addEventListener("keyup", function(e){
    e.preventDefault();
    let value = document.querySelector('#inputSearchBar').value
    value = value.toLowerCase();
    if ( value.length > 2){
        document.querySelectorAll(".recipe").forEach(recipe => 
            {
                let ingbool = new Boolean
                ingbool = false
                title = recipe.querySelector(".titleRecipes").innerHTML.toLowerCase()
                paraRecipes = recipe.querySelector(".pRecipes").innerHTML.toLowerCase()
                ings = recipe.querySelectorAll(".ingredient").forEach( ing => {
                    if (ing.innerHTML.toLowerCase().includes(value)){
                        ingbool = true
                    }
                })
                if (title.includes(value) || paraRecipes.includes(value) || ingbool == true){
                    recipe.style.display  = "block"
                }
                else{
                    recipe.style.display = "none"
                }
            })}
    else
    {
        document.querySelectorAll(".recipe").forEach(recipe => {
            recipe.style.display = "block"
        })
    }
})
