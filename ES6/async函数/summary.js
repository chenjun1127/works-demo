/**
 * summary是Generator函数的语法糖。
 */
const fs = require('fs');

const readFile = function(fileName) {
    return new Promise(function(resolve, reject) {
        fs.readFile(fileName, function(error, data) {
            if (error) return reject(error);
            resolve(data);
        });
    });
};
const gen = function*() {
    const f1 = yield readFile('/etc/fstab');
    const f2 = yield readFile('/etc/shells');
    console.log(f1.toString());
    console.log(f2.toString());
};
// 等同于
const asyncReadFile = async function() {
    const f1 = await readFile('/etc/fstab');
    const f2 = await readFile('/etc/shells');
    console.log(f1.toString());
    console.log(f2.toString());
};

// async函数对 Generator 函数的改进，体现在以下四点。
// （1）内置执行器。与普通函数一模一样，只要一行
// asyncReadFile()
// （2）更好的语义。
// （3）更广的适用性。yield命令后面只能是 Thunk 函数或 Promise 对象，而async函数的await命令后面，可以是Promise 对象和原始类型的值（数值、字符串和布尔值，但这时等同于同步操作）。
// （4）返回值是 Promise。 可以直接then进行下一步
// async函数返回一个 Promise 对象，可以使用then方法添加回调函数。当函数执行的时候，一旦遇到await就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。
async function timeout(ms) {
    await new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function asyncPrint(value, ms) {
    await timeout(ms);
    console.log(value);
}

asyncPrint('hello world', 5000);
// hello world


// async函数多种使用形式
// 函数声明
async function foo() {}
// 函数表达式
const foo = async function() {}
// 对象的方法
let object = { async foo() {} }
object.foo().then()
// class的方法
class Storage {
    constructor() {
        this.cachePromise = caches.open('avataes')
    }
    async getAvatar(name) {
        const cache = await this.cachePromise
        return cache.match(`/avatars/${name}.jpg`)
    }
}
// 箭头函数
const foo = async() => {};