import { firstName, lastName, year } from './export'

// 想为输入的变量重新取一个名字，import命令要使用as关键字，将输入的变量重命名。
import { firstName as firstName1 } from './export'
// import命令具有提升效果，会提升到整个模块的头部，首先执
// 模块的整体加载

import * as object from './export'

// export default 本质上，export default就是输出一个叫做default的变量或方法，然后系统允许你为它取任意名字

// modules.js
function add(x, y) {
    return x * y;
}
export { add as default };
// 等同于
// export default add;

// app.js
import { default as foo } from 'modules';
// 等同于
// import foo from 'modules';


// CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
// CommonJS 模块是运行时加载，ES6 模块是编译时输出接口