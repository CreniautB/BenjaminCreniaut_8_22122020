/** Ingrédients */
document.querySelector("#ingSearchBar").addEventListener("keyup", function(e){

    e.preventDefault();
    let inputIngBtn = document.querySelector('#ingSearchBar').value 
    inputIngBtn=inputIngBtn.toLowerCase(); 
    let ing = document.getElementsByClassName('ingredients'); 
    
    for (i = 0; i < ing.length; i++) {  
        if (!ing[i].innerHTML.toLowerCase().includes(inputIngBtn) || inputIngBtn == "" ) { 
            ing[i].style.display="none"; 
        } 
        else { 
            ing[i].style.display="block";                  
        } 
    } 
})

/** Ustensils */
document.querySelector("#ustSearchBar").addEventListener("keyup", function(e){

    e.preventDefault();
    let inputUstBtn = document.querySelector('#ustSearchBar').value 
    inputUstBtn=inputUstBtn.toLowerCase(); 
   
    let ust = document.getElementsByClassName('ustensils'); 

    for (i = 0; i < ust.length; i++) {  
        if (!ust[i].innerHTML.toLowerCase().includes(inputUstBtn) || inputUstBtn == "" ) { 
            ust[i].style.display="none"; 
        } 
        else { 
            ust[i].style.display="block";                  
        } 
    } 
})

/** Appareils */
document.querySelector("#appSearchBar").addEventListener("keyup", function(e){

    e.preventDefault();
    let inputAppBtn = document.querySelector('#appSearchBar').value 
    inputAppBtn=inputAppBtn.toLowerCase(); 
   
    let app = document.getElementsByClassName('appareils'); 
    
    for (i = 0; i < app.length; i++) {  
        if (!app[i].innerHTML.toLowerCase().includes(inputAppBtn) || inputAppBtn == "" ) { 
            app[i].style.display="none"; 
        } 
        else { 
            app[i].style.display="block";                  
        } 
    } 
})

