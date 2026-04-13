const people = [
  { name: '김민수', age: 25, hobby: '코딩' },
  { name: '이서연', age: 17, hobby: '코딩' },
  { name: '박지훈', age: 30, hobby: '게임' },
  { name: '최유진', age: 22, hobby: '코딩' },
  { name: '정하늘', age: 19, hobby: '독서' },
  { name: '한소율', age: 28, hobby: '코딩' },
];

const result = people.filter((person) => person.age >= 20 && person.hobby === '코딩');

console.log(result);
