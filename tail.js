//FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("1", "1");

//implement tail function
const head = function(array) {
  console.log(array);
    return array.slice(1);
  };
  
  console.log(head([1,6,7,8]));
  console.log(head(["Hello", "Lighthouse", "Labs"]));