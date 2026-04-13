const users = [
  { id: 1, name: '김민수' },
  { id: 2, name: '이서연' },
  { id: 3, name: '박지훈' },
];

const userMap = users.reduce((acc, user) => {
  acc[user.id] = user.name;
  return acc;
}, {});

console.log(userMap); // { 1: '김민수', 2: '이서연', 3: '박지훈' }
