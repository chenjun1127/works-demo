/**
 * Generator函数返回的遍历器对象，都有一个throw方法，可以在函数体外抛出错误
 * 然后在Generator函数体内捕获
 */


var g = function*() {
    try {
        yield;
    } catch (e) {
        console.log('内部捕获', e)
    }
}

var i = g()
i.next()

try {
    i.throw('a')
    i.throw('b')
} catch (e) {
    console.log('外部捕获', e)
}
// 内部捕获 a Generator函数内部catch已经执行过了
// 外部捕获 b

// throw方法可以接受一个参数，该参数会被catch语句接受，建议抛出Error对象的实例

var g2 = function*() {
    try {
        yield
    } catch (e) {
        console.log(e)
    }
}
var i2 = g2()
i2.next()
// i2.throw(new Error('出错了！')) //Error: 出错了！