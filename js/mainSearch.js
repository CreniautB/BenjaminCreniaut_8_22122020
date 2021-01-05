



/**
si lists tags sont vides =>

*/



document.querySelector("#inputSearchBar").addEventListener("keyup", function(e){
    e.preventDefault();
    let value = document.querySelector('#inputSearchBar').value
    value = value.toLowerCase();


    
})





/**
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

*/