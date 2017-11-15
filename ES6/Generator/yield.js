/**
 * Generator函数内部，调用另一个Generator函数，默认情况下没有效果
 * 这时需要yield*表达式，用来在一个Generator函数里面执行另一个Generator函数
 */
function* foo() {
    yield 'a';
    yield 'b';
}

function* bar() {
    yield 'x'
    yield* foo()
    yield 'y'
}

// 等同于
function* bar() {
    yield 'x';
    yield 'a';
    yield 'b';
    yield 'y';
}
// 等同于
function* bar() {
    yield 'x';
    for (let v of foo()) {
        yield v;
    }
    yield 'y';
}
for (let v of bar()) {
    console.log(v); // x a b y
}

// 如果yield表达式后面跟的是一个遍历器对象，需要在yield表达式后面加上星号
// 表明它返回一个遍历器对象。这被称作yield*表达式

let delegatedIterator = (function*() {
    yield 'Hello!';
    yield 'Bye!';
}());

let delegatingIterator = (function*() {
    yield 'Greetings!';
    yield* delegatedIterator;
    yield 'Ok, bye.';
}());

for (let value of delegatingIterator) {
    console.log(value);
}
// Greetings!
// Hello!
// Bye!
// Ok, bye.

// 实际上，任何数据结构只要有 Iterator 接口，就可以被yield * 遍历。

let read = (function*() {
    yield 'hello';
    yield*'hello';
})();

console.log(read.next().value) // "hello"
console.log(read.next().value) // "h"



function* iterTree(tree) {
    if (Array.isArray(tree)) {
        for (let i = 0; i < tree.length; i++) {
            yield* iterTree(tree[i])
        }
    } else {
        yield tree
    }
}

const tree = ['a', 'b', 'c', ['d', 'e']]

for (let x of iterTree(tree)) {
    console.log(x)
}
//  a b c d e