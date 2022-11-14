// 例子1, class存取器
// 私有属性 _fullName 可以被保护起来，只能通过存取器对其进行存取
let passcode = "secret passcode";

class Employee {
  private _fullName: string;

  get fullName(): string {
      return this._fullName;
  }

  set fullName(newName: string) {
      if (passcode && passcode == "secret passcode") {
          this._fullName = newName;
      }
      else {
          console.log("Error: Unauthorized update of employee!");
      }
  }
}

let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    alert(employee.fullName);
}


// 类
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter: Greeter;
greeter = new Greeter("world");
console.log(greeter.greet());


// 例子2，泛型约束
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}

// 例子3，泛型使用类型参数
function getProperty<T extends Object, K extends keyof T>(obj: T , key: K ) {
    return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, "a");
getProperty(x, "m"); // m不是x的key

// 例子4， 泛型使用类类型
// 使用原型属性推断并约束构造函数与类实例的关系。
function create<T>(c: {new(): T; }): T {
    return new c();
}

class BeeKeeper {
    hasMask: boolean;
}

class ZooKeeper {
    nametag: string;
}

class Animal {
    numLegs: number;
}

class Bee extends Animal {
    keeper: BeeKeeper;
}

class Lion extends Animal {
    keeper: ZooKeeper;
}

function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}

createInstance(Lion).keeper.nametag;  // typechecks!
createInstance(Bee).keeper.hasMask;