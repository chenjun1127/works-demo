/**
 * Generator函数是ES6提供的一种异步编程解决方案，语法行为与传统函数完全不同。
 * 形式上，Generator函数是一个普通函数，但有俩个特征。一是，function关键字与函数名之间有*号
 * 二是函数体内部使用yield表达式，定义不同的内部状态（yield 产出的意思）
 */
function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    return 'ending';
}
var hw = helloWorldGenerator();
// 调用 Generator 函数后，该函数并不执行，返回的也不是函数运行结果，
// 而是一个指向内部状态的指针对象，也就是上一章介绍的遍历器对象（Iterator Object）。
/**
 * yield表达式与return语句既有相似之处，也有区别。相似之处在于，都能返回紧跟在语句后面那个表达式的值。
 * 区别在于每次遇到yield，函数暂停执行，下次在从该位置向后执行，而return语句不具备位置记忆功能。
 * 一个函数里面只能执行一次return语句。但可以执行多次yield
 */

function* f() {
    console.log('执行了！')
}

var generator = f();

setTimeout(function() {
    generator.next() //执行了！  可以当做普通的暂缓函数进行使用 yield只能在generator函数中使用，否则报错
}, 2000);


var arr = [1, [[ 2, 3 ], 4 ],[ 5, 6 ]];

var flat = function*(a) {
    var length = a.length;
    for (var i = 0; i < length; i++) {
        var item = a[i];
        if (typeof item !== 'number') {
            yield* flat(item);
        } else {
            yield item;
        }
    }
};

for (var f of flat(arr)) {
    console.log(f);
}
// 1, 2, 3, 4, 5, 6 执行了！ 这里只可以是for循环  foreach里函数只是普通函数

// yield表达式如果用在另一个表达式之中，必须放在圆括号里面。
// yield表达式用作函数参数或放在赋值表达式的右边，可以不加括号。