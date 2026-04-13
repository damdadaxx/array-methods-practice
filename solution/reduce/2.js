const numbers = [5, 12, 3, 27, 8, 15, 1];

const max = numbers.reduce((acc, cur) => (acc > cur ? acc : cur));

console.log(max); // 27
