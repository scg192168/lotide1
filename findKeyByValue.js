const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const bestTVShowsbtgenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

function findKeyByValue(object, value) {
  for (let key in object) {
    if (object[key] === value) {
      return key;
    }
  }
}

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("1", "1");
assertEqual(findKeyByValue(bestTVShowsbtgenre, 'The Wire'), 'drama');
assertEqual(findKeyByValue(bestTVShowsbtgenre, 'The 70s shoe'), 'drama');

