function foo({ x, y = 5 } = { x: 2, y: 3 }) {
    console.log(x, y)
}
foo({}) // undefined 5
foo({ x: 1 }) // 1 5
foo({ x: 1, y: 4 }) // 1 4
foo() // 2 3

/**
 * 参数默认值的位置
 */

function f(x = 1, y) {
    console.log([x, y]);
}
f() // [ 1, undefined ]
f(2) // [ 2, undefined ]
//f(,1) // SyntaxError
f(undefined, 1) // [ 1, 1 ]
f(null, 2) // [ null, 2 ]

/**
 * 函数的length属性
 * 指定了默认值后，length属性将失真
 */
console.log((function(a) {}).length) // 1
console.log((function(a = 5) {}).length) // 0
console.log((function(a, b, c = 5) {}).length) // 2


/**
 * 作用域:一旦设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域，初始化时，
 * 作用域就会消失，
 */
let x = 1;

function zuo(y = x) {
    let x = 4;
    console.log(y);
}
zuo(2) // 2
zuo() // 1