//   字符串是一个类似数组的对象，也具有Ierator接口

var someString = 'hi';
console.log(typeof someString[Symbol.iterator]) // function

var iterator = someString[Symbol.iterator]()

console.log(iterator.next()) // { value: 'h', done: false }
console.log(iterator.next()) // { value: 'i', done: false }
console.log(iterator.next()) // { value: undefined, done: true }