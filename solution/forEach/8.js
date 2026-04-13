const products = [
  { name: '노트북', price: 1000000 },
  { name: '마우스', price: 50000 },
  { name: '키보드', price: 80000 },
  { name: '모니터', price: 300000 },
];

products.forEach((product) => {
  product.price = product.price * 0.9;
});

console.log(products);
