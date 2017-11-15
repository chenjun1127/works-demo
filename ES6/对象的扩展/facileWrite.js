/**
 * ES6允许直接写入变量和函数，作为对象的属性和方法。
 */
const foo = 'bar';
const baz = { foo };
console.log(baz); // { foo: 'bar' }


function f(x, y) {
    return { x, y }
}
console.log(f(1, 2)); // { x: 1, y: 2 }


const o = {
    method() {
        return "hello";
    }
}
console.log(o); // { method: [Function: method] }