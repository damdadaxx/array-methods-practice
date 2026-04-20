// 문제 6: 2차원 배열을 1차원으로 펼치기
// reduce를 사용하여 2차원 배열을 1차원 배열로 펼치세요.

const nested = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
];

// TODO: reduce를 사용하여 nested를 1차원 배열 flat으로 만드세요.
// 힌트: concat() 메서드 또는 스프레드 연산자(...)를 사용하세요.
const flat = nested.reduce((acc, cur) => [...acc, ...cur]);

console.log(flat); // 예상 출력: [1, 2, 3, 4, 5, 6, 7, 8]
