const scores = [80, 90, 70, 85, 95];

const average = scores.reduce((acc, cur) => acc + cur, 0) / scores.length;

console.log(average); // 84
