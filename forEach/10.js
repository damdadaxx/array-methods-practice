// 문제 10: 가장 긴 문자열 찾기
// forEach를 사용하여 배열에서 가장 긴 문자열을 찾으세요.

const words = ["사과", "프로그래밍", "자바스크립트", "코딩", "배열"];
let longest = "";

// TODO: forEach를 사용하여 words에서 가장 긴 문자열을 longest에 저장하세요.
// 힌트: 현재 단어의 length가 longest의 length보다 크면 longest를 업데이트하세요.
words.forEach((word) => {
  if (word.length > longest.length) {
    longest = word;
  }
});

console.log(longest); // 예상 출력: 자바스크립트
