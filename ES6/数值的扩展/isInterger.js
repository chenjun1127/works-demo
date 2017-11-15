/**
 * Number.isInteger() 用来判断一个值是否为整数。
 */
console.log(Number.isInteger(25)); // true
console.log(Number.isInteger(25.0)); // true
console.log(Number.isInteger(25.1)); // false
console.log(Number.isInteger('15')); // false
console.log(Number.isInteger(true)); // false