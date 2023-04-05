//FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
//TEST CODE
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual("1", "1");

//FUNCTION IMPLEMENTATION
const head = function(array) {
console.log(array);
  return array[0];
};

assertEqual(head([1,6,7,8]), 5);
console.log(head([1,6,7,8]));
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
console.log(head(["Hello", "Lighthouse", "Labs"]), "Hello");