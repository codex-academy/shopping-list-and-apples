//Shopping tests
describe("The Shopping List factory function", function(){

	it("should set the budget amount", function(){
        const shoppingListTester = shoppingListFactory();
        assert.equal(5000, shoppingListTester.setBudget(5000));
    });
    
    it("should set the budget amount", function(){
        const shoppingListTester = shoppingListFactory();
        shoppingListTester.setBudget(2000)
        assert.equal(2000, shoppingListTester.getBudget(5000))
    });


    it("should set-up the shopping list entry", function(){
        const shoppingListTester = shoppingListFactory();

        var setListItemObject = shoppingListTester.setListItem("milk","very tasty milk",30)
        assert.equal("milk", setListItemObject.topic)
        assert.equal("very tasty milk", setListItemObject.description)
        assert.equal(30, setListItemObject.price)
    });


    it("should reset the shoppingListObject", function(){
        const shoppingListTester = shoppingListFactory();
        var setListItemObject = shoppingListTester.setListItem("milk","very tasty milk",30)
        var resettedListItemObject = shoppingListTester.resetListItem(setListItemObject)
        assert.equal(undefined, resettedListItemObject.topic)
        assert.equal(undefined, resettedListItemObject.description)
        assert.equal(undefined, resettedListItemObject.price)
    });
});