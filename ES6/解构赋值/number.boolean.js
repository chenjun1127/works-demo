let { toString: s } = 123;
console.log(s === Number.prototype.toString); //true


let { toString: sb } = true;
console.log(sb === Boolean.prototype.toString); // true