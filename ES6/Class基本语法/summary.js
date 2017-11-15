/**
 * javascript语言中，生成实例对象的传统方法是通过构造函数。
 * ES6后 通过Class 里面有个constructor方法，这就是构造函数，而this关键字则代表实例对象
 * 事实上类的所有方法都定义在类的peototype属性上面
 * 类的实例上面调用方法，其实就是调用原型上的方法
 * Object.assign方法可以很方便地一次向类添加多个方法。
 */

//  古老的写法
function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.toString = function() {
    return '(' + this.x + ', ' + this.y + ')';
};

var p = new Point(1, 2);
console.log(p.toString()) // (1, 2)

// ES6写法
class NewPoint {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    toString() {
        return `(${this.x}, ${this.y})`
    }
}
var Newp = new NewPoint(1, 2);
console.log(Newp.toString()) //(1, 2)

// new命令生成对象实例时，自动调用该方法。一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加
// class Point1 {
// }

// 等同于
class Point1 {
    constructor() {}
} // 默认返回实例对象即this  完全可以指定返回另外一个对象。


// 实例的属性除非显式定义在其本身（即定义在this对象上），否则都是定义在原型上
console.log(Newp.hasOwnProperty('x')) //true
console.log(Newp.hasOwnProperty('y')) // true
console.log(Newp.hasOwnProperty('toString')) // false
console.log(Newp.__proto__.hasOwnProperty('toString')) // true

/**
 * 与函数一样，类也可以使用表达式的形式定义
 * 类的名字是MyClass而不是Me，Me只在 Class 的内部代码可用，指代当前类
 */

const MyClass = class Me {
    getClassName() {
        return Me.name;
    }
};
let inst = new MyClass();
console.log(inst.getClassName()) // Me

// 采用class表达式，可以写出立即执行的class

const person = new class {
    constructor(name) {
        this.name = name
    }
    sayName() {
        console.log(this.name)
    }
}('lihaozecq')

person.sayName() //lihaozecq
// es6 class 不存在变量提升