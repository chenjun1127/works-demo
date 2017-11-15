/**
 * 一个数据结构只要部署了Symbol.iterator属性，就会被视为具有iterator接口，
 * 就可以for of循环遍历他的成员。
 */

//  数组 
const arr = ['red', 'green', 'blue']

for (let v of arr) {
    console.log(v) // red green blue
}
arr.foo = 'hello world'
const obj = {}

obj[Symbol.iterator] = arr[Symbol.iterator].bind(arr)
for (let v of obj) {
    console.log(v); // red green blue
}
// for...in循环读取键名，for...of循环读取键值
for (let v in arr) {
    console.log(v) // 0 1 2 foo
}

//  set map

var engines = new Set(["Gecko", "Trident", "Webkit", "Webkit"]);
for (var e of engines) {
    console.log(e);
}
// Gecko
// Trident
// Webkit
var es6 = new Map();
es6.set("edition", 6);
es6.set("committee", "TC39");
es6.set("standard", "ECMA-262");
for (var [name, value] of es6) {
    console.log(name + ": " + value);
}
// Map 结构遍历时，返回的是一个数组，该数组的两个成员分别为当前 Map 成员的键名和键值。
// edition: 6
// committee: TC39
// standard: ECMA - 262


// 对象
//对于普通的对象，for...of结构不能直接使用，会报错，必须部署了 Iterator 接口后才能使用。但是，这样情况下，for...in循环依然可以用来遍历键名。
// for in 可以用  for of 会报错
// ①Object.keys方法 ②Generator