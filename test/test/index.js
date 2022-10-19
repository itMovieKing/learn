// type Cat = {
//   name: string
// }
// let cola: Cat = {
//   name: 'cola'
// }
// let dog: Animal;
// let err: Api;
// let res: Rs;
// export class Animal {
//   private name;
//   public constructor(name: string) {
//     this.name = name;
//   }
// }
// 类的修饰符
// class Animal {
//   public name: string;
//   public constructor(name: string) {
//     this.name = name;
//   }
// }
// let a: Animal = new Animal('Jack');
// console.log(a.name); // Jack
// a.name = 'Tom';
// console.log(a.name); // Tom
var Student = /** @class */ (function () {
    function Student(name) {
        this.name = name;
    }
    return Student;
}());
var lily = new Student("lily's name");
console.log(lily.name); // lily’s name
// 定义
function createArray(length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
// 使用
createArray(3, 'x');
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
var num = 7;
var str = '';
// loggingIdentity(num) // 类型“number”的参数不能赋给类型“Lengthwise”的参数
loggingIdentity(str);
var listData = {
    successful: '1',
    errorCode: '1',
    data: [
        {
            name: '1',
            id: 1,
        }
    ]
};
var data = listData.data;
export {};
