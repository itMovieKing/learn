# 基础类型
布尔,
数字（ts中数字同js一样，都是浮点数，同时支持二进制和八进制，十六进制）,  
`let hexLiteral: number = 0xf00d;  `  
`let binaryLiteral: number = 0b1010;`  
`let octalLiteral: number = 0o744;`  
字符串  
数组  
元组  
`let a: [string, number]`  
枚举  
`enum Color {Red, Blue}; let c: Color = Color.Green;`  
Any  
Void  
Null or Undefinde  
Never  
never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型  
never是任何类型的子类型(不重要)  
Object  
可以方便的使用object上的一些方法  
**类型断言**  
1.尖括号写法(<类型>变量)  
2.as 写法(变量 as 类型)   
jsx中只允许第二种写法  
🌰[详见](./docsTS/baseTS.ts)  

***

# 变量声明（js）
## var
var声明的变量可以在包含他的函数，模块，命名空间，全局作用域内任何位置被访问
## let
块级作用域
存在暂时性死区
不能重复定义
同一个变量名，在内层的定义会屏蔽外层的定义
## const
常量
## 解构
`let [, second, , fourth] = [1, 2, 3, 4];`  
`let { a: newName1, b: newName2 } = o; // 重命名`   
`let {a, b}: {a: string, b: number} = o;  // ts type`  
` let { a, b = 1001 } = wholeObject;  // 默认值`  
## 展开
`...obj`
# 接口
## 可选属性
## 只读属性
ReadonlyArray<T> 与 Array<T>  
ReadonlyArray，所有的内容都不可修改，包括数组的属性以及引用内容（数组里面的每一项)  
ReadonlyArray<T> 与 const  
首先ReadonlyArray只是类型检查，只作用于编译阶段，不作用于运行阶段  
ReadonlyArray只是类型检查，如果是想引用值不被改变还是要const  
🌰[详见](./docsTS/interfaceTS.ts) + 例子1
## 额外的属性检查
🌰[详见](./docsTS/interfaceTS.ts) + 例子2
## 接口定义函数类型
定义函数的入参和返回
🌰[详见](./docsTS/interfaceTS.ts) + 例子3
## 定义可索引类型
【注】索引为number类型的值类型必须为string 值类型的 **子类型** 因为number索引会被转成string  
`interface StringArray {
  [index: number]?: string;
  [index: string]?: string | boolean;
}`
## 类类型
接口仅描述类的公共部分
## 接口可以互相继承
`interface Square extends Shape {
    sideLength: number;
}`  
继承多个  
`interface Square extends Shape, PenStroke {
    sideLength: number;
}`
