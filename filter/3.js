// 문제 3: 성인만 필터링하기
// filter를 사용하여 나이가 18세 이상인 사람만 골라내세요.

const people = [
  { name: "김민수", age: 25 },
  { name: "이서연", age: 16 },
  { name: "박지훈", age: 30 },
  { name: "최유진", age: 14 },
  { name: "정하늘", age: 20 },
];

// TODO: filter를 사용하여 나이가 18세 이상인 사람만 담은 새 배열 adults를 만드세요.
const adults = people.filter((person) => person.age >= 18);

console.log(adults);
// 예상 출력:
// [
//   { name: '김민수', age: 25 },
//   { name: '박지훈', age: 30 },
//   { name: '정하늘', age: 20 }
// ]
