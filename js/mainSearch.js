
document.querySelector("#inputSearchBar").addEventListener("keyup", function(e){
    
    e.preventDefault();
    let value = document.querySelector('#inputSearchBar').value
    value = value.toLowerCase();
    
        if ( value.length > 2 )
        {
            
            document.querySelectorAll(".pRecipes").forEach(pContent => 
                {
                    console.log(pContent.innerHTML.toLowerCase())
                    cardViaP = pContent.parentElement.parentElement.parentElement
                    cardViaP.style.display = "none"
                    if ( pContent.innerHTML.toLowerCase().includes(value))
                    {
                        cardViaP.style.display = "block"
                    }
                })
            
            document.querySelectorAll(".titleRecipies").forEach(title =>
                {               
                    cardViaTitle = title.parentElement.parentElement.parentElement
                    if (title.innerHTML.toLowerCase().includes(value) ) { 
                            cardViaTitle.style.display = "block"

                    } 
                }  
            )}
            
        else
        {
            document.querySelectorAll(".titleRecipies").forEach(title =>
                {
                    title.parentElement.parentElement.parentElement.style.display = "block"
                })
        }
    }
    
)

