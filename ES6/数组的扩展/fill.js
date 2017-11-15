//  fill方法使用给定值，填充一个数组。
console.log(['a', 'b', 'c'].fill(7)); // [ 7, 7, 7 ]
console.log(new Array(3).fill(7, 1, 3)); // [ , 7, 7 ]
// 第二个参数和第三个参数代表填充的位置