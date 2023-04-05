//FUNCTION IMPLEMENTATION
const eqArrays = require("./eqArray");

const assertArrayEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//TEST CODE
assertArrayEqual([1, 2, 3], [1, 2, 3]);
assertArrayEqual(["1", "2", "3"], ["1", "2", "3"]);