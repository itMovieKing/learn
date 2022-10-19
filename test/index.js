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
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var a = new Animal('Jack');
console.log(a.name); // Jack
a.name = 'Tom';
console.log(a.name); // Tom
var resArr = [1, 2, 3];
export {};
