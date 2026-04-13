const students = [
  { name: '김민수', score: 85 },
  { name: '이서연', score: 42 },
  { name: '박지훈', score: 70 },
  { name: '최유진', score: 55 },
];

const results = students.map((student) => ({
  ...student,
  pass: student.score >= 60,
}));

console.log(results);
