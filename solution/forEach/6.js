const numbers = [-3, 5, -1, 8, 0, -7, 2, 10];
const positiveNumbers = [];

numbers.forEach((num) => {
  if (num > 0) {
    positiveNumbers.push(num);
  }
});

console.log(positiveNumbers); // [5, 8, 2, 10]
