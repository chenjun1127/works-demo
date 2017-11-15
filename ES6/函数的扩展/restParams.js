/**
 * ...变量名，用于获取函数的多余参数，这样就不需要使用arguments对象了
 */
function add(x, ...values) {
    let sum = 0;
    for (var val of values) {
        sum += val;
    }
    return sum;
}
console.log(add(undefined, 1, 2, 3)) // 6
console.log((function(a, ...b) {}).length) // 1 不包括rest值