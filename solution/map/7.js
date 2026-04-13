const celsius = [0, 10, 20, 30, 100];

const fahrenheit = celsius.map((c) => c * 9 / 5 + 32);

console.log(fahrenheit); // [32, 50, 68, 86, 212]
