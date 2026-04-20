// 문제 4: 배열의 평균 구하기
// reduce를 사용하여 숫자 배열의 평균을 구하세요.

const scores = [80, 90, 70, 85, 95];

// TODO: reduce를 사용하여 scores 배열의 평균을 구하세요.
// 힌트: 먼저 총합을 구한 뒤, 배열의 길이로 나누세요.
const average = scores.reduce((acc, num) => acc + num, 0) / scores.length;

console.log(average); // 예상 출력: 84
