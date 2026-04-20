// 문제 1: 배열의 총합 구하기
// reduce를 사용하여 숫자 배열의 총합을 구하세요.

const numbers = [10, 20, 30, 40, 50];

// TODO: reduce를 사용하여 numbers 배열의 총합을 구하세요.
// 힌트: reduce(콜백함수, 초기값) 형태로 사용합니다.
const total = numbers.reduce((acc, num) => (acc += num), 0);

console.log(total); // 예상 출력: 150
