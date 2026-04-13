const people = [
  { name: '김민수', age: 25 },
  { name: '이서연', age: 16 },
  { name: '박지훈', age: 30 },
  { name: '최유진', age: 14 },
  { name: '정하늘', age: 20 },
];

const adults = people.filter((person) => person.age >= 18);

console.log(adults);
// [
//   { name: '김민수', age: 25 },
//   { name: '박지훈', age: 30 },
//   { name: '정하늘', age: 20 }
// ]
