/*let {foo,bar,bax} = {bar: "aaa",foo: "bbb",baz: "ccc"};

console.log(foo,bar,bax); // aaa bbb undefiend
*/

let { foo, bar, baz: bax } = { bar: "aaa", foo: "bbb", baz: "ccc" };

console.log(foo, bar, bax); // aaa bbb ccc

let { a: b, c: d } = { a: "aaa", c: "ccc" };

console.log(b, d); //aaa ccc

let obj = {
    p: [
        'Hello',
        { y: 'World' }
    ]
};

let { p: [x, { y }] } = obj;
console.log(x, y);


var node = {
    loc: {
        start: {
            line: 1,
            column: 5
        }
    }
};

var { loc, loc: { start }, loc: { start: { line, column: col } } } = node;
console.log(loc, start, line, col);


var { x: bxas = 3 } = { x: 5 };

console.log(bxas); // 5



let xxx;
({ xxx } = { xxx: 1 });
console.log(xxx); //1 放在()里面防止呗认为时代码块