/**
 * 模块功能主要由俩个命令构成：export和import.export命令用于规定模块的对外接口
 * import命令用于输入其他模块提供的功能
 */

export var firstName = 'Michael'
export var lastName = 'Jackson'
export var year = 1958

// 等同于
var firstName1 = 'Michael';
var lastName1 = 'Jackson';
var year1 = 1958;
export {
    firstName1,
    lastName1,
    year1
};

// export命令除了输出变量，还可以输出函数或类（class）。

// export输出的变量就是本来的名字，但是可以使用as关键字重命名。
function v1() {}

function v2() {}
export {
    v1 as streamV1,
    v2 as streamV2,
    v2 as streamLatestVersion
};