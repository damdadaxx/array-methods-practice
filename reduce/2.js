// 문제 2: 배열에서 최댓값 찾기
// reduce를 사용하여 숫자 배열에서 가장 큰 값을 찾으세요.

const numbers = [5, 12, 3, 27, 8, 15, 1];

// TODO: reduce를 사용하여 numbers 배열에서 가장 큰 값을 찾으세요.
// 힌트: 누적값(acc)과 현재값(cur)을 비교하여 더 큰 값을 반환하세요.
const max = numbers.reduce((acc, num) => Math.max(acc, num), 0);

console.log(max); // 예상 출력: 27

17
20
47
