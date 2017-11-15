/**
 * ES6 提供了新的数据结构Set.它类似于数组，但是成员的值是唯一的，没有重复的值
 */

const s = new Set();
[2, 3, 4, 5, 6, 2, 2].forEach(x => s.add(x));
for (let i of s) {
    console.log(i)
}
/*  
    2 
    3
    4
    5
    6
*/
// 可以接受一个数组作为参数，用来初始化

const items = new Set([1, 2, 3, 4, 5, 11, 2, 3])
console.log(items.size) // 6


// 向 Set 加入值的时候，不会发生类型转换

let set = new Set();
let a = NaN;
let b = NaN;
set.add(a)
setsadd(b)
set.add('1')
set.add(1)
console.log(set) // Set { NaN, '1', 1 }

// 两个对象总是不相等的。

let set1 = new Set()
set1.add({}) // 1
console.log(set1.size)
set1.add({}) // 2
console.log(set1.size)



/**
 * Set 实例的属性和方法 
 */

/**
 * Set.prototype.constructor： 构造函数， 默认就是Set函数。
 * Set.prototype.size： 返回Set实例的成员总数。
 * add(value)： 添加某个值， 返回Set结构本身。
 * delete(value)： 删除某个值， 返回一个布尔值， 表示删除是否成功。
 * has(value)： 返回一个布尔值， 表示该值是否为Set的成员。
 * clear()： 清除所有成员， 没有返回值。
 */

let set2 = new Set()
set2.add(1).add(2).add(2)
console.log(set2.size) // 2
console.log(set2.has(1)) // true
console.log(set2.has('2')) // flase
set2.delete(2)
console.log(set2.has(2)) // flase

// Array.from方法可以将 Set 结构转为数组。

const items = new Set([1, 2, 3, 4, 5])
const array = Array.from(items);
console.log(array) // [ 1, 2, 3, 4, 5 ]
/**
 * Set结构的实例有四个遍历方法，可以用于遍历成员
 * keys() values() entries() forEeach()
 */

console.log("(1) keys() valus() entries()")


for (let item of items.keys()) {
    console.log(item)
}

for (let item of items.entries()) {
    console.log(item)
}
/*
[1, 1]
[2, 2]
[3, 3]
[4, 4]
[5, 5]
*/
console.log("(2) forEach()")

let set3 = new Set(['red', 'green', 'blue'])
set3.forEach((value, key) => console.log(key + ':' + value))
/**
 * red: red
 * green: green
 * blue: blue
 */
console.log("(3) 应用")