const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [];

arr1.forEach((item) => {
  combined.push(item);
});

arr2.forEach((item) => {
  combined.push(item);
});

console.log(combined); // [1, 2, 3, 4, 5, 6]
