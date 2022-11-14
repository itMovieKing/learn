"use strict";
exports.__esModule = true;
var enumTS_1 = require("./enumTS");
// never是其他所有类型的子类型
function neverFun() {
    throw new Error('');
}
var a;
a = neverFun;
// 类型断言
// 尖括号写法
var str = 'this is a string';
var strLen = str.length;
// as 写法
var strLeng = str.length;
console.log('A', enumTS_1.AAEnum.A, enumTS_1.AAEnum.B);
