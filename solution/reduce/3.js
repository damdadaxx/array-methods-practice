const fruits = ['사과', '바나나', '사과', '포도', '바나나', '사과', '딸기'];

const fruitCount = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(fruitCount);
// { '사과': 3, '바나나': 2, '포도': 1, '딸기': 1 }
