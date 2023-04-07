//Implement a function called letterPositions
const letterPositions = function (sentence) {
  const results = {};
  const lowerCaseSentence = sentence.toLowerCase();

  //logic to update results here
  for (let i = 0; i < lowerCaseSentence.length; i++) {
    const letter = lowerCaseSentence[i];
    if (letter !== ' ' && !results[letter]) {
      results[letter] = [i];
    } else if (letter !== ' ') {
      results[letter].push(i);
    }
  }
  return results;
};
const results = letterPositions("Lighthouse in the house");

console.log(results);