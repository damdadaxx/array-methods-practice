const users = [
  { name: '김민수', age: 25 },
  { name: '이서연', age: 22 },
  { name: '박지훈', age: 30 },
  { name: '최유진', age: 28 },
];

const names = users.map((user) => user.name);

console.log(names); // ['김민수', '이서연', '박지훈', '최유진']
