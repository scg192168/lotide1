//Implement without which will return a subset of a given array, removing unwanted elements
//This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.

const without = function(array, itemsToRemove) {
  let newArray = [];
  //iterate over the given array
  for (let i = 0; i < array.length; i++) {
    //iterate over the itemsToRemove array
    for (let x = 0; x < itemsToRemove.length; x++) {
      //if the element in the given array is equal to the element in the itemsToRemove array then break from the loop
      if (array[i] === itemsToRemove[x]) {
        break;
      }
      if (itemsToRemove.length - 1 === x) {
        newArray.push(array[i]);
        //Test to see what has been pushed for each test
        //console.log(newArray);
      }
    }
  }
  return newArray;
};

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

//Among your test cases, be sure to include an important test that is easy to 
//overlook: The without function should be returning a new array and not modify 
//the original array that is passed in. Let's write a test case to ensure this:

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
