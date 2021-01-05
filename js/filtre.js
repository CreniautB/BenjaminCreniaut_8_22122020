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

/** Menu Déroulant de tous les Ingrédients */
let boolarrowIng = new Boolean("false")
document.querySelector("#arrowIng").addEventListener("click", function(e)
{
   e.preventDefault();
   if ( boolarrowIng == false)
   {     document.querySelectorAll(".ingredients").forEach(ingArrows => {
         ingArrows.style.display = "block";
      })
         boolarrowIng = true}
   else
   {
      document.querySelectorAll(".ingredients").forEach(ingArrows => {
      ingArrows.style.display = "none";
      boolarrowIng = false
   })}})




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

/** Menu Déroulant de tous les Ustensils */
let boolarrowUst = new Boolean("false")
document.querySelector("#arrowUst").addEventListener("click", function(e)
{
   e.preventDefault();
   if ( boolarrowUst == false)
   {     document.querySelectorAll(".ustensils").forEach(ustArrows => {
         ustArrows.style.display = "block";})
         boolarrowUst = true}
   else
   {
      document.querySelectorAll(".ustensils").forEach(ustArrows => {
      ustArrows.style.display = "none";
      boolarrowUst = false
   })}})

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

/** Menu Déroulant de tous les Appareils */
let boolarrowApp = new Boolean("false")
document.querySelector("#arrowApp").addEventListener("click", function(e)
{
   e.preventDefault();
   if ( boolarrowApp == false)
   {     document.querySelectorAll(".appareils").forEach(appArrows => {
         appArrows.style.display = "block";})
         boolarrowApp = true}
   else
   {
      document.querySelectorAll(".appareils").forEach(appArrows => {
      appArrows.style.display = "none";
      boolarrowApp = false
   })}})


   /** Appel des fichier Javascript */
var search = document.createElement("script");
search.src = "js/searchTag.js" ;
document.body.appendChild(search);

