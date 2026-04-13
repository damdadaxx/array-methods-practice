const numbers = [1, 2, 3, 4, 5, 6];

numbers.forEach((num) => {
  if (num % 2 === 0) {
    console.log(`${num}은(는) 짝수입니다.`);
  } else {
    console.log(`${num}은(는) 홀수입니다.`);
  }
});
