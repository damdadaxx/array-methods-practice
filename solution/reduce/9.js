const students = [
  { name: '김민수', grade: 1 },
  { name: '이서연', grade: 2 },
  { name: '박지훈', grade: 1 },
  { name: '최유진', grade: 3 },
  { name: '정하늘', grade: 2 },
  { name: '한소율', grade: 1 },
];

const grouped = students.reduce((acc, student) => {
  if (!acc[student.grade]) {
    acc[student.grade] = [];
  }
  acc[student.grade].push(student.name);
  return acc;
}, {});

console.log(grouped);
