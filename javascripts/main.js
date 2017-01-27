console.log("Main Connected");

var finalSandwichPrice = 0;

// // Variable to hold topping that the user selects
// var selectedTopping;


//   // Add the topping to the SandwichMaker to increase the total price
// });

var meatSelect = document.getElementById("meatSelect");
var breadSelect = document.getElementById("breadSelect");
var cheeseSelect = document.getElementById("cheeseSelect");
var vegetableSelect = document.getElementById("vegetableSelect");
var condimentSelect = document.getElementById("condimentSelect");
var button = document.getElementById("submit");
var toppingPrice = 0;

// meatSelect.addEventListener("change", function(event) {
// 	console.log("Meat Change")
// });

breadSelect.addEventListener("change", function(event) {
	console.log("Bread Change")
});

cheeseSelect.addEventListener("change", function(event) {
	console.log("Cheese Change")
});

vegetableSelect.addEventListener("change", function(event) {
	console.log("Vegetable Change")
});

condimentSelect.addEventListener("change", function(event) {
	console.log("Condiment Change")
});

meatSelect.addEventListener("change", function(event) {
	console.log("Meat Change")
});

button.addEventListener("click", function(event) {
	console.log("Click")
	var breadArray = [];
	var meatArray = [];
	var cheeseArray = [];
	var vegetableArray = [];
	var condimentArray = [];
	for (var i = 0; i < meatSelect.length; i++) {
		if (breadSelect[i].selected === true) {
			breadArray.push(breadSelect[i].value);
		} 
		if (meatSelect[i].selected === true) {
			meatArray.push(meatSelect[i].value);
		}
		if (cheeseSelect[i].selected === true) {
			cheeseArray.push(cheeseSelect[i].value);
		}
		if (vegetableSelect[i].selected === true) {
			vegetableArray.push(vegetableSelect[i].value);
		}
		if (condimentSelect[i].selected === true) {
			condimentArray.push(condimentSelect[i].value);
		}
	}
	console.log(breadArray, meatArray, cheeseArray, vegetableArray, condimentArray);
	var meatCost = 0;
	for (var i = 0; i < meatArray.length; i++) {
		meatCost += SandwichMaker.addMeat(meatArray[i]);
	}
	console.log("Meat Cost", meatCost);
	SandwichMaker.addTopping(meatCost);
	var breadCost = 0;
	for (var i = 0; i < breadArray.length; i++) {
		breadCost += SandwichMaker.addBread(breadArray[i]);
	}
	console.log("Bread Cost", breadCost);
	SandwichMaker.addTopping(breadCost);
	var cheeseCost = 0;
	for (var i = 0; i < cheeseArray.length; i++) {
		cheeseCost += SandwichMaker.addCheese(cheeseArray[i]);
	}
	console.log("Cheese Cost", cheeseCost);
	SandwichMaker.addTopping(cheeseCost);
	var condimentCost = 0;
	for (var i = 0; i < condimentArray.length; i++) {
		condimentCost += SandwichMaker.addCondiment(condimentArray[i]);
	}
	console.log("Condiment Cost", condimentCost);
	SandwichMaker.addTopping(condimentCost);
	var vegetableCost = 0;
	for (var i = 0; i < vegetableArray.length; i++) {
		vegetableCost += SandwichMaker.addVegetable(vegetableArray[i]);
	}
	SandwichMaker.addTopping(vegetableCost)
	console.log("Vegetable Cost", vegetableCost);

	toppingPrice = meatCost + breadCost + cheeseCost + condimentCost + vegetableCost;
	console.log("Sandwich Price", toppingPrice);
	
	var returnedPrice = SandwichMaker.pricePlease();
	document.getElementById("output").value = returnedPrice;
});







