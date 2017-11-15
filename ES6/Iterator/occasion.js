/**
 * occasion 场合 调用Iterator接口的场合
 */


//解构赋值
let set = new Set().add('a').add('b').add('c')
let [x, y] = set
console.log(x, y) // a b
let [first, ...rest] = set
console.log(first, rest) // a ['b', 'c']


// 扩展运算符

let str = 'hello';
console.log([...str]) // [ 'h', 'e', 'l', 'l', 'o' ]

let arr = ['b', 'c']
console.log(['a', ...arr, 'd']) // [ 'a', 'b', 'c', 'd' ]


// yield

let generator = function* () {
  yield 1;
  yield* [2, 3, 4];
  yield 5;
}

var iterator = generator();
console.log(iterator.next()) // { value: 1, done: false }
console.log(iterator.next()) // { value: 2, done: false }
console.log(iterator.next()) // { value: 3, done: false }
console.log(iterator.next()) // { value: 4, done: false }
console.log(iterator.next()) // { value: 5, done: false }
console.log(iterator.next()) // { value: undefined, done: true }

// 其他场合
// 由于 数组的遍历会调用遍历器接口，所以任何接受数组作为参数的场合其实都可以调用遍历器接口

// for of 、 Array.form() 、 Map(), Set(), WeakMap(), WeakSet()、 Promise.all() 、Promise.race()

