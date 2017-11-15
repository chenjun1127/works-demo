/**
 * es6不提供私有函数 只能通过变通模拟实现
 */

//  ①命名上加以区别
class Widget {
    // 公有
    foo(foo) {
        console.log(foo);
    }
    // 私有
    _bar(bar) {
        console.log(bar);
    }
}
// 但在类的外部扔可以调用
const widget = new Widget();
widget._bar('hi'); // hi

// ②索性将私有方法移除模块
class Widget1 {
    foo(baz) {
        bar.call(this, baz);
    }
}

function bar(baz) {
    console.log(baz);
}
const widget1 = new Widget1();
widget1.foo('hi'); // hi
//widget1.bar('hi') // TypeError: widget1.bar is not a function

// ③利用Symbol值的唯一性，将私有方法的名字命名为一个Symbol值。
const private = Symbol('private');
class Widget2 {
    foo(baz) {
        this[private](baz)
    }
    [private](baz) {
        console.log(baz)
    }
}

const widget2 = new Widget2();
widget2.foo('hi');

// ES6同样不支持私有属性，有一个提案是#在属性名前