//INNERHTML
var listHere = document.querySelector(".listHere")
//FIELDS
var priceField = document.querySelector(".price")
var descriptionField = document.querySelector(".description")
var topicField = document.querySelector(".topic")
var budgetField = document.querySelector(".budget")
var errorField = document.querySelector(".error")

//BUTTONS
var set = document.querySelector(".set")
var add = document.querySelector(".add")

//INPUTFIELDS

//FACTORY
var shoppingListFactoryDOM = shoppingListFactory()
var budgetAmount = 0;
var shoppingListItem = ""



function addBudget() {
    //console.log(budgetField.value)
    budgetAmount = shoppingListFactoryDOM.setBudget(budgetField.value)
    console.log(budgetAmount)

}

console.log(budgetAmount)

function setItem() {
    console.log(topicField.value.length)

    if (topicField.value.length !== 0 && descriptionField.value.length > 0 && priceField.value > 0) {

        if (!descriptionField.value.includes(topicField.value)) {
            errorField.innerHTML = "Description must include topic word!"
        }
        else if (topicField.value.length !== 0 && descriptionField.value.length > 0 && priceField.value > 0  && descriptionField.value.includes(topicField.value) == true){
            shoppingListItem = shoppingListFactoryDOM.setListItem(topicField.value, descriptionField.value, priceField.value)
            console.log(shoppingListItem)

            var items = []

            items.push(shoppingListItem.topic)
            items.push(shoppingListItem.description)
            items.push(shoppingListItem.price)
            console.log(items)

            for (var i = 0; i < items.length; i++) {
                var anItem = items[i];
                document.querySelector(".listHere").innerHTML += anItem + " "
            }
        }
        if (topicField.value.length == 0 && descriptionField.value.length > 0 && priceField.value > 0) {

            shoppingListItem = shoppingListFactoryDOM.setListItem(topicField.value, descriptionField.value, priceField.value)
            console.log(shoppingListItem)

            var items = []

            items.push(shoppingListItem.topic)
            items.push(shoppingListItem.description)
            items.push(shoppingListItem.price)
            console.log(items)

            for (var i = 0; i < items.length; i++) {
                var anItem = items[i];
                document.querySelector(".listHere").innerHTML += anItem + " "
            }

        }
    }
   shoppingListFactoryDOM.resetListItem()
   errorField.innerHTML = "Item added to list"
    return true
}






set.addEventListener("click", addBudget)
add.addEventListener("click", setItem)