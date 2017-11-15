
{
  let a = 'ES6';
  var b = 'ES2015';
}
console.log(b); //  ES2015
console.log(a); //  a is not defined


/*
var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 10
*/


/*暂时性死区
if (true) {
  // TDZ开始
  tmp = 'abc'; // ReferenceError
  console.log(tmp); // ReferenceError

  let tmp; // TDZ结束
  console.log(tmp); // undefined

  tmp = 123;
  console.log(tmp); // 123
}
*/
/*
var tmp = new Date();

function f() {
  console.log(tmp);
  if (false) {
    var tmp = 'hello world';
  }
}

f(); // undefined
*/
/*
var s = 'hello';

for (let i = 0; i < s.length; i++) {
  console.log(s[i]);
}

console.log(i); // 5
*/
/*
function f1() {
  let n = 5;
  if (true) {
    let n = 10;
  }
  console.log(n); // 5
}
f1()
*/
/*
function f() { console.log('I am outside!'); }

(function () {
  if (false) {
    // 重复声明一次函数f
    function f() { console.log('I am inside!'); }
  }

  f();
}());
*/

/*
let x = do {
  let t = 5;
  t * t + 1;
};
console.log(x);
*/


var a = 1;
// 如果在Node的REPL环境，可以写成global.a
// 或者采用通用方法，写成this.a
console.log(global.a); // 1

let b = 1;
console.log(global.b);
// undefined