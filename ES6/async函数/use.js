async function f(params) {
    return 'hello world'
}

f().then(v => console.log(v)) //hello world

// async函数返回的 Promise 对象，必须等到内部所有await命令后面的 Promise 对象执行完，才会发生状态改变，除非遇到return语句或者抛出错误。也就是说，只有async函数内部的异步操作执行完，才会执行then方法指定的回调函数。

async function f1() {
    await Promise.reject('出错了');
}

f1().then(v => console.log(v)).catch(e => console.log(`catch:${e}`));
// 只要一个await语句后面的 Promise 变为reject，那么整个async函数都会中断执行。
async function f2() {
    await Promise.reject('出错了');
    await Promise.resolve('hello world'); // 不会执行
}
// 如果希望异步操作失败不影响到后面的异步操作 放在 try catch 结构里 
async function f3() {
    try {
        await Promise.reject('出错了');
    } catch (e) {}
    return await Promise.resolve('hello world');
}

f3().then(v => console.log(v));