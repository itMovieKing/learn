// never是其他所有类型的子类型
function neverFun (): never  {
  throw new Error('')
}
let a: any
a = neverFun

// 类型断言
// 尖括号写法
let str: any = 'this is a string'
let strLen: number = (<string>str).length
// as 写法
let strLeng: number = (str as string).length
