/**
 * ES6在Number对象上面，新增一个极小的常量Number.EPSILON
 */

console.log(Number.EPSILON); // 2.220446049250313e-16
console.log(Number.EPSILON.toFixed(20)); // 0.00000000000000022204

/**
 * 引入的目的在于浮点数计算，设置一个误差范围。我们知道浮点数计算是不准确的
 * Number.EPSILON的实质是一个可以接受的误差范围。
 */

console.log(0.1 + 0.2); // 0.30000000000000004
console.log((0.1 + 0.2) < Number.EPSILON); //false
console.log((0.1 + 0.2 - 0.3) < Number.EPSILON); //true