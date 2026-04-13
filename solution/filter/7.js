const words = ['사과', '바나나', '과자', '포도', '과일', '딸기', '과학'];

const result = words.filter((word) => word.includes('과'));

console.log(result); // ['사과', '과자', '과일', '과학']
