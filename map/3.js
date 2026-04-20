// 문제 3: 가격에 부가세 포함하기
// map을 사용하여 상품 가격에 10% 부가세를 포함한 새 배열을 만드세요.

const prices = [1000, 2000, 3000, 5000, 10000];

// TODO: map을 사용하여 각 가격에 10% 부가세를 더한 새 배열 pricesWithTax를 만드세요.
// 힌트: 부가세 포함 가격 = 원래 가격 * 1.1
const pricesWithTax = prices.map((price) => Math.floor(price * 1.1));

console.log(pricesWithTax); // 예상 출력: [1100, 2200, 3300, 5500, 11000]
