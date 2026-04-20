// 문제 10: 가장 비싼 상품 찾기
// reduce를 사용하여 가장 비싼 상품 객체를 찾으세요.

const products = [
  { name: "노트북", price: 1200000 },
  { name: "마우스", price: 25000 },
  { name: "키보드", price: 55000 },
  { name: "모니터", price: 350000 },
  { name: "헤드셋", price: 89000 },
];

// TODO: reduce를 사용하여 가장 비싼 상품 객체를 찾으세요.
// 힌트: 누적값(acc)의 price와 현재값(cur)의 price를 비교하세요.
const mostExpensive = products.reduce((acc, product) =>
  acc.price > product.price ? acc : product,
);

console.log(mostExpensive); // 예상 출력: { name: '노트북', price: 1200000 }
