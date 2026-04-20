// 문제 8: 배열 요소를 HTML 태그로 감싸기
// map을 사용하여 각 항목을 <li> 태그로 감싼 문자열 배열을 만드세요.

const items = ["사과", "바나나", "포도"];

// TODO: map을 사용하여 각 항목을 <li> 태그로 감싼 새 배열 listItems를 만드세요.
const listItems = items.map((item) => `<li>${item}</li>`);

console.log(listItems);
// 예상 출력: ['<li>사과</li>', '<li>바나나</li>', '<li>포도</li>']
