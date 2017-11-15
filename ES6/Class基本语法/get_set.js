/**
 * 在类的内部可以使用get和set关键字，对于某个属性设置存值函数和取值函数
 */

class MyClass {
    constructor() {
        //....
    }
    get prpos() {
        return 'getter'
    }
    set prpos(value) {
        console.log('setter:' + value);
    }
}

let inst = new MyClass();

inst.prpos = 123; //setter: 123
console.log(inst.prpos) // getter


// 某个方法之前加上*号 就表示Generator
class Foo {
    constructor(...args) {
            this.args = args;
        }
        *[Symbol.iterator]() {
            for (let arg of this.args) {
                yield arg;
            }
        }
}

for (let x of new Foo('hello', 'world')) {
    console.log(x); // hello world
}