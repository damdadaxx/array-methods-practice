const products = [
  { name: '노트북', price: 1200000, stock: 5 },
  { name: '마우스', price: 25000, stock: 0 },
  { name: '키보드', price: 55000, stock: 12 },
  { name: '모니터', price: 350000, stock: 0 },
  { name: '헤드셋', price: 89000, stock: 3 },
];

const inStock = products.filter((product) => product.stock > 0);

console.log(inStock);
