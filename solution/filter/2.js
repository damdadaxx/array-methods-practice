const words = ['나', '사과', '해', '바나나', '별', '프로그래밍', '달'];

const longWords = words.filter((word) => word.length >= 3);

console.log(longWords); // ['바나나', '프로그래밍']
