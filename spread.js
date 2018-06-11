let a = [{a: 'test'}, 'string'];

let b = [...a];

b[0].a = 111;
b[1] = '111';

console.log('a - ', a);
console.log('b - ', b);