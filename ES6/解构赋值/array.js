let [a,b,c] = [3,2,1];

console.log(a,b,c); // 3 2 1

let [foo,[[bar],baz]] = [1,[[2],3]];

console.log(foo,bar,baz); // 1 2 3

let [,,third] = ["foo","bar","baz"];

console.log(third); // baz

let [head,...tail] = [1,2,3,4];

console.log(head,tail); // 1 [2,3,4]

let [x,y,...z] = ['a'];

console.log(x,y,z); // a undefined []

let [q,w,e] = new Set(['a','b','c']);

console.log(q,w,e); // a b c

let [hehe = true] = [];

console.log(hehe); // true

let [m = 1] = [null];

console.log(m); //null

function f() {
  console.log('aaa');
}

let [n = f()] = [1];

console.log(n); // 1
