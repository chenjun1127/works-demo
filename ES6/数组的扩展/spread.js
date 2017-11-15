/**
 * 扩展运算符(spread)是三个点... 它好比rest参数的逆运算，讲一个数组转化为用逗号分隔的参数序列
 */

console.log(...[1, 2, 3]); // 1 2 3

console.log(1, ...[2, 3, 4], 5); // 1 2 3 4 5

function add(x, y) {
    console.log(x + y)
}
add(...[1, 2]); // 3
var x = 1;
const arr = [
    ...(x > 0 ? ['a', 'b'] : ['1', '2']),
    'b',
];
console.log(arr); // [ 'a', 'b', 'b' ]

/**
 * 扩展运算符的应用
 */
console.log('===============扩展运算符的应用====================');
console.log('1.=======复制数组========');
const a1 = [1, 2];
const a2 = a1;
a2[0] = 0;
console.log(a1); // 0,2
const a3 = [...a1]; // 或者  [...a3] = a1
a3[0] = 1;
console.log(a3); // 1,2
console.log('2.=======合并数组========');
console.log([...a1, ...a2, ...a3]); // [ 0, 2, 0, 2, 1, 2 ]
console.log('3.=======与解构赋值结合========');
const [first, ...rest] = [1, 2, 3, 4, 5];
console.log(first, rest); // 1 [ 2, 3, 4, 5 ]
console.log('4.=======字符串========');
console.log([...'hello']);
console.log('5.=======实现了 Iterator 接口的对象(待.....)========');
console.log('6.=======Map 和 Set 结构，Generator 函数(待.....)========');