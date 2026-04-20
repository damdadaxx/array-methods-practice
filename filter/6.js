// 문제 6: 특정 범위의 숫자 필터링하기
// filter를 사용하여 10 이상 50 이하인 숫자만 골라내세요.

const numbers = [5, 12, 3, 48, 67, 25, 8, 50, 99, 10];

// TODO: filter를 사용하여 10 이상 50 이하인 숫자만 담은 새 배열 inRange를 만드세요.
const inRange = numbers.filter((num) => num >= 10 && num <= 50);

console.log(inRange); // 예상 출력: [12, 48, 25, 50, 10]
