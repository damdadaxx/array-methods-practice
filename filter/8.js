// 문제 8: 재고가 있는 상품만 필터링하기
// filter를 사용하여 재고(stock)가 0보다 큰 상품만 골라내세요.

const products = [
  { name: '노트북', price: 1200000, stock: 5 },
  { name: '마우스', price: 25000, stock: 0 },
  { name: '키보드', price: 55000, stock: 12 },
  { name: '모니터', price: 350000, stock: 0 },
  { name: '헤드셋', price: 89000, stock: 3 },
];

// TODO: filter를 사용하여 stock이 0보다 큰 상품만 담은 새 배열 inStock을 만드세요.
const inStock = undefined;

console.log(inStock);
// 예상 출력:
// [
//   { name: '노트북', price: 1200000, stock: 5 },
//   { name: '키보드', price: 55000, stock: 12 },
//   { name: '헤드셋', price: 89000, stock: 3 }
// ]
