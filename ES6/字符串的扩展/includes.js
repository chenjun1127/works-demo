// includes()：返回布尔值，表示是否找到了参数字符串。

let s = "hello world";
console.log(s.includes('o')); // true
console.log(s.includes('v')); // false

// startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
console.log(s.startsWith('hello'));
console.log(s.startsWith('heslo'));

//endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部

console.log(s.endsWith('ld'));
console.log(s.endsWith('ldd'));
