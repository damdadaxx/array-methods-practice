const products = [
  { name: '노트북', price: 1200000 },
  { name: '마우스', price: 25000 },
  { name: '키보드', price: 55000 },
  { name: '모니터', price: 350000 },
  { name: '헤드셋', price: 89000 },
];

const mostExpensive = products.reduce((acc, cur) => {
  return acc.price > cur.price ? acc : cur;
});

console.log(mostExpensive); // { name: '노트북', price: 1200000 }
