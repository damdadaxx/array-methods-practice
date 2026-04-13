const menu = ['아메리카노', '카페라떼', '카푸치노', '에스프레소'];

const numberedMenu = menu.map((item, index) => `${index + 1}. ${item}`);

console.log(numberedMenu);
// ['1. 아메리카노', '2. 카페라떼', '3. 카푸치노', '4. 에스프레소']
