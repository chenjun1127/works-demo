/**
 * ES6在Number对象上，新提供了Number.isFinite()用来检查一个数值是否有限的(finite)
 */
console.log(Number.isFinite(15)); // true
console.log(Number.isFinite(NaN));// false
console.log(Number.isFinite(Infinity));// false
console.log(Number.isFinite(-Infinity));// false
console.log(Number.isFinite('foo'));// false
console.log(Number.isFinite(true));// false

/**
 * isNaN() 用来检查一个值是否为NaN
 */

console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(15)); // false
console.log(Number.isNaN("15"));// false
console.log(Number.isNaN(true));// false
console.log(Number.isNaN([]));// false
console.log(Number.isNaN(9+NaN));// true
