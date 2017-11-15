/**
 * Promise是异步编程的一种解决方案，比传统的解决方案---回掉函数和事件---更合理和更强大。
 * 所谓Promise简单说就是一个容器，里面保存着某个未来才会结束的事件（通常一个异步操作）的结果。
 * 从语法说，Promise提供统一的API，各种异步操作都可以用同样的方法进行处理。
 */

/**
 * 特点：
 *（1）对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：pending（进行中） 
 * fulfilled（已成功）和rejected（以失败）。只有异步操作的结果，可以决定当前是哪一种状态
 * 任何其他操作都无法改变这个状态。
 * （2）一旦状态改变，就不会灾变，任何时候都可以得到这个结果。改变只有俩种可能：从pending变为
 * fulfilled和从pending变为rejected。只要这俩种情况发生，状态就凝固了，不会在变了，这是就称为resolved
 * (已定型)如果改变已经发生了，可以对Promise对象添加回掉函数,也可以立即得到这个结果。
 */

// const promise = new Promise();// 创建实例

// promise.then(function(res) {
//   // success
// },function(err) {
//   // failure
// })

let promise = new Promise(function(resolve, reject) {
    console.log('Promise');
    resolve();
});

promise.then(function() {
    console.log('resolved.');
});

console.log('Hi!');
//Promise
//Hi!
//resolved.

/**
 * 异步加载的图片函数
 */

function loadImageAsync(url) {
    return new Promise(function(resolve, reject) {
        var image = new Image()
        image.onload = function() {
            resolve(image)
        }
        image.onerror = function() {
            reject(new Error('could not load image at' + url))
        }
    })
}

/**
 * Promise对象实现的Ajax操作的例子
 */


var getJSON = function(url) {
    var promise = new Promise(function(resolve, reject) {
        var client = new XMLHttpRequest()
        client.open('GET', url)
        client.onreadystatechange = handler
        client.responseType = 'json'
        client.setRequestHeader('Accept', 'application/json')
        client.send()

        function handler() {
            if (this.readyState !== 4) {
                return
            }
            if (this.status === 200) {
                resolve(this.response)
            } else {
                reject(new Error(this.statusText))
            }
        }
    })
    return promise
}