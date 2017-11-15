/**
 * Object.getOwnPropertySymbols方法可以获取指定对象的所有Symbol属性名
 * 返回一个数组，成员是当前对象的所有用作属性名的Symbol值
 */
const obj = {};
let a = Symbol('a');
let b = Symbol('b');
obj[a] = "hello";
obj[b] = 'world';
const objectSymbol = Object.getOwnPropertySymbols(obj);
console.log(objectSymbol); // [ Symbol(a), Symbol(b) ]

// Reflect.ownKeys方法可以返回所有类型的键名，包括常规键名和 Symbol 键名。

obj.name = 'lihaozecq';

console.log(Reflect.ownKeys(obj)); // [ 'name', Symbol(a), Symbol(b) ]

/**
 * Symbol.for()      Symbol.keyFor 返回一个已登记的 Symbol 类型值的key
 */

let s1 = Symbol.for('foo');
let s2 = Symbol.for('foo');
console.log(s1 === s2) // true


console.log(Symbol.keyFor(s1)); // foo