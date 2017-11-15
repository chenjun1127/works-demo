/**
 * rray.prototype.includes方法返回一个布尔值，表示某个数组是否包含给定的值，
 * 与字符串的includes方法类似
 */

console.log([1, 2, 3].includes(2)); //true
console.log([1, 2, 3].includes(4)); // false
console.log([1, 2, NaN].includes(NaN)); //true