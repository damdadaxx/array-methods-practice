const students = [
  { name: '김민수', score: 85 },
  { name: '이서연', score: 92 },
  { name: '박지훈', score: 78 },
  { name: '최유진', score: 95 },
];

students.forEach((student) => {
  console.log(`${student.name}의 점수는 ${student.score}점입니다.`);
});
