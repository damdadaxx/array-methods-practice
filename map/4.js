// 문제 4: 문자열 배열을 대문자로 변환하기
// map을 사용하여 영어 단어 배열을 모두 대문자로 변환하세요.

const words = ["hello", "world", "javascript", "array"];

// TODO: map을 사용하여 모든 단어를 대문자로 변환한 새 배열 uppercased를 만드세요.
// 힌트: 문자열의 toUpperCase() 메서드를 사용하세요.
const uppercased = words.map((word) => word.toUpperCase());

console.log(uppercased); // 예상 출력: ['HELLO', 'WORLD', 'JAVASCRIPT', 'ARRAY']
