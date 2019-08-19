function appleFactory() {

	function totalNumberSold(applesSoldList) {
		var totalQuantitySold = 0
		for (var i in applesSoldList) {

			var aSaleEntry = applesSoldList[i];
			var quantity = aSaleEntry.qty
			totalQuantitySold += Number(quantity);
		}
		return totalQuantitySold

	}

	function totalIncome(applesSoldList) {
		var totalSalesIncome = 0
		for (var i in applesSoldList) {

			var aSaleEntry = applesSoldList[i];
			var quantity = aSaleEntry.qty
			var price = aSaleEntry.price
			var totalPerItem = quantity * price
			totalSalesIncome += Number(totalPerItem)
		}
		return totalSalesIncome;
	}

	function totalIncomeGreenApples(applesSoldList) {
		//console.log(applesSoldList)
		var totalSalesIncomeGreen = 0
		var quantity = 0


		for (var i in applesSoldList) {

			var aSaleEntry = applesSoldList[i];
			var type = aSaleEntry.color

			if (type == "green") {

				var price = aSaleEntry.price
				//console.log(price)
				quantity = aSaleEntry.qty
				//console.log(quantity)
				totalSalesIncomeGreen += quantity * price
				//console.log(Number(totalSalesIncomeGreen).toFixed(2));
			}
			//console.log(Number(totalForGreen).toFixed(2));

		}
		return Number(totalSalesIncomeGreen).toFixed(2);
	}

	function totalProfit(applesSoldList, applePriceMap) {
		//console.log(applesSoldList)

		var totalProfitGreen = 0
		var totalProfitYellow = 0
		var totalProfitRed = 0

		for (var i in applesSoldList) {
			var entry = applesSoldList[i];


			if (entry.color == "green") {
				totalProfitGreen += (entry.qty * entry.price) - (entry.qty * applePriceMap.green)
			}

			else if (entry.color == "yellow") {
				totalProfitYellow += (entry.qty * entry.price) - (entry.qty * applePriceMap.yellow)
			}
			else if (entry.color == "red") {
				totalProfitRed += (entry.qty * entry.price) - (entry.qty * applePriceMap.red)
			}

		}
		return Number(totalProfitRed + totalProfitYellow + totalProfitGreen).toFixed(2)

	}

	// -- extra functions...

	function totalPerColorSold(apples, color) {
		var howManySold = 0

		for (var i in apples) {
			var entry = apples[i]
			var appleColor = entry.color
			if (appleColor == color) {
				howManySold += entry.qty
			}


		}

		return howManySold
	}

	function totalIncomePerColor(apples, color) {
		var totalIncomePerColor = 0

		for (var i in apples) {
			var entry = apples[i]
			var appleColor = entry.color
			if (appleColor == color) {
				totalIncomePerColor += entry.qty * entry.price
			}


		}

		return Number(totalIncomePerColor).toFixed(2)

	}

	function totalProfitPerColor(apples, color, costMap) {

		var theColor = color
		var thePrice = 0

		for (var i in costMap) {
			var thePrice = costMap[theColor]
		}
		//console.log(thePrice)

		var totalProfitPerColor = 0

		for (var i in apples) {
			var entry = apples[i]
			var appleColor = entry.color
			if (appleColor == color) {
				totalProfitPerColor += (entry.qty * entry.price) - (entry.qty * thePrice)
			}
		}

		return Number(totalProfitPerColor).toFixed(2)
	}



	function mostProfitableColor(apples, color, costMap) {
		var thePrice = 0
		console.log(apples)
		console.log(color)
		console.log(costMap)
		var priceKeys = Object.keys(costMap)
		console.log(priceKeys)
		console.log(priceKeys.length)
		console.log(thePrice)

		for (var i in costMap) {
		var theRedPrice = costMap[priceKeys[0]]
		var theYellowPrice = costMap[priceKeys[1]]
		var theGreenPrice = costMap[priceKeys[2]]
	}

var totalProfitRed = 0
var totalProfitYellow = 0
var totalProfitGreen = 0

for (var i in apples) {
	var entry = apples[i]
	var appleColor = entry.color
	if (appleColor == priceKeys[0]) {
		totalProfitRed += (entry.qty * entry.price) - (entry.qty * theRedPrice)
	}
	else if (appleColor == priceKeys[1]) {
		totalProfitYellow += (entry.qty * entry.price) - (entry.qty * theYellowPrice)
	}
	else if (appleColor == priceKeys[2]) {
		totalProfitGreen += (entry.qty * entry.price) - (entry.qty * theGreenPrice)
	}
}
console.log(theRedPrice)
console.log(theYellowPrice)
console.log(theGreenPrice)

var theMostProfitableApple = {red:totalProfitRed, yellow:totalProfitYellow, green:totalProfitGreen}
console.log(theMostProfitableApple)

var highest = 0;
for (var i in theMostProfitableApple){
	var profitableEntry = theMostProfitableApple[i];
	if (Number(profitableEntry) > highest){
		highest = Number(profitableEntry)
	}
	console.log(highest)

}
function getKeyByValue(object, value) {
	return Object.keys(object).find(key => object[key] === value);
  }

console.log(getKeyByValue(theMostProfitableApple, highest))
return getKeyByValue(theMostProfitableApple, highest)
	}

	return {
		totalNumberSold,
		totalIncome,
		totalIncomeGreenApples,
		totalProfit,
		totalPerColorSold,
		totalIncomePerColor,
		totalProfitPerColor,
		mostProfitableColor
	}
}


