/**
 * yield表达式本身没有返回值，或者说总是返回undefined。next方法可以带一个参数
 * 该参数就会被当作上一个yield表达式的返回值
 */
function* f() {
    for (var i = 0; true; i++) {
        var reset = yield i
        if (reset) {
            i = -1
        }
    }
}
var g = f()

function* dataConsumer() {
    console.log('Started');
    console.log(`1. ${yield}`);
    console.log(`2. ${yield}`);
    return 'result';
}

let genObj = dataConsumer();
genObj.next();
// Started
genObj.next('a')
// 1. a
genObj.next('b')
// 2. b