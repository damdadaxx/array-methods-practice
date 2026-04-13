const scores = [55, 92, 78, 85, 60, 95, 88, 72, 100, 45];
let passCount = 0;

scores.forEach((score) => {
  if (score >= 80) {
    passCount++;
  }
});

console.log(`80점 이상: ${passCount}명`); // 80점 이상: 5명
