// Iteration #1: Find the maximum
function maxOfTwoNumbers(firstValue, secondValue) {
  if (firstValue > secondValue) {
    return firstValue;
  } else {
    return secondValue;
  }
}

// Iteration #2: Find longest word
const words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
];

function findLongestWord(array) {
  // Return null when called with an empty array
  if (array.length === 0) {
    return null;
  }

  // Declare and initialise variable for longestWord
  let longestWord = '';

  // Iterate over the array and check if each word is longer than the previous one
  // If it is, set it equal to the longest word
  array.forEach(word => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });

  return longestWord;
}

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(array) {
  // Declare and initialise variable for the sum
  let sum = 0;

  // Iterate over each number in the array and add it to the value of sum
  array.forEach(number => {
    sum += number;
  });

  return sum;
}

// Iteration #3.1 Bonus:
function sum(array) {
  // Return 0 if function is called with an empty array
  if (array.length === 0) {
    return 0;
  }

  // Declare and initialise variable for sum
  let sum = 0;

  // Iterate over each element in array using forEach
  array.forEach(element => {
    // If the element is a number add it to sum
    // Else if it is a string add it's length to sum
    // Else if it is boolean value 'true' increase sum by 1
    // Else throw an error

    if (typeof element === 'number') {
      sum += element;
    } else if (typeof element === 'string') {
      sum += element.length;
    } else if (typeof element === 'boolean') {
      if (element) {
        sum++;
      }
    } else {
      throw new Error(
        'Error: Values must be of type number, string, or boolean.'
      );
    }
  });

  return sum;
}

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array) {
  // Return null if function is called with an empty array
  if (array.length === 0) {
    return null;
  }

  // Sum the numbers in the array using sumNumbers() function
  const sum = sumNumbers(array);

  // Find the average by dividing the sum by the length of the array
  const average = sum / array.length;

  return average;
}

// Level 2: Array of strings
const wordsArr = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

function averageWordLength(array) {
  // Return null if function is called with an empty array
  if (array.length === 0) {
    return null;
  }

  // Declare and initialise variable for the sum
  let sum = 0;

  // Iterate over each word in the array and add it's length to variable sum
  array.forEach(word => {
    sum += word.length;
  });

  // Calculate the average by dividing the sum by the length of the array
  average = sum / array.length;

  return average;
}

averageWordLength(wordsArr);

// Bonus - Iteration #4.1
function avg(array) {
  // Return null if function is called with an empty array
  if (array.length === 0) {
    return null;
  }

  // Use sum function to get the total value of the mixed array
  // Calculate the average by dividing by the length of the array
  average = sum(array) / array.length;

  return average;
}

// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring',
];

function uniquifyArray(wordsArray) {
  // Return null if function is called with an empty array
  if (wordsArray.length === 0) {
    return null;
  }

  // Declare and initalise newArray
  const newArray = [];

  // Iterate over the words array using forEach
  // Add each word to newArray only if it is not already included
  wordsArray.forEach(word => {
    if (!newArray.includes(word)) {
      newArray.push(word);
    }
  });

  return newArray;
}

// Iteration #6: Find elements
const wordsFind = [
  'machine',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'truth',
  'disobedience',
];

function doesWordExist(wordsArray, word) {
  // Return null if function is called with an empty array
  if (wordsArray.length === 0) {
    return null;
  }

  // Return true if array includes the word, and false if not
  if (wordsArray.includes(word)) {
    return true;
  } else {
    return false;
  }
}

// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter',
];

function howManyTimes(wordsArray, word) {
  // Return 0 if function is called with an empty array
  if (wordsArray.length === 0) {
    return 0;
  }

  // Declare and initalise count variable
  let count = 0;

  // Iterate over the wordsArray, each time the word is found add one to the count
  for (let i = 0; i < wordsArray.length; i++) {
    if (word === wordsArray[i]) {
      count++;
    }
  }

  return count;
}

// Iteration #8: Bonus
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [
    49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62,
    0,
  ],
  [
    81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36,
    65,
  ],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [
    22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13,
    80,
  ],
  [
    24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12,
    50,
  ],
  [
    32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64,
    70,
  ],
  [
    67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94,
    21,
  ],
  [
    24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63,
    72,
  ],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [
    16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85,
    57,
  ],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [
    19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55,
    40,
  ],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [
    88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53,
    69,
  ],
  [
    4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76,
    36,
  ],
  [
    20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36,
    16,
  ],
  [
    20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5,
    54,
  ],
  [
    1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67,
    48,
  ],
];

const testArray = [
  [1, 2, 3, 4, 5],
  [1, 20, 3, 4, 5],
  [1, 20, 3, 4, 5],
  [1, 20, 3, 4, 5],
  [1, 4, 3, 4, 5],
];

function greatestProduct(array) {
  // Declare and initialize product variable
  let largestProduct = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      // Check for horizontal product
      if (j + 3 < array[i].length) {
        let horizontalProduct =
          array[i][j] * array[i][j + 1] * array[i][j + 2] * array[i][j + 3];
        if (horizontalProduct > largestProduct) {
          largestProduct = horizontalProduct;
        }
      }

      // Check for vertical product
      if (i + 3 < array.length) {
        let verticalProduct =
          array[i][j] * array[i + 1][j] * array[i + 2][j] * array[i + 3][j];
        if (verticalProduct > largestProduct) {
          largestProduct = verticalProduct;
        }
      }
    }
  }

  return largestProduct;
}

console.log(greatestProduct(testArray));

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct,
  };
}
