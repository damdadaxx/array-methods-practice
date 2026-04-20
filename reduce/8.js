// 문제 8: 배열을 객체로 변환하기
// reduce를 사용하여 배열을 id를 키로 하는 객체로 변환하세요.

const users = [
  { id: 1, name: "김민수" },
  { id: 2, name: "이서연" },
  { id: 3, name: "박지훈" },
];

// TODO: reduce를 사용하여 id를 키, name을 값으로 하는 객체 userMap을 만드세요.
const userMap = users.reduce((acc, user) => {
  acc[user.id] = user.name;
  return acc;
}, {});

console.log(userMap);
// 예상 출력: { 1: '김민수', 2: '이서연', 3: '박지훈' }
