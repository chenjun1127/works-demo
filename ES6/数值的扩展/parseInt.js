/**
 * ES6将全局方法parseInt() 和 parseFloat(),移植到Number对象上面，行为完全保持不变
 */

console.log(Number.parseInt('12.34')); // 12
console.log(Number.parseFloat('61.51##')); // 61.51
console.log(Number.parseInt === parseInt); // true
console.log(Number.parseFloat === parseFloat); // true