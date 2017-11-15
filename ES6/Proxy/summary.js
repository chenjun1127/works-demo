/**
 * Proxy用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于元编程，即对编程语言进行编程
 * Proxy可以理解成，在目标对象之前架设一层‘拦截’，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制
 * 可以对外界的访问进行过滤和改写。Proxy这个词原意是代理，用在这里表示由她来代理某些操作，可以译为代理器
 */

var obj = new Proxy({}, {
    get: function (target, key, receiver) {
        console.log(`getting ${key}!`);
        console.log(target, key, receiver);
        return Reflect.get(target, key, receiver)
    },
    set: function (target, key, value, receiver) {
        console.log(`setting ${key}!`);
        console.log(target, key, value, receiver)
        return Reflect.get(target, key, value, receiver)
    }
})

// obj.count = 1 // setting count!


// ES6原生提供Proxy构造函数,用来生成Proxy实例

// const proxy = new Proxy(target, handler)  target表示要勘拦截的目标对象，Handler定制拦截行为



var obj2 = new Proxy({}, {
    get: function (target, property) {
        return 35
    }

})
console.log(obj2.time) // 35



/**
 * Proxy 实例的方法
 */

var person = {
    name: "张三"
};

var proxy = new Proxy(person, {
    get: function (target, property) {
        //console.log(target, property)
        if (property in target) {
            return target[property];
        } else {
            return 'error'
            //throw new ReferenceError("Property \"" + property + "\" does not exist.");
        }
    }
});

console.log(proxy.name) // "张三"
console.log(proxy.age) // error

// apply() 方法拦截函数的调用，call和apply操作
//  接受3个参数 目标对象的上下文对象（this） 和目标对象的参数数组
var target = function () {
    console.log('I\'m the target')
}
var handler = {
    apply(target, ctx, args) {
        return "I'm the proxy";
        return Reflect.apply(...arguments)
    }
}
var p = new Proxy(target, handler)
console.log(p()) // I'm the proxy

// http://es6.ruanyifeng.com/#docs/proxy