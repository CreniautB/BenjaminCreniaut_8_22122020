
/** Ingredients */
var ing = document.querySelectorAll(".ingredients")

let tagList = []
let listTagedIng = []

ing.forEach(ings => {

    ings.addEventListener("click", function(e)
    {
        e.preventDefault();

        if (tagList.includes(ings.innerHTML.toLowerCase())){}
        else
        {
            listTagedIng.push(ings.innerHTML)
            tagList.push(ings.innerHTML)
        
            tagContainer = document.createElement("li")
            tagContainer.classList.add("tag")

            tag = document.createElement("span")
            tag.classList.add("ingredientTag")
            tag.innerHTML = (ings.innerHTML)

            cross = document.createElement("img")
            cross.src = "img/cross.png"
            cross.classList.add("cross")

            tagContainer.appendChild(tag)
            tagContainer.appendChild(cross)

            domList = document.querySelector("#currentTagsIng").appendChild(tagContainer)
            
            img = document.querySelectorAll(".tag img")
            img.forEach(imgs => {
                    imgs.addEventListener("click", function(e)
                    {
                        parent = this.parentNode
                        child = parent.children[0].innerHTML
                        tagList = tagList.filter(item => item !== child)
                        parent.style.display = "none"
                        listTagedIng = listTagedIng.filter(item => item !== child)
                        document.querySelector("#currentTagsIng").dataset.tags = listTagedIng
                        
                    })
                })           
            document.querySelector("#currentTagsIng").dataset.tags = listTagedIng
            }
     })
})
/** Appareils */
var app = document.querySelectorAll(".appareils")

let tagListApp = []
let listTagedApp = []

app.forEach(element => {

    element.addEventListener("click", function(e)
    {
        e.preventDefault();

        if (tagList.includes(element.innerHTML.toLowerCase())){}
        else
        {
            listTagedApp.push(element.innerHTML)
            tagList.push(element.innerHTML)
        
        
            tagContainer = document.createElement("li")
            tagContainer.classList.add("tag")

            tag = document.createElement("span")
            tag.innerHTML = (element.innerHTML)
            tag.classList.add ("appTag")

            cross = document.createElement("img")
            cross.src = "img/cross.png"
            cross.classList.add("cross")


            tagContainer.appendChild(tag)
            tagContainer.appendChild(cross)

            domList = document.querySelector("#currentTagsApp").appendChild(tagContainer)
            
            img = document.querySelectorAll(".tag img")
            img.forEach(imgs => {
                    imgs.addEventListener("click", function(e)
                    {
                        parent = this.parentNode
                        child = parent.children[0].innerHTML
                        tagList = tagList.filter(item => item !== child)
                        parent.style.display = "none"
                        listTagedApp = listTagedApp.filter(item => item !== child)
                        document.querySelector("#currentTagsApp").dataset.tags = listTagedApp
                    })
                })
            document.querySelector("#currentTagsApp").dataset.tags = listTagedApp
        }
     })
})


/** Usensils */
var ust = document.querySelectorAll(".ustensils")

let tagListUst = []
let listTagedUst = []

ust.forEach(usts => {

    usts.addEventListener("click", function(e)
    {
        e.preventDefault();

        if (tagList.includes(usts.innerHTML.toLowerCase())){}
        else
        {
            listTagedUst.push(usts.innerHTML)
            tagList.push(usts.innerHTML)
        
            tagContainer = document.createElement("li")
            tagContainer.classList.add("tag")

            tag = document.createElement("span")
            tag.innerHTML = (usts.innerHTML)
            tag.classList.add("ustTag")

            cross = document.createElement("img")
            cross.src = "img/cross.png"
            cross.classList.add("cross")

            tagContainer.appendChild(tag)
            tagContainer.appendChild(cross)

            domList = document.querySelector("#currentTagsUst").appendChild(tagContainer)
            
            img = document.querySelectorAll(".tag img")
            img.forEach(imgs => {
                    imgs.addEventListener("click", function(e)
                    {
                        parent = this.parentNode
                        child = parent.children[0].innerHTML
                        tagList = tagList.filter(item => item !== child)
                        parent.style.display = "none";
                        listTagedUst = listTagedUst.filter(item => item !== child)
                        document.querySelector("#currentTagsUst").dataset.tags = listTagedUst
                    })
                })
            document.querySelector("#currentTagsUst").dataset.tags = listTagedUst
        }
     })
})
