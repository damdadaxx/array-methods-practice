// 문제 4: 특정 값 제외하기
// filter를 사용하여 배열에서 특정 값을 제외한 새 배열을 만드세요.

const numbers = [1, 2, 3, 4, 5, 3, 6, 3, 7];

// TODO: filter를 사용하여 numbers에서 3을 제외한 새 배열 without3을 만드세요.
const without3 = numbers.filter((num) => num !== 3);

console.log(without3); // 예상 출력: [1, 2, 4, 5, 6, 7]
