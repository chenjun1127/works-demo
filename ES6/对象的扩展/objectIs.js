/**
 * ES5比较两个值是否相等，只有== === ，他们都会自动转换数据类型 后者的NaN不等自身，以及+0 ！=
 * -0 .Object.is 用来比较俩个值是否严格相等
 */
console.log(Object.is('foo', 'foo')); // true
console.log(Object.is({}, {})); //false
console.log(Object.is(+0, -0)); //false
console.log(Object.is(NaN, NaN)); // true

// es5实现Object.is
Object.defineProperty(Object, 'is', {
    value: function(x, y) {
        if (x === y) {
            return x != 0 || 1 / x === 1 / y
        }
        return x !== x && y !== y
    },
    configurable: true,
    enumerable: false,
    writable: true
})