console.log("Cheese Connected")
// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different cheese prices
  var cheesePrices = {
  	"noCheese": 0.00,
  	"cheddar": .50,
  	"swiss": .50,
  	"montereyJack": 1.00,
    "provolone": 1.00
  };

  // Augment the original object with another method
  maker.addCheese = function(cheese) {
    console.log(cheesePrices[cheese])
    return cheesePrices[cheese];
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);