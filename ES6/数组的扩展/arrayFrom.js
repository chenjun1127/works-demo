/**
 * Array.from方法用于将俩类对象转为真正的数组：类似数组的对象和可遍历的对象
 */

let arrayLike = { '0': 'a', '1': 'b', '2': 'c', length: 3 };
let arr2 = Array.from(arrayLike);
console.log(arr2); //[ 'a', 'b', 'c' ]
console.log(Array.from('hello')); // [ 'h', 'e', 'l', 'l', 'o' ]

/**
 * Array.from还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值
 * 放入返回的数组
 */

var arr = Array.from([1, 2, 3], (x) => { return x * x });
console.log(arr); // [ 1, 4, 9 ]