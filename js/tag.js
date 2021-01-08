
/** Ingredients */
var ing = document.querySelectorAll(".ingredients")

let tagList = []

ing.forEach(ings => {

    ings.addEventListener("click", function(e)
    {
        e.preventDefault();

        if (tagList.includes(ings.innerHTML.toLowerCase())){}
        else
        {
            tagList.push(ings.innerHTML)
        
            tagContainer = document.createElement("li")
            tagContainer.classList.add("tag")

            tag = document.createElement("span")
            tag.classList.add("ingredientTag")
            tag.innerHTML = (ings.innerHTML)

            cross = document.createElement("img")
            cross.src = "img/cross.png"

            tagContainer.appendChild(tag)
            tagContainer.appendChild(cross)

            domList = document.querySelector("#currentTags").appendChild(tagContainer)
            img = document.querySelectorAll(".tag img")
            img.forEach(imgs => {
                    imgs.addEventListener("click", function(e)
                    {
                        parent = this.parentNode
                        child = parent.children[0].innerHTML
                        tagList = tagList.filter(item => item !== child)
                        parent.style.display = "none"
                    })
                })
        }

     })
})



/** Appareils */
var app = document.querySelectorAll(".appareils")

let tagListApp = []

app.forEach(element => {

    element.addEventListener("click", function(e)
    {
        e.preventDefault();

        if (tagList.includes(element.innerHTML.toLowerCase())){}
        else
        {
            tagList.push(element.innerHTML)
        
            tagContainer = document.createElement("li")
            tagContainer.classList.add("tag")

            tag = document.createElement("span")
            tag.innerHTML = (element.innerHTML)

            cross = document.createElement("img")
            cross.src = "img/cross.png"

            tagContainer.appendChild(tag)
            tagContainer.appendChild(cross)

            domList = document.querySelector("#currentTags").appendChild(tagContainer)
            img = document.querySelectorAll(".tag img")
            img.forEach(imgs => {
                    imgs.addEventListener("click", function(e)
                    {
                        parent = this.parentNode
                        child = parent.children[0].innerHTML
                        tagList = tagList.filter(item => item !== child)
                        parent.style.display = "none"
                    })
                })
        }
     })
})


/** Usensils */
var ust = document.querySelectorAll(".ustensils")

let tagListUst = []

ust.forEach(usts => {

    usts.addEventListener("click", function(e)
    {
        e.preventDefault();

        if (tagList.includes(usts.innerHTML.toLowerCase())){}
        else
        {
            tagList.push(usts.innerHTML)
        
            tagContainer = document.createElement("li")
            tagContainer.classList.add("tag")

            tag = document.createElement("span")
            tag.innerHTML = (usts.innerHTML)

            cross = document.createElement("img")
            cross.src = "img/cross.png"

            tagContainer.appendChild(tag)
            tagContainer.appendChild(cross)

            domList = document.querySelector("#currentTags").appendChild(tagContainer)
            img = document.querySelectorAll(".tag img")
            img.forEach(imgs => {
                    imgs.addEventListener("click", function(e)
                    {
                        parent = this.parentNode
                        child = parent.children[0].innerHTML
                        tagList = tagList.filter(item => item !== child)
                        parent.style.display = "none"
                    })
                })
        }
     })
})
