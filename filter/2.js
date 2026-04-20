// 문제 2: 긴 문자열만 필터링하기
// filter를 사용하여 글자 수가 3자 이상인 문자열만 골라내세요.

const words = ["나", "사과", "해", "바나나", "별", "프로그래밍", "달"];

// TODO: filter를 사용하여 글자 수가 3자 이상인 단어만 담은 새 배열 longWords를 만드세요.
const longWords = words.filter((word) => word.length >= 3);

console.log(longWords); // 예상 출력: ['바나나', '프로그래밍']
