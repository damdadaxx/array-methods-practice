// 문제 2: 객체 배열에서 이름만 추출하기
// map을 사용하여 객체 배열에서 이름만 뽑아 새 배열을 만드세요.

const users = [
  { name: "김민수", age: 25 },
  { name: "이서연", age: 22 },
  { name: "박지훈", age: 30 },
  { name: "최유진", age: 28 },
];

// TODO: map을 사용하여 users에서 이름(name)만 담은 새 배열 names를 만드세요.
const names = users.map((user) => user.name);

console.log(names); // 예상 출력: ['김민수', '이서연', '박지훈', '최유진']
