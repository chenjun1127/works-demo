/**
 * Object.assign 方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象
 */

const target = {
    a: 1
};
const source1 = {
    b: 2
};
const source2 = {
    c: 3
};

Object.assign(target, source1, source2)
console.log(target) // { a: 1, b: 2, c: 3 }

// 如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性

const source3 = {
    a: 'd'
};
Object.assign(target, source3);
console.log(target); //{ a: 'd', b: 2, c: 3 }

console.log("===========注意点==========");
console.log("====(1)浅拷贝====");
const obj1 = {
    a: {
        b: 1
    }
};
const obj2 = Object.assign({}, obj1);
console.log(obj2); // { a: { b: 1 } } 拷贝得到的事对象的引用
obj1.a.b = 2;
console.log(obj2); // { a: { b: 2 } }
console.log("====(2)同名属性的替换====");

const obj3 = {
    a: {
        b: 'c',
        d: 'e'
    }
};
const obj4 = {
    a: 'hello'
};

Object.assign(obj3, obj4);
console.log(obj3); // { a: 'hello' }

console.log("====(3)数组的处理====");
// 可以处理数组，但会把数组视为对象。
console.log(Object.assign([
    1, 2, 3
], [4, 5])) //[ 4, 5, 3 ]
console.log("====(4)取值函数的处理====");

// Object.assign只能进行值的复制，如果要复制的值是一个取值函数，那么将求值后再复制。
const source = {
    get foo() {
        return 1
    }
};
const target2 = {};

Object.assign(target2, source);
console.log(target2); // { foo: 1 }

console.log("===========常见用途==========");
console.log("====(1)为对象添加属性====");

class Point {
    constructor(x, y) {
        Object.assign(this, { x, y })
    }
};
// 上面方法通过Object.assign方法，将x属性和y属性添加到Point类的对象实例。
const point = new Point('a', 'b');
console.log(point); // Point { x: 'a', y: 'b' }

console.log("====(2)为对象添加方法====");
Object.assign(Point.prototype, {
    someMethod(arg1, arg2) {
        console.log('someMethod')
    },
    anotherMethod() {
        console.log('anotherMethod')
    }
});

point.anotherMethod(); //anotherMethod
point.someMethod(); // someMethod

 