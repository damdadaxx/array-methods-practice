const words = ['자바스크립트', '배열', '메서드', '연습'];

const sentence = words.reduce((acc, cur) => acc + ' ' + cur);

console.log(sentence); // '자바스크립트 배열 메서드 연습'
