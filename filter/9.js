// 문제 9: 두 가지 조건을 동시에 만족하는 필터링
// filter를 사용하여 나이가 20세 이상이면서 취미가 '코딩'인 사람만 골라내세요.

const people = [
  { name: "김민수", age: 25, hobby: "코딩" },
  { name: "이서연", age: 17, hobby: "코딩" },
  { name: "박지훈", age: 30, hobby: "게임" },
  { name: "최유진", age: 22, hobby: "코딩" },
  { name: "정하늘", age: 19, hobby: "독서" },
  { name: "한소율", age: 28, hobby: "코딩" },
];

// TODO: filter를 사용하여 나이 20세 이상 AND 취미가 '코딩'인 사람만 담은 새 배열 result를 만드세요.
const result = people.filter(
  (person) => person.age >= 20 && person.hobby === "코딩",
);

console.log(result);
// 예상 출력:
// [
//   { name: '김민수', age: 25, hobby: '코딩' },
//   { name: '최유진', age: 22, hobby: '코딩' },
//   { name: '한소율', age: 28, hobby: '코딩' }
// ]
