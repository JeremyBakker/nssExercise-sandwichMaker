console.log("Meat Connected")
// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatPrices = {
  	"noMeat": 0.00,
  	"ham": 1.00,
  	"turkey": 1.00,
  	"chickenBreast": 2.00,
    "salami": 2.00
  };

  // Augment the original object with another method
  maker.addMeat = function(meat) {
    console.log(meatPrices[meat])
    return meatPrices[meat];
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);