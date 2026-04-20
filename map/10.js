// 문제 10: 객체 배열의 형태 변환하기
// map을 사용하여 객체 배열의 구조를 변환하세요.

const users = [
  { firstName: "민수", lastName: "김", age: 25 },
  { firstName: "서연", lastName: "이", age: 22 },
  { firstName: "지훈", lastName: "박", age: 30 },
];

// TODO: map을 사용하여 아래 형태의 새 객체 배열 formatted를 만드세요.
// { fullName: '김민수', age: 25 } 형태로 변환하세요.
const formatted = users.map((user) => ({
  fullName: `${user.lastName}${user.firstName}`,
  age: user.age,
}));

console.log(formatted);
// 예상 출력:
// [
//   { fullName: '김민수', age: 25 },
//   { fullName: '이서연', age: 22 },
//   { fullName: '박지훈', age: 30 }
// ]
