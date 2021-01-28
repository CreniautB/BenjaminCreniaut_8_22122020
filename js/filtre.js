/** ingredient */

let ingArray = []

/** Création Dictionnaire Ingredients */
recipes.forEach(element => {
    for ( let i = 0 ; i < element["ingredients"].length ; i++){
       if (ingArray.includes(element["ingredients"][i]["ingredient"].toLowerCase())){}
       else{ingArray.push(element["ingredients"][i]["ingredient"].toLowerCase())}}})

listIng = document.querySelector("#listingIngredients")
for ( let i = 0; i < ingArray.length; i++)
{
   var liIng = document.createElement("li")
   liIng.innerHTML = ingArray[i]
   liIng.classList.add("ingredients");
   listIng.appendChild(liIng)
}


/** Création Dictionnaire Ustensils */
let ustArray = []
recipes.forEach(element => {
   for ( let i = 0 ; i < element["ustensils"].length ; i++){   
      if (ustArray.includes(element["ustensils"][i].toLowerCase())){}
      else{ustArray.push(element["ustensils"][i].toLowerCase())}
   }
})

listUstensile = document.querySelector("#listingUst")
for ( let i = 0; i < ustArray.length; i++)
{
   var liUst = document.createElement("li")
   liUst.innerHTML = ustArray[i]
   liUst.classList.add("ustensils");
   listUstensile.appendChild(liUst)
}


/** Création Dictionnaire Appareils */
let appArray = []
recipes.forEach(element => {     
   if (appArray.includes(element["appliance"].toLowerCase())){}
   else{appArray.push(element["appliance"].toLowerCase())}})

listAppareil = document.querySelector("#listingAppareil")

for ( let i = 0; i < appArray.length; i++)
{
   var liApp = document.createElement("li")
   liApp.innerHTML = appArray[i]
   liApp.classList.add("appareils");
   listAppareil.appendChild(liApp)
}



/** Affichage des listes lors du click sur le chevron */

document.querySelectorAll(".btnArrow").forEach(btn =>{
  

   btn.addEventListener("click", function(e){

      e.preventDefault()

      if (btn.classList.contains(".activeBtn") == false){
         
         btnContainer = btn.parentElement.parentElement
         list = btnContainer.querySelector("ul")
         list.querySelectorAll("li").forEach(li => {li.style.display = "block"}) 
         btn.classList.add(".activeBtn")
     
      }
      else {
         btnContainer = btn.parentElement.parentElement
         list = btnContainer.querySelector("ul")
         list.querySelectorAll("li").forEach(li => {li.style.display = "none"}) 
         btn.classList.remove(".activeBtn")
      }
   })
})



   /** Appel des fichier Javascript */
var search = document.createElement("script");
search.src = "js/searchTag.js" ;
document.body.appendChild(search);



