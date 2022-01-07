const input = document.getElementById("input")
const addBtn = document.querySelector(".add")
const list = document.getElementById("list")
const remove = document.getElementsByClassName("remove")
const priority = document.getElementById("priority")



// Adding new list items
addBtn.addEventListener("click", () => {
    let todo = input.value;

    input.value = ""

        var newItem = document.createElement("div")

        newItem.className += "item"
        var newItemText = document.createElement("h4")
        var newBtn = document.createElement("button")

        newBtn.textContent = "X"
        newBtn.className += "remove"
        newItemText.append(todo)
        newItem.append(newItemText)
        newItem.append(newBtn)

        if (priority.value === "3"){
            newItem.className += " high"
        }
        if (priority.value === "2"){
            newItem.className += " medium"
        }
        if (priority.value === "1"){
            newItem.className += " low"
        }

        list.appendChild(newItem)

        setTimeout(() => {
            newItem.style.transform = "translateX(118.25%)"
        }, 250)     

        //Removing list items
        Array.from(remove).forEach(
            (element) => {
                element.addEventListener("click", (e) => {
                    element.parentElement.remove()
                })
            }
            
        )
    

    
    
})



// MAKE TASK ITEM SLIDE IN OR SOME SORT OF ANIMATION



