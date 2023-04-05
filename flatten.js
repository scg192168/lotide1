//Create a function flatten which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
//flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]


//FUNCTION IMPLEMENTATION
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let value = 0; value < array1.length; value += 1) {
    if ((Array.isArray(array1[value]) || Array.isArray(array2[value])) && eqArrays(array1[value], array2[value]) === false) {
      return false;
    } else if (Array.isArray(array1[value]) || Array.isArray(array2[value])) {
      eqArrays(array1[value], array2[value]);
    } else if (array1[value] !== array2[value]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;

moduel.exports = eqArrays([1, 2, 3], [1, 2, 3]) // => true
module.exports = eqArrays([1, 2, 3], [3, 2, 1]) // => false

module.exports = eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
module.exports = eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
