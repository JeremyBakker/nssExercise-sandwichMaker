console.log("Condiment Connected")
// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different condiment prices
  var condimentPrices = {
  	"noCondiment": 0.00,
  	"mustard": .10,
  	"mayonnaise": .10,
  	"vinegarAndOil": .10,
    "saltAndPepper": .10
  };

  // Augment the original object with another method
  maker.addCondiment = function(condiment) {
    console.log(condimentPrices[condiment])
    return condimentPrices[condiment];
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);