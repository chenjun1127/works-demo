/**
 * Generator 函数返回的遍历对象还有一个return方法，可以返回给定的值
 * 并且终止遍历Gerator函数
 */

function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

var g = gen();

g.next() // { value: 1, done: false }
g.return('foo') // { value: "foo", done: true }
g.next() // { value: undefined, done: true }
// 遍历器G调用return方法后，返回值value属性就是return方法的参数foo
// 并且函数的遍历就终止了，返回值的done属性为true，以后再调用next done总是返回true
// return方法调用时，不提供参数，则返回值的value属性为undefined。

// 如果Generator函数内部有try...finally代码块，那么return方法会推迟到finally代码块在执行

/**
 * next() throw return共同点
 */
// 。它们的作用都是让 Generator 函数恢复执行，并且使用不同的语句替换yield表达式。

// next()是将yield表达式替换成一个值
const g2 = function*(x, y) {
    let result = yield x + y
    return result
}
const gen1 = g2(1, 2)
console.log(gen1.next()) //{ value: 3, done: false }
console.log(gen1.next(1)) //{ value: 1, done: true }
// next(1)方法就相当于将yield表达式替换成一个值1。如果next方法没有参数，就相当于替换成undefined。

// throw是将yield表达式替换成一个throw语句
gen1.throw(new Error('出错了'))
// 相当于将 let result = yield x + y
// 替换成 let result = throw(new Error('出错了'));

//return()是将yield表达式替换成一个return语句。