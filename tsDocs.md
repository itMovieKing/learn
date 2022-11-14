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

# 类
## 继承
`
class Animal {  
    name: string;  
    constructor(theName: string) { this.name = theName; }  
    move(distanceInMeters: number = 0) {  
        console.log(`${this.name} moved ${distanceInMeters}m.`);  
    }  
}  

class Snake extends Animal {  
    constructor(name: string) { super(name); }  
    move(distanceInMeters = 5) {  
        console.log("Slithering...");  
        super.move(distanceInMeters);  
    }  
}  
`  
Snake --子类  
Animal --基类
Snake重写了Animal的move方法  
同时在构造函数中通过调用super，来调用基类的构造函数  
## 公共，私有与受保护的修饰符
类的**实例成员**是只有在实例化的时候才会被初始化的属性  
类的**静态成员**，存在于类本身而不是类的实例上
【注】public，private，protected仅在ts文件
默认为 **public**  
**private**私有的，不能在声明他的类之外访问，不能被继承，不能被实例化  
**protected** 被保护的，不能在声明外访问，但是可以在子类中被访问，可以被继承，但是不能被实例化  
**readonly** 只读属性，在声明时，或者构造函数中被初始化
## 存取器
对一些不可以随意修改对象的成员使用，只有get，没有set的属性，会被推断为readonly  
🌰[详见](./docsTS/classTS.ts) + 例子1  
## 静态属性
只能被类本身访问
## 抽象类
一般用作基类，不会被实例化  
抽象类中的抽象方法，必须在派生类中实现  
## 高级技巧
### 构造函数
ts中声明一个类的时候，同时声明了**类实例的类型**  
`class Greeter{}`  
`let g: Greeter = new Greeter()`  
let g: Greeter,此处g类的实例，Greeter就是作为类的实例的类型  
同时还声明了**构造函数**  new Greeter() 部分，Greeter就是构造函数  
### 接口可以继承类
`class Point{}`  
`interface Point3d extends Point {}`  

# 函数
函数类型包含两部分，参数类型和返回值类型  
参数类型声明部分只匹配类型，不匹配参数名  
**函数参数可选类型**可以是
`function(x: string, y?:string){}`  
也可以是
`function(x: string, y: string = 'test'){}`
也就是说有默认值的ts会认为是一个可选参数

# 泛型
`function identity<T>(arg: T): T {  
    return arg;  
}`  
`let output = identity<string>("myString");`  
## 泛型类
## 泛型约束
🌰[详见](./docsTS/classTS.ts) + 例子2
### 在泛型约束中 使用类型参数
一个参数被另外一个参数约束  
🌰[详见](./docsTS/classTS.ts) + 例子3
### 在泛型约束中 使用类类型
🌰[详见](./docsTS/classTS.ts) + 例子4  
# 枚举
## 数字枚举
🌰[详见](./docsTS/enumTS.ts) + 例子1  
默认首个成员的值为0，其余成员会自增  
如果某个成员被初始化了，其后的成员会自增  
【注】没有初始化的成员只能放在数字常量或者其他常量后面，不能放在被计算过的成员后面

## 字符串枚举
字符串枚举没有自增行为，所以**每个成员都必须初始化**
## 异构枚举
混用数字枚举和字符串枚举
## 计算和常量成员
枚举成员的值可以是被计算出来的，如数字枚举的成员值，也可以是一个常量   
枚举成员也可以用常量表达式初始化，注意此处常量表达式必须是ts表达式的子集  
且**常量表达式在编译阶段被计算**  
1,也可以理解为，枚举类型也是联合类型，每个枚举成员的联合
2,枚举是运行时真正存在的对象
3,反向映射，枚举名和枚举值互相映射,【注】字符串枚举类型不会被反向映射，[见编译后的结果](./docsTS/enumTS.js) + 例子4

## 常量枚举
常量枚举内部只能使用常量枚举类型，不允许计算类型，且**编译阶段会被删除**  
## 外部枚举
