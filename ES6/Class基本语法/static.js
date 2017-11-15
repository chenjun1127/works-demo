/**
 * 类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个
 * 方法前加上static关键字 就表示该方法不会被实例继承 而是直接通过类来调用
 * 这就称为“静态方法”
 * 注意：静态方法只能在静态方法中调用,不能再实例方法中调用。
 */

class A {
    // static name = "jone" es6报错   //因为ES6明确规定，Class内部只有静态方法，没有静态属性,所以ES6在类中定义静态属性都是错误的。 
    static classMethod() {
        this.bar();
    }
    static bar() {
        console.log('hi');
    }
}
A.classMethod(); //hi

// 父类的静态方法，可以被子类继承。

class B extends A {
    constructor() {
        super()
        this.name = "Jone"
    }
    print() {
        console.log(this.name, this);
    }
}

var c = new B();
console.log(c.print());
B.classMethod();