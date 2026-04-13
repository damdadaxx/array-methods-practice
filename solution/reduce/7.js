const cart = [
  { name: '노트북', price: 1200000, selected: true },
  { name: '마우스', price: 25000, selected: false },
  { name: '키보드', price: 55000, selected: true },
  { name: '모니터', price: 350000, selected: true },
  { name: '헤드셋', price: 89000, selected: false },
];

const totalPrice = cart.reduce((acc, item) => {
  if (item.selected) {
    return acc + item.price;
  }
  return acc;
}, 0);

console.log(totalPrice); // 1605000
