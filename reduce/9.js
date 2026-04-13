// 문제 9: 그룹화하기
// reduce를 사용하여 학생들을 학년별로 그룹화하세요.

const students = [
  { name: '김민수', grade: 1 },
  { name: '이서연', grade: 2 },
  { name: '박지훈', grade: 1 },
  { name: '최유진', grade: 3 },
  { name: '정하늘', grade: 2 },
  { name: '한소율', grade: 1 },
];

// TODO: reduce를 사용하여 학년(grade)을 키로, 해당 학년 학생 이름 배열을 값으로 하는 객체 grouped를 만드세요.
const grouped = undefined;

console.log(grouped);
// 예상 출력:
// {
//   1: ['김민수', '박지훈', '한소율'],
//   2: ['이서연', '정하늘'],
//   3: ['최유진']
// }
