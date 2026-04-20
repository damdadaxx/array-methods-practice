// 문제 6: 객체 배열에 새 속성 추가하기
// map을 사용하여 각 학생 객체에 합격 여부(pass) 속성을 추가하세요.

const students = [
  { name: "김민수", score: 85 },
  { name: "이서연", score: 42 },
  { name: "박지훈", score: 70 },
  { name: "최유진", score: 55 },
];

// TODO: map을 사용하여 각 학생에게 pass 속성을 추가한 새 배열 results를 만드세요.
// 60점 이상이면 pass: true, 미만이면 pass: false
// const results = students.map((student) => {
//   if (student.score >= 60) {
//     return { ...student, pass: true };
//   } else {
//     return { ...student, pass: false };
//   }
// });

// refactor: 객체 리터럴 {} 와 함수 몸체 {} 의 구분
const results = students.map((student) => ({
  ...student,
  pass: student.score >= 60,
}));

console.log(results);
// 예상 출력:
// [
//   { name: '김민수', score: 85, pass: true },
//   { name: '이서연', score: 42, pass: false },
//   { name: '박지훈', score: 70, pass: true },
//   { name: '최유진', score: 55, pass: false }
// ]
