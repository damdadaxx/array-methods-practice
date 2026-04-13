const numbers = [1, 2, 3, 4, 5, 3, 6, 3, 7];

const without3 = numbers.filter((num) => num !== 3);

console.log(without3); // [1, 2, 4, 5, 6, 7]
