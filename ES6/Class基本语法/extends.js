/**
 * Class可以通过extends关键字实现继承，这比ES5通过原型链实现继承要方便很多
 */

class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    toString() {
        return this.x + ' ' + this.y
    }
}

class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y) //调用弗父类的constructor(x, y)
        this.color = color
    }
    toString() {
        console.log(this.color + ' ' + super.toString()) //调用父类的toString()
    }
}
let colorPoint = new ColorPoint(25, 8, 'green');
colorPoint.toString(); // green 25 8

/**
 * 子类的__proto__属性，表示构造函数的继承，总是指向父类。
 * 子类prototype属性的__proto__属性，表示方法的继承，总是指向父类的prototype属性。
 */
class A {

}
class B extends A {

}
console.log(B.__proto__ === A); //true
console.log(B.prototype.__proto__ === A.prototype); //true