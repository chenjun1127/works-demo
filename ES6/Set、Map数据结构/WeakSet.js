/**
 * WeakSet结构与Set类似，区别在于它成员只能是对象，而不是其他类型的值
 */

const ws = new WeakSet();
const obj = {};
const foo = {};

ws.add(global);
ws.add(obj);

console.log(ws.has(global)); // true
console.log(ws.has(foo));    // false

console.log(ws.delete(global)); 
console.log(ws.has(global));    // false