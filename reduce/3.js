// 문제 3: 과일 개수 세기
// reduce를 사용하여 배열에서 각 과일이 몇 번 등장하는지 세세요.

const fruits = ["사과", "바나나", "사과", "포도", "바나나", "사과", "딸기"];

// TODO: reduce를 사용하여 각 과일의 등장 횟수를 객체로 만드세요.
// 힌트: 초기값으로 빈 객체 {}를 사용하세요.
// const fruitCount = fruits.reduce((acc, fruit, index) => {
//   if (acc[fruit]) {
//     acc[fruit] = acc[fruit] + 1;
//     return acc;
//   } else {
//     acc[fruit] = 1;
//     return acc;
//   }
// }, {});

const fruitCount = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(fruitCount);
// 예상 출력: { '사과': 3, '바나나': 2, '포도': 1, '딸기': 1 }
