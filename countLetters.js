const countLetters = function (str) {
  const result = {};
  const newString = str.split(" ").join("");
  //console.log(newString); test 1
  for (const letter of newString) {
    if (result[letter]) {
      //add one
      result[letter] += 1;
    } else {
      // set letter equal to one
      result[letter] = 1;
    }
  }
  return result;
};
//console.log(countLetters("lighthouse in the house"));
console.log(countLetters);