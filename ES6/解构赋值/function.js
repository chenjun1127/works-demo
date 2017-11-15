function add([x, y]) {
    return x + y
}
console.log(add([1, 2])); // 3

console.log([
    [1, 2],
    [3, 4]
].map(([a, b]) => a + b));
// [3,7]

function move({ x = 0, y = 0 }) {
    return [x, y]
}
console.log(move({ x: 3, y: 8 })); //[3,8]
console.log(move({ x: 3 })); //[3,0]
console.log(move({})); //[0,0]
[1, undefined, 3].map((xss = 'yes') => xss);
// [ 1, 'yes', 3 ]