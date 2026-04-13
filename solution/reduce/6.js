const nested = [[1, 2], [3, 4], [5, 6], [7, 8]];

const flat = nested.reduce((acc, cur) => acc.concat(cur), []);

console.log(flat); // [1, 2, 3, 4, 5, 6, 7, 8]
