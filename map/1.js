// 문제 1: 숫자 두 배로 만들기
// map을 사용하여 배열의 모든 숫자를 2배로 만드세요.

const numbers = [1, 2, 3, 4, 5];

// TODO: map을 사용하여 numbers의 각 요소를 2배로 만든 새 배열 doubled를 만드세요.
const doubled = numbers.map((num) => num * 2);

console.log(doubled); // 예상 출력: [2, 4, 6, 8, 10]
