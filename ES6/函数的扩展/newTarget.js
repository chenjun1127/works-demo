/**
 * es5通过instance运算符判断函数到底哪一种方式调用，但通过call(),apply(),bind()会判断失效
 * es6通过new.target 判断 通过new实例后 new.target指向正在执行的函数
 */

function fn() {
    if (new.target === fn) {
        this.foo = 'hello'
    } else {
        throw new Error('该函数只能通过new调用')
    }
}

//fn() // Error: 该函数只能通过new调用
// fn.call(new fn()) // Error: 该函数只能通过new调用
new fn()