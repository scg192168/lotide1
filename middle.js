//Copy your assertArraysEqual and eqArrays functions into this new file.
//Implement middle which will take in an array and return the middle-most element(s) of the given array.
//For arrays with one or two elements, there is no middle. Return an empty array.
        //middle([1]) // => []
        //middle([1, 2]) // => []
//For arrays with odd number of elements, an array containing a single middle element should be returned.
        //middle([1, 2, 3]) // => [2]
        //middle([1, 2, 3, 4, 5]) // => [3]
//For arrays with an even number of elements, an array containing the two elements in the middle should be returned
        //middle([1, 2, 3, 4]) // => [2, 3]
        //middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
//Write test assertions for the various scenarios with middle
//We can and should use the assertArraysEqual function for testing our new function. That's why we brought it in here to begin with.
//Due to the copy/pasted assertion functions, your test code will indeed take up a big chunk of the file. The flow of it should look like this:

// Implement middle which will take in an array and return the middle-most element(s) of the given array.
const middle = function(array) {
        // Create the new array that the middle value(s) will be returned to
let newArray = [];
if (array.length === 1 || array.length === 2) {
        return newArray;
 } else if (array.length % 2 === 0) {
var evenArr = (array.length - 1) / 2;
// evenArr = 2.5: need to round up and down to return elemnts in the middle
var intDown = Math.floor(evenArr);
var intUp = Math.ceil(evenArr);
// console.log(intDown);
// console.log(intUp);
// console.log(`The indexes are ${intDown} and ${intUp}`);
// console.log(`The elements are ${array[intDown]} and ${array[intUp]}`);
newArray.push(array[intDown]);
newArray.push(array[intUp]);
 return newArray;
} else {
var oddArr = (array.length - 1) / 2;
// console.log("Index is ", oddArr);
          // console.log("Element is :", array[oddArr]);
newArray.push(array[oddArr]);
return newArray;
}
};
      
middle([1]) // => []
console.log (middle([1, 2])) // => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]




