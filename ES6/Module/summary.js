/**
 * ES6模块设计思想是尽量的静态化，使编译时能确定模块的依赖关系，以及输入和输出的变量
 * CommonJS和AMD模块都只能在运行时确定这些东西比如CommonJS模块就是对象，需要查找对象属性
 */

// CommonJS
let { stat, exists, readFile } = require('fs');

// 等同于
let _fs = require('fs');
let stat = _fs.stat;
let exists = _fs.exists;
let readFile = _fs.readFile;

//  等同于
import { stat, exists, readFile } from 'fs';