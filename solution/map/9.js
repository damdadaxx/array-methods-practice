const prices = [1000, 5500, 12000, 890, 45000];

const formatted = prices.map((price) => `${price.toLocaleString()}원`);

console.log(formatted); // ['1,000원', '5,500원', '12,000원', '890원', '45,000원']
