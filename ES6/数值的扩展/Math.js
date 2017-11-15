// Math.trunc() 用于去除小数部分，返回整数部分
console.log(Math.trunc(4.1)); // 4
console.log(Math.trunc(4.9)); // 4
console.log(Math.trunc(-4.9)); // -4
console.log(Math.trunc(-0.241)); // 0
console.log(Math.trunc(NaN)); // NaN
console.log(Math.trunc('foo')); // NaN
console.log(Math.trunc()); // NaN

// Math.sign() 用来判断一个数到底是正数(+1)、负数(-1)、零(0/-0)
console.log(Math.sign(-5)); // -1
console.log(Math.sign(5)); // 1
console.log(Math.sign(0)); // 0
console.log(Math.sign(-0)); // -0
console.log(Math.sign('foo')); // NaN
console.log(Math.sign()); // NaN

// Math.cbrt() 计算一个数立方根
console.log(Math.cbrt(-1)); // -1
console.log(Math.cbrt(8)); // 2

// Math.fround() 返回一个数的单精度浮点数形式。
console.log(Math.fround(1.337)); //1.3370000123977661
console.log(Math.fround(NaN)); //NaN
console.log(Math.fround(1.5)); // 1.5

// Math.hypot方法返回所有参数的平方和的平方根

console.log(Math.hypot(3, 4)); // 5