const numbers = [5, 12, 3, 48, 67, 25, 8, 50, 99, 10];

const inRange = numbers.filter((num) => num >= 10 && num <= 50);

console.log(inRange); // [12, 48, 25, 50, 10]
