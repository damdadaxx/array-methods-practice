const words = ['사과', '프로그래밍', '자바스크립트', '코딩', '배열'];
let longest = '';

words.forEach((word) => {
  if (word.length > longest.length) {
    longest = word;
  }
});

console.log(longest); // 자바스크립트
