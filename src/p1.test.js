const sortNumbers = require('./p1');

const input = [21, 400, 8, -3, 77, 99, -16, 55, 111, -36, 28];

const result = sortNumbers(input);

console.log("Sorted result:");
console.log(result);

// Expected:
// [-36, -16, -3, 8, 21, 28, 55, 77, 99, 111, 400]