// 문제 5: 문자열 합치기
// reduce를 사용하여 문자열 배열을 하나의 문장으로 합치세요.

const words = ["자바스크립트", "배열", "메서드", "연습"];

// TODO: reduce를 사용하여 words를 공백으로 연결한 하나의 문자열 sentence를 만드세요.
const sentence = words.reduce((acc, cur) => (acc += ` ${cur}`), []);

console.log(sentence); // 예상 출력: '자바스크립트 배열 메서드 연습'
