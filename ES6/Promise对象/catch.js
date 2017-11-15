// Promise.prototype.catch方法是.then(null, rejection)的别名，
//用于指定发生错误时的回调函数。

getJSON('/posts.json').then(function(posts) {
    // ...
}).catch(function(error) {
    // 处理 getJSON 和 前一个回调函数运行时发生的错误
    console.log('发生错误！', error);
});

// 如果该对象状态变为resolved 则会调用then方法指定的回调函数；如果异步操作抛出错误，状态
// 变为rejected，就会用catch方法制定的回调函数。如果运行中抛出错误，也会被catch获取

// 一般来说，不要在then方法里面定义Reject状态的回调函数（即then的第二个参数），总是使用catch方法。

Promise.then(function(data) { //cb
    // success
}).catch(function(err) {
    // error
});