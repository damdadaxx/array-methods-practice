const numbers = [1, 3, 2, 3, 5, 1, 4, 2, 5, 3];

const unique = numbers.filter((num, index) => numbers.indexOf(num) === index);

console.log(unique); // [1, 3, 2, 5, 4]
