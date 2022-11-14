// 例子1，数字枚举
console.log("********* enum *************");
/**
 * 默认从0开始，如果给定某个值的初始值，其后的值会自增
 * */
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 3] = "Down";
    Direction[Direction["Left"] = 4] = "Left";
    Direction[Direction["Right"] = 5] = "Right";
})(Direction || (Direction = {}));
console.log('Direction', Direction);
/**
 * Direction {
  '0': 'Up',
  '3': 'Down',
  '4': 'Left',
  '5': 'Right',
  Up: 0,
  Down: 3,
  Left: 4,
  Right: 5
}
 * */
console.log('test', Direction.Left);
console.log("********* enum I *************");
var DirectionI;
(function (DirectionI) {
    DirectionI[DirectionI["Up"] = 0] = "Up";
    DirectionI[DirectionI["Down"] = 1] = "Down";
    DirectionI[DirectionI["Left"] = 2] = "Left";
    DirectionI[DirectionI["Right"] = 3] = "Right";
})(DirectionI || (DirectionI = {}));
console.log('Direction', DirectionI);
console.log('test', DirectionI.Left);
// 例子2， 计算出枚举成员的值
/**
 * &：与运算符
 * |：或运算符
 * ^：异或
 * ~：非
 * <<：左移，m << n    result = m * 2^n(2的n次方)
 * >>：右移，m >> n    result = m / 2^n（结果向下取整）
 * */
console.log('******** 计算出枚举成员的值 ************');
var FileAccess;
(function (FileAccess) {
    // constant members
    FileAccess[FileAccess["None"] = 0] = "None";
    FileAccess[FileAccess["Read"] = 2] = "Read";
    FileAccess[FileAccess["Write"] = 1] = "Write";
    FileAccess[FileAccess["ReadWrite"] = 3] = "ReadWrite";
    // computed member
    FileAccess[FileAccess["G"] = "123".length] = "G";
})(FileAccess || (FileAccess = {}));
console.log('FileAccess', FileAccess);
// 例子3， 枚举之反向映射
console.log('******** 枚举之反向映射 ************');
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
})(Enum || (Enum = {}));
// Enum { '0': 'A', A: 0 }
// 所以Enum.A 的值是0，Enum[aa]也就是Enum[0]也就是'A'
var aa = Enum.A;
var nameOfA = Enum[aa];
console.log('nameOfA', nameOfA);
// 外部枚举
console.log('******** 外部枚举 ************');
console.log('AAEnum', AAEnum.A, AAEnum.B);
console.log('******** string枚举之反向映射 ************');
var StringEnum;
(function (StringEnum) {
    StringEnum["A"] = "sd";
})(StringEnum || (StringEnum = {}));
var aaastring = StringEnum.A;
// let nameOfAA = StringEnum[aaastring];
// console.log('nameOfAAAAA', nameOfAA)
// // 常量枚举，看下编译结果
// const enum ConstEnum {
//   A = 1,
//   B = A * 2
// }
// const enum ConstDirections {
//   Up,
//   Down,
//   Left,
//   Right
// }
// let directions = [ConstDirections.Up, ConstDirections.Down, ConstDirections.Left, ConstDirections.Right]
