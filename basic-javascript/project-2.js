/* eslint-disable arrow-parens */

const getBiggest = (x, y) => {
  if (!x) return "Please provide the first value.";
  else if (!y) return "Please provide the second value.";
  else if (!x && !y) return "Please provide 2 values.";
  else if (x > y) return x;
  else if (x === y) return y;
  return y;
};

const greeting = language => {
  switch (language) {
    case 'German':
      return 'Guten Tag!';
    case 'Spanish':
      return 'Hola!';
    default:
      return 'Hello!';
  }
};

const isTenOrFive = num => {
  if (!num) return "Please provide a number.";
  else if (num === 10 || num === 5) return true;
  return false;
};

const isInRange = num => {
  if (!num) return "Please provide a number.";
  else if (num < 50 && num > 20) return true;
  return false;
};

const isInteger = num => {
  if (!num) return "Please provide a number."
  else if (Math.floor(num) === num) return true;
  return false;
};

const fizzBuzz = num => {
  if (!num) return "Please provide a number."
  else if (num % 5 === 0 && num % 3 === 0) return 'fizzbuzz';
  else if (num % 5 === 0) return 'buzz';
  else if (num % 3 === 0) return 'fizz';
  return num;
};

const isPrime = num => {
  if (!num) return "Please provide a number."
  else if (num < 0) return false;
  else if (num === 1 || num === 0) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const returnFirst = arr => {
  if (!arr) return "Please provide an array."
  return arr[0];
};

const returnLast = arr => {
  if (!arr) return "Please provide an array."
  return arr[arr.length - 1];
};

const getArrayLength = arr => {
  if (!arr) return "Please provide an array."
  return arr.length;
};

const incrementByOne = arr => {
  if (!arr) return "Please provide an array."
  for (let i = 0; i < arr.length; i++) {
    arr[i]++;
  }
  return arr;
};

const addItemToArray = (arr, item) => {
  if (!arr) return "Please provide an array."
  else if (!item) return "Please provide an item."
  else if (!arr && !item) return "Please provide a number and an item."
  arr.push(item);
  return arr;
};

const addItemToFront = (arr, item) => {
  if (!arr) return "Please provide an array."
  else if (!item) return "Please provide an item."
  else if (!arr && !item) return "Please provide a number and an item."
  arr.unshift(item);
  return arr;
};

const wordsToSentence = words => {
  if (!words) return "Please provide an array of words."
  let newSentence = '';
  for (let i = 0; i < words.length; i++) {
    if (i === 0) {
      newSentence += `${words[i]}`;
    } else {
      newSentence += ` ${words[i]}`;
    }
  }
  return newSentence;
};

const contains = (arr, item) => {
  if (!arr) return "Please provide an array."
  else if (!item) return "Please provide an item."
  else if (!arr && !item) return "Please provide a number and an item."

  let itemCounter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      itemCounter++;
    }
  }
  if (itemCounter > 0) {
    return true;
  }
  return false;
};

const addNumbers = numbers => {
  if (!numbers) return "Please provide an array of numbers."
  let sumOfNumbers = 0;
  for (let i = 0; i < numbers.length; i++) {
    sumOfNumbers += numbers[i];
  }
  return sumOfNumbers;
};

const averageTestScore = testScores => {
  if (!testScores) return "Please provide an array of test scores."
  let totalSumScores = 0;
  let numberOfScore = 0;
  for (let i = 0; i < testScores.length; i++) {
    totalSumScores += testScores[i];
    numberOfScore++;
  }
  return totalSumScores / numberOfScore;
};

const largestNumber = numbers => {
  if (!numbers) return "Please provide an array numbers."
  let biggestInteger = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > biggestInteger) {
      biggestInteger = numbers[i];
    }
  }
  return biggestInteger;
};

module.exports = {
  getBiggest,
  greeting,
  isTenOrFive,
  isInRange,
  isInteger,
  fizzBuzz,
  isPrime,
  returnFirst,
  returnLast,
  getArrayLength,
  incrementByOne,
  addItemToArray,
  addItemToFront,
  wordsToSentence,
  contains,
  addNumbers,
  averageTestScore,
  largestNumber
};
