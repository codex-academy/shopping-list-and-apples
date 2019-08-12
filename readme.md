# Shopping list & apples

Fork this repo into your GitHub profile

## Shopping list

Create a widget that allows shoppers to create a shopping list.

Users should be able to add a total budget & topic word for the list.

Items added to the list should have a description and a price. The description and price should be displayed on the screen for each item.

The description of the items added should contain the topic word otherwise these items can't be added to the list. If the topic word is blank any description can be added. 

Once the total price of the items on the list goes above the total budget display a message saying that the total budget has been exceeded. If the total budget number is updated the message should be displayed accordingly.

Make your code testable by putting the application logic in a Factory Function. Write tests using Mocha.

Do a paper prototype before you start and add that to your GitHub repository.

### Extra features:

> Only look at these if you have som time left

* Storing the list state in LocalStorage.
* Deleting items from the list.
	* register `click` event handler on containing element to determine which (using event bubbling)
	* use `event.target` to get the element that was clicked
	* Use [data-attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes) to find out which apple was clicked on.
	* Update the data in the Factory Function accordingly.
	* Re-render the screen
	
## Apples

Given a list of `apples` that was sold by a local fruiter seller in this format:

```
const apples = [
	{
		color : "red",
		qty: 3,
		price: 5.25
	},
	{
		color : "red",
		qty: 5,
		price: 7.75
	},
	{
		color : "yellow",
		qty: 3,
		price: 4.80
	},
	{
		color : "green",
		qty: 3,
		price: 6.45
	},

]
```

Make at least **4 (four)** of the tests in the `test/index.html` [test/index.html](test/index.html)  pass.

The functions should do the following.

* Calculate the total number apples sold.
* Find the total income for all the green apples sold.
* Calculate the total profit for all the apples sold.
* Calculate the total profit from apples sold.
* Calculate the total number of each color sold.
* Calculate the total income per color sold.
* Calculate the total profit per color sold.
* Find the most profitable apple color sold.

## When you are done.

When you are done please email `mentors@projectcodex.co` to request a code review.

You have time to complete this up until `17h00` on `Monday 12 August` - if you are done earlier that's great.

Please ensure you send the review request email before `17h15`.
