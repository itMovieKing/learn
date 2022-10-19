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

class Student {
  public constructor(public name: string) {}
}

const lily: Student = new Student('lily’s name')
console.log(lily.name) // lily’s name


// 定义
function createArray<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
      result[i] = value;
  }
  return result;
}
// 使用
createArray<string>(3, 'x');
// 泛型约束
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

let num: number = 7
let str: string = ''
loggingIdentity(num) // 类型“number”的参数不能赋给类型“Lengthwise”的参数
loggingIdentity(str)

// 泛型接口
// interface Res {
//   successful: string,
//   errorCode: string,
// }
// interface PermissionsRes<T> extends Res {
//   data: T
// }
// interface Permission {
//   permissions: string[]
// }
// const res: PermissionsRes<Permission> = {
//   successful: '1',
//   errorCode: '2',
//   data: {
//     permissions: ['admin']
//   }
// }
// console.log(res.data.permissions, res.errorCode, res.successful)


interface Res<T> {
  successful: string,
  errorCode: string,
  data?: T,
  errorDescription?: string,
}

interface ListResItem {
  name: string,
  id: number,
}

const listData: Res<ListResItem[]> = {
  successful: '1',
  errorCode: '1',
  data: [
    {
      name: '1',
      id: 1,
    }
  ]
}
const data = listData.data




export {}