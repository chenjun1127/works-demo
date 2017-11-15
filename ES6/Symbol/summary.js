/**
 * 因为ES5的对象属性名是字符串，这容易造成属性名的冲突。ES6引入了一种新的原始数据类型Symbol,
 * 表示独一无二的值，它是js中第七种数据类型，前6种是undefined、null、boolean、String、Number、
 * Object。Symbol函数生成。
 */

let s = Symbol()
console.log(typeof s) // symbol

// Symbol函数的参数只是表示对当前 Symbol 值的描述，因此相同参数的Symbol函数的返回值是不相等的
let s1 = Symbol()
let s2 = Symbol()

console.log(s1 === s2)

let s3 = Symbol('foo') //false
let s4 = Symbol('foo') // false

console.log(s3 === s4)

// Symbol 值不能与其他类型的值进行运算，会报错

let sym = Symbol('my symbol')
// console.log("hello!" + sym) TypeError: Cannot convert a Symbol value to a string

/**
 * Symbol值可以转换为字符串，也可以转化为布尔值，但不能转换为数值
 */
console.log(Boolean(sym)) //true