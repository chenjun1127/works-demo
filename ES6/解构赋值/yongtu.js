/**
 * 交换变量的值
 */
let x = 1;
let y = 2;

[x, y] = [y, x]

console.log(x, y); // 2 1

/**
 * 从函数返回多个值
 */

function example() {
    return [1, 2, { foo: 1, bar: 2 }]
}
let [a, b, { foo }] = example();

console.log(a, b, foo); // 1 2 1




/**
 * 函数参数的定义
 */

let arr = [1, 2, 3]

function f([x, y, z]) {
    console.log(x, y, z);
}
f(arr); // 1 2 3


/**
 * 提取JSON数据
 */

let jsonData = {
    id: 42,
    status: "OK",
    data: [867, 5309]
};

let { id, status, data: number } = jsonData;

console.log(id, status, number);


/**
 *  函数参数的默认值
 */

/**
 * 遍历Map结构
 */

var map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let [key, value] of map) {
    console.log(key + " is " + value);
}