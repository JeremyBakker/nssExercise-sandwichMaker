console.log("Vegetable Connected")
// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different vegetable prices
  var vegetablePrices = {
  	"noVegetable": 0.00,
  	"tomato": .25,
  	"lettuce": .25,
  	"onion": .25,
    "greenPepper": .25
  };

  // Augment the original object with another method
  maker.addVegetable = function(vegetable) {
    console.log(vegetablePrices[vegetable])
    return vegetablePrices[vegetable];
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);