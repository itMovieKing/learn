//例子1, ReadonlyArray<T> 与 Array<T> 与 const
let arr: Array<number> = [1,2,3]
let readArr: ReadonlyArray<number> = [2,3,4]
readArr[0] = 1 // error, readonly 不可修改
const cArr: ReadonlyArray<number> = []
readArr = arr  // error, 类型不一致
readArr = arr as ReadonlyArray<number>  // 加一个类型断言可以实现不同类型之间的赋值
cArr = arr // error， const定义常量不可以被修改
cArr = arr as ReadonlyArray<number>  // error， const定义常量不可以被修改


//例子2, 额外的属性检查
interface SquareConfig {
  color?: string;
  width?: number;
}
function createSquare(config: SquareConfig): { color: string; area: number } {
  // ...
  let a: { color: string; area: number }
  return a
}
// 直接入参会有额外的属性检查
let mySuare = createSquare({ colour: "red", width: 100 });
// 【注】参数赋值给一个变量时,会绕过额外的属性检查
const sq: {colour: string, width: number} = { colour: "red", width: 100 }
let mySquare = createSquare(sq);
// 但是如果完全不满足接口，也是会有提示的
const pa = {wid: 1}
createSquare(pa)


// 例子3, 接口定义函数类型
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let funa: SearchFunc = function(source: string, subString: string) {
  let ba: boolean
  return ba
}
// 【注】并不要求参数名是一致的，只需对应位置上的参数类型是一致的，并且如果没有指定类型会进行类型推断
let funav: SearchFunc = function(sce: string, suring: string) {
  let ba: boolean
  return ba
}

// 3.1 

