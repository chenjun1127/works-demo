// ES2017 引入了字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全。
// padStart()用于头部补全，padEnd()用于尾部补全


console.log('x'.padStart(5,'sb'));
console.log('x'.padStart(3,'sbs'));
console.log('x'.padEnd(5,'sbs'));
console.log('x'.padEnd(3,'sbs'));
console.log('xs'.padEnd(1,'sbs'));
console.log('xs'.padStart(6,)); //     xs
