// shopping list factory function here

function shoppingListFactory() {

    var totalBudget = 0

    

    function setBudget(budgetAmount) {


        return totalBudget = budgetAmount
    }

    function getBudget() {


        return totalBudget
    }

    function setListItem(listTopic, listDescription, listPrice) {
        var shoppingListObject = [{ topic: undefined, description: undefined, price: undefined }];

        shoppingListObject.topic = listTopic;
        shoppingListObject.description = listDescription;
        shoppingListObject.price = listPrice;
    
        return shoppingListObject;
    }

    function resetListItem(object) {
        object.topic = undefined;
        object.description = undefined;
        object.price = undefined;

        return object;
    }




    return {
        setBudget,
        getBudget,
        setListItem,
        resetListItem
    }
}