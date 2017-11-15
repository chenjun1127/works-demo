/**
 * 数组实例的copyWithin方法，在当前数组内部，将指定位置的的成员复制到其他位置，然后返回当前数组
 * 会改变原始数组
 * 接受3个参数 target从该位置开始替换数据 start开始读取，end停止读取
 */

console.log([1, 2, 3, 4, 5].copyWithin(0, 3)); // [ 4, 5, 3, 4, 5 ]
console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4)); // [ 4, 2, 3, 4, 5 ]
console.log([1, 2, 3, 4, 5].copyWithin(0, -2, -1)); // [ 4, 2, 3, 4, 5 ]