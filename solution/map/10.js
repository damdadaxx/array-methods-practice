const users = [
  { firstName: '민수', lastName: '김', age: 25 },
  { firstName: '서연', lastName: '이', age: 22 },
  { firstName: '지훈', lastName: '박', age: 30 },
];

const formatted = users.map((user) => ({
  fullName: `${user.lastName}${user.firstName}`,
  age: user.age,
}));

console.log(formatted);
