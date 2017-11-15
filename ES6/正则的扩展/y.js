/**
 * y修饰符的作用与g修饰符类似，也是全局匹配
 * 不同之处g只要剩余的位置存在匹配就可，而y修饰符确保匹配从剩余的第一个位置开始
 */
var s = "aaa_aa_a";
var r1 = /a+/g;
var r2 = /a+/y;

console.log(r1.exec(s));
console.log(r2.exec(s));

console.log(r1.exec(s));
console.log(r2.exec(s));

/**
 * 	[ 'aaa', index: 0, input: 'aaa_aa_a' ]
  	[ 'aaa', index: 0, input: 'aaa_aa_a' ]
  	[ 'aa', index: 4, input: 'aaa_aa_a' ]
  	null
 */